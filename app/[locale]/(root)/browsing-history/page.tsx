import { Metadata } from 'next'
import BrowsingHistoryList from '@/components/shared/browsing-history-list'

const PAGE_TITLE = 'Browsing History'
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

export default function BrowsingHistoryPage() {
  return (
    <div className='p-4'>
      <h1 className='h1-bold py-4'>{PAGE_TITLE}</h1>
      <div className='text-muted-foreground mb-4'>
        View products you've recently looked at and discover related items
      </div>
      <BrowsingHistoryList />
    </div>
  )
}
