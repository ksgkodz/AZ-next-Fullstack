import { Loading } from '@/components/ui/spinner'
import { useTranslations } from 'next-intl'

interface PageLoadingProps {
  text?: string
  showText?: boolean
}

export default function PageLoading({ text, showText = false }: PageLoadingProps) {
  const t = useTranslations('Loading')

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm'>
      <div className='flex flex-col items-center gap-4'>
        <div className='relative'>
          {/* Subtle glow effect behind spinner */}
          <div className='absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150' />
          <Loading
            text={showText ? (text || t('Loading')) : undefined}
            spinner={{ variant: 'default', size: 'xl' }}
            className="justify-center relative z-10"
          />
        </div>
      </div>
    </div>
  )
}