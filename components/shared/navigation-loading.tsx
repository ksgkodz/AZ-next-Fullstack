'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loading } from '@/components/ui/spinner'

export default function NavigationLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Set loading to false when pathname changes (page has loaded)
    setIsLoading(false)
  }, [pathname])

  useEffect(() => {
    // Listen for route changes
    const handleRouteStart = () => setIsLoading(true)
    const handleRouteComplete = () => setIsLoading(false)

    // Add event listeners for link clicks and form submissions
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.href && link.href !== window.location.href) {
        // Check if it's an internal link
        try {
          const url = new URL(link.href)
          if (url.origin === window.location.origin) {
            setIsLoading(true)
            // Auto-clear loading after 10 seconds as fallback
            setTimeout(() => setIsLoading(false), 10000)
          }
        } catch (e) {
          // Invalid URL, ignore
        }
      }
    }

    // Handle form submissions that might navigate
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement
      if (form && form.action && form.method) {
        try {
          const url = new URL(form.action, window.location.origin)
          if (url.origin === window.location.origin) {
            setIsLoading(true)
            // Auto-clear loading after 10 seconds as fallback
            setTimeout(() => setIsLoading(false), 10000)
          }
        } catch (e) {
          // Invalid URL, ignore
        }
      }
    }

    // Handle button clicks that might trigger navigation
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement
      const button = target.closest('button')

      if (button && (button.type === 'submit' || button.form)) {
        setIsLoading(true)
        // Auto-clear loading after 8 seconds as fallback for buttons
        setTimeout(() => setIsLoading(false), 8000)
      }
    }

    document.addEventListener('click', handleLinkClick)
    document.addEventListener('submit', handleFormSubmit)
    document.addEventListener('click', handleButtonClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
      document.removeEventListener('submit', handleFormSubmit)
      document.removeEventListener('click', handleButtonClick)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="w-full h-1 bg-gray-200">
        <div className="h-full bg-blue-600 animate-pulse" style={{ width: '100%' }} />
      </div>
      <div className="flex justify-center py-2">
        <Loading
          spinner={{ variant: 'default', size: 'sm' }}
          className="text-sm"
        />
      </div>
    </div>
  )
}

// Hook for manual loading control
export function useNavigationLoading() {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return { isLoading, startLoading, stopLoading }
}