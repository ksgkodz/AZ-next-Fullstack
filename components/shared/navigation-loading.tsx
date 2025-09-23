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

    // Add event listeners for link clicks
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.href && link.href !== window.location.href) {
        // Check if it's an internal link
        const url = new URL(link.href)
        if (url.origin === window.location.origin) {
          setIsLoading(true)
        }
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
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