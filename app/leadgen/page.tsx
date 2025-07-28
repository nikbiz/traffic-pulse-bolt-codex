import dynamic from 'next/dynamic'

const DigitalMarketingWebsite = dynamic(() => import('@/components/leadgen/digital-marketing-website'))

export default function LeadgenPage() {
  return <DigitalMarketingWebsite />
}
