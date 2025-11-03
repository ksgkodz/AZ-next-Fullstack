import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Home } from 'lucide-react'

const PAGE_TITLE = 'Your Addresses'
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

export default function AddressesPage() {
  return (
    <div className='mb-24'>
      <div className='flex gap-2'>
        <Link href='/account'>Your Account</Link>
        <span>›</span>
        <span>{PAGE_TITLE}</span>
      </div>
      <h1 className='h1-bold py-4'>{PAGE_TITLE}</h1>

      <Card className='max-w-2xl'>
        <CardContent className='p-8 text-center'>
          <Home className='w-16 h-16 mx-auto mb-4 text-muted-foreground' />
          <h2 className='text-xl font-semibold mb-2'>Address Management</h2>
          <p className='text-muted-foreground mb-4'>
            Manage your saved shipping addresses for faster checkout
          </p>
          <div className='bg-muted p-4 rounded-md'>
            <p className='text-sm text-muted-foreground'>
              This feature will be implemented in the next version
            </p>
            <p className='text-xs text-muted-foreground mt-2'>
              For now, you can enter your shipping address during checkout
            </p>
          </div>
        </CardContent>
      </Card>

      <div className='mt-8 max-w-2xl'>
        <h3 className='text-lg font-semibold mb-4'>Coming Soon:</h3>
        <ul className='space-y-2 text-muted-foreground'>
          <li>• Add and save multiple shipping addresses</li>
          <li>• Set a default address for faster checkout</li>
          <li>• Edit and remove saved addresses</li>
          <li>• Add delivery instructions for each address</li>
        </ul>
      </div>
    </div>
  )
}
