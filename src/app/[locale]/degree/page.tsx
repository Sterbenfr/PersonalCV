import utilStyles from '../../../styles/utils.module.css'
import PageLayout from '../../../components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { paramsProps } from '../page'

const nameSpace = 'EducationPage.education'

export default function Home({ params }: paramsProps) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations(nameSpace)

  return (
    <PageLayout>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.cardContainer}>
          <p className={utilStyles.card}>{t('3.subject')}</p>
          <p className={utilStyles.more}>{t('3.date')}</p>
          <p className={utilStyles.more2}>{t('3.location')}</p>
          <p className={utilStyles.description}>{t('3.description')}</p>
        </div>

        <div className={utilStyles.cardContainer}>
          <p className={utilStyles.card}>{t('2.subject')}</p>
          <p className={utilStyles.more}>{t('2.date')}</p>
          <p className={utilStyles.more2}>{t('2.location')}</p>
          <p className={utilStyles.description}>{t('2.description')}</p>
        </div>

        <div className={utilStyles.cardContainer}>
          <p className={utilStyles.card}>{t('1.subject')}</p>
          <p className={utilStyles.more}>{t('1.date')}</p>
          <p className={utilStyles.more2}>{t('1.location')}</p>
          <p className={utilStyles.description}>{t('1.description')}</p>
        </div>
      </section>
    </PageLayout>
  )
}
