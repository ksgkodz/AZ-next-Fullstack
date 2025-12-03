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

const strokeWidthMap = {
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
}

// Modern Material Design 3-inspired circular spinner
function DefaultSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  const sizeValue = size === 'sm' ? 16 : size === 'md' ? 24 : size === 'lg' ? 32 : 48
  const strokeWidth = strokeWidthMap[size]
  const radius = (sizeValue - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI

  return (
    <div className={cn('inline-block', sizeClasses[size], className)}>
      <svg
        className="spinner-rotate"
        width={sizeValue}
        height={sizeValue}
        viewBox={`0 0 ${sizeValue} ${sizeValue}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle - subtle */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        {/* Animated arc - primary color */}
        <circle
          cx={sizeValue / 2}
          cy={sizeValue / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-primary spinner-arc"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference * 0.25,
          }}
        />
      </svg>
    </div>
  )
}

// Modern smooth bouncing dots
function DotsSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-2.5 h-2.5' : 'w-3 h-3'
  const gap = size === 'sm' ? 'gap-1' : size === 'md' ? 'gap-1.5' : 'gap-2'

  return (
    <div className={cn('inline-flex items-center', gap, className)}>
      <div
        className={cn('bg-primary rounded-full dot-bounce', dotSize)}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={cn('bg-primary rounded-full dot-bounce', dotSize)}
        style={{ animationDelay: '160ms' }}
      />
      <div
        className={cn('bg-primary rounded-full dot-bounce', dotSize)}
        style={{ animationDelay: '320ms' }}
      />
    </div>
  )
}

// Modern pulsing ring
function PulseSpinner({ size = 'md', className }: Pick<SpinnerProps, 'size' | 'className'>) {
  return (
    <div className={cn('relative inline-block', sizeClasses[size], className)}>
      {/* Outer pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-primary/30 pulse-ring"
           style={{ animationDelay: '0s' }} />
      {/* Middle pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-primary/40 pulse-ring"
           style={{ animationDelay: '0.4s' }} />
      {/* Inner solid circle */}
      <div className="absolute inset-0 rounded-full bg-primary scale-50" />
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