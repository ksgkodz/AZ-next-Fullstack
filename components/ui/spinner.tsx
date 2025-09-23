import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  variant?: 'default' | 'dots' | 'pulse'
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

function DefaultSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
        sizeClasses[size],
        className
      )}
    />
  )
}

function DotsSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-1.5 h-1.5' : size === 'lg' ? 'w-2 h-2' : 'w-3 h-3'

  return (
    <div className={cn('flex space-x-1', className)}>
      <div className={cn('bg-blue-600 rounded-full animate-bounce', dotSize)} style={{ animationDelay: '0ms' }} />
      <div className={cn('bg-blue-600 rounded-full animate-bounce', dotSize)} style={{ animationDelay: '150ms' }} />
      <div className={cn('bg-blue-600 rounded-full animate-bounce', dotSize)} style={{ animationDelay: '300ms' }} />
    </div>
  )
}

function PulseSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className={cn('bg-blue-600 rounded-full animate-pulse', sizeClasses[size])} />
      <div className={cn('bg-blue-600 rounded-full animate-pulse', sizeClasses[size])} style={{ animationDelay: '0.1s' }} />
      <div className={cn('bg-blue-600 rounded-full animate-pulse', sizeClasses[size])} style={{ animationDelay: '0.2s' }} />
    </div>
  )
}

export function Spinner({ size = 'md', className, variant = 'default' }: SpinnerProps) {
  switch (variant) {
    case 'dots':
      return <DotsSpinner size={size} className={className} />
    case 'pulse':
      return <PulseSpinner size={size} className={className} />
    default:
      return <DefaultSpinner size={size} className={className} />
  }
}

interface LoadingProps {
  text?: string
  spinner?: SpinnerProps
  className?: string
  centered?: boolean
}

export function Loading({
  text,
  spinner = { variant: 'default', size: 'md' },
  className,
  centered = true
}: LoadingProps) {
  return (
    <div className={cn(
      'flex items-center gap-2',
      centered && 'justify-center',
      className
    )}>
      <Spinner {...spinner} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  )
}

export default Spinner