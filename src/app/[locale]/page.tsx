import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import PageLayout from '../../components/PageLayout'

const nameSpace = 'HomePage'

export type paramsProps = {
  params: { locale: string }
}

export const dynamic = 'force-static'

export default function Home({ params }: paramsProps) {
  const t = useTranslations(nameSpace)
  unstable_setRequestLocale(params.locale)

  return (
    <PageLayout>
      <section className={utilStyles.headingMd}>
        <p>{t('presentation')}</p>
        <p>{t('goal')}</p>
        <p>
          {t('interest')}
          <Link
            target='_blank'
            href='https://www.instagram.com/sperkise.wasquehal'
          >
            @sperkise
          </Link>{' '}
          {t('interest2')}
        </p>
        <p>{t('softSkills')}</p>
      </section>
    </PageLayout>
  )
}
