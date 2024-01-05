import utilStyles from '../../../styles/utils.module.css'
import PageLayout from '../../../components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { paramsProps } from '../page'

const nameSpace = 'ExperiencePage.experience'

export default function Home({ params }: paramsProps) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations(nameSpace)

  return (
    <PageLayout>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.cardContainer}>
          <p className={utilStyles.card}>{t('2.subject')}</p>
          <p className={utilStyles.more}>{t('2.office')}</p>
          <p className={utilStyles.more2}>{t('2.dateOrLocation')}</p>
          <p className={utilStyles.description}>{t('2.description')}</p>
        </div>
      </section>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.cardContainer}>
          <p className={utilStyles.card}>{t('1.subject')}</p>
          <p className={utilStyles.more}>{t('1.office')}</p>
          <p className={utilStyles.more2}>{t('1.dateOrLocation')}</p>
          <p className={utilStyles.description}>{t('1.description')}</p>
        </div>
      </section>
    </PageLayout>
  )
}
