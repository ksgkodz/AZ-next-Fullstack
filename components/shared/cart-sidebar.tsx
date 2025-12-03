import useCartStore from '@/hooks/use-cart-store'
import useSettingStore from '@/hooks/use-setting-store'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { TrashIcon } from 'lucide-react'
import ProductPrice from './product/product-price'
import { useLocale, useTranslations } from 'next-intl'
import { getDirection } from '@/i18n-config'

export default function CartSidebar() {
  const {
    cart: { items, itemsPrice },
    updateItem,
    removeItem,
  } = useCartStore()

  const {
    setting: {
      common: { freeShippingMinPrice },
    },
  } = useSettingStore()

  // Safely handle translations context
  let t: any, locale: string
  try {
    t = useTranslations()
    locale = useLocale()
  } catch {
    // Fallback when NextIntl context is not available
    t = (key: string) => key.split('.').pop() || key
    locale = 'en-US'
  }

  return (
    <div className='w-40 overflow-hidden'>
      <div
        className={`w-40 fixed h-full bg-background ${
          getDirection(locale) === 'rtl' ? 'border-r' : 'border-l'
        }`}
      >
        <div className='p-3 h-full flex flex-col gap-2'>
          <div className='text-center space-y-2 flex-shrink-0'>
            <div className='text-sm font-medium'>{t('Cart.Subtotal')}</div>
            <div className='font-bold text-lg'>
              <ProductPrice price={itemsPrice} plain />
            </div>
            {itemsPrice > freeShippingMinPrice && (
              <div className='text-center text-xs text-green-600'>
                {t('Cart.Your order qualifies for FREE Shipping')}
              </div>
            )}

            <Link
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-full hover:no-underline w-full text-xs'
              )}
              href='/cart'
            >
              {t('Cart.Go to Cart')}
            </Link>
            <Separator className='mt-3' />
          </div>

          <ScrollArea className='flex-1 w-full max-h-[calc(100vh-300px)]'>
            <div className='space-y-3 pr-2'>
              {items.map((item) => (
                <div key={item.clientId} className='space-y-2'>
                  <div className='relative h-20 w-full cursor-pointer' onClick={() => window.location.href = `/product/${item.slug}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes='160px'
                      className='object-contain rounded'
                    />
                  </div>
                  <div className='text-xs text-center font-bold'>
                    <ProductPrice price={item.price} plain />
                  </div>
                  <div className='flex items-center justify-between gap-1'>
                    <Select
                      value={item.quantity.toString()}
                      onValueChange={(value) => {
                        updateItem(item, Number(value))
                      }}
                    >
                      <SelectTrigger className='text-xs w-14 h-7 px-1'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: item.countInStock }).map(
                          (_, i) => (
                            <SelectItem value={(i + 1).toString()} key={i + 1}>
                              {i + 1}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <Button
                      type='button'
                      variant={'outline'}
                      size={'sm'}
                      className='h-7 w-7 p-0 flex-shrink-0'
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        e.nativeEvent.stopImmediatePropagation()
                        removeItem(item)
                        return false
                      }}
                    >
                      <TrashIcon className='w-3 h-3' />
                    </Button>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}