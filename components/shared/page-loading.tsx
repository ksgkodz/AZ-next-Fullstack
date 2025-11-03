import { Loading } from '@/components/ui/spinner'
import { useTranslations } from 'next-intl'

interface PageLoadingProps {
  text?: string
  showText?: boolean
}

export default function PageLoading({ text, showText = false }: PageLoadingProps) {
  const t = useTranslations('Loading')

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md'>
      <div className='p-6 rounded-lg shadow-md w-full max-w-sm text-center'>
        <Loading
          text={showText ? (text || t('Loading')) : undefined}
          spinner={{ variant: 'default', size: 'xl' }}
          className="justify-center"
        />
      </div>
    </div>
  )
}