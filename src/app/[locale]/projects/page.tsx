import utilStyles from '../../../styles/utils.module.css'
import PageLayout from '../../../components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { paramsProps } from '../page'

const nameSpace = 'ProjectsPage'

export default function Home({ params }: paramsProps) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations(nameSpace)
  return (
    <PageLayout>
      <section className={utilStyles.headingLg}>
        <span>{t('more')}</span>
        <div className={utilStyles.links}>
          <a target='_blank' href='https://github.com/Sterbenfr'>
            Sterbenfr
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
