import { useTranslations } from 'next-intl'
import PageLayout from '../../components/PageLayout'
import ReloadButton from '../../components/ReloadButton'

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <PageLayout>
      <p>{t('description')}</p>
      <ReloadButton content={t('reload')} />
    </PageLayout>
  )
}
