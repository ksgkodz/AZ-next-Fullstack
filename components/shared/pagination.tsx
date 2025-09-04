'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { formUrlQuery } from '@/lib/utils'

import { Button } from '../ui/button'

type PaginationProps = {
  page: number | string
  totalPages: number
  urlParamName?: string
}

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const t = useTranslations()

  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString(),
    })

    router.push(newUrl, { scroll: true })
  }
  return (
    <div className='flex items-center justify-center gap-4 mt-4'>
      <Button
        size='lg'
        variant='outline'
        className='flex items-center gap-1'
        onClick={() => onClick('prev')}
        disabled={Number(page) <= 1}
      >
        <ChevronLeft className='h-4 w-4' /> {t('Search.Previous')}
      </Button>
      <span className='text-sm font-medium whitespace-nowrap'>
        {t('Search.Page')} {page} {t('Search.of')} {totalPages}
      </span>
      <Button
        size='lg'
        variant='outline'
        className='flex items-center gap-1'
        onClick={() => onClick('next')}
        disabled={Number(page) >= totalPages}
      >
        {t('Search.Next')} <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}

export default Pagination