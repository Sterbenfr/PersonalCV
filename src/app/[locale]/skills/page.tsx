import utilStyles from '../../../styles/utils.module.css'
import PageLayout from '../../../components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { paramsProps } from '../page'

const nameSpace = 'SkillsPage.skills'

export default function Home({ params }: paramsProps) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations(nameSpace)

  return (
    <PageLayout>
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          <span className={utilStyles.listItem}>{t('languages.title')}</span>
          <p>
            <li>
              {t('languages.1stLanguage')}{' '}
              <span className={utilStyles.rating}>
                {t('languages.1stLanguageRating')}
              </span>
            </li>
            <li>
              {t('languages.2ndLanguage')}{' '}
              <span className={utilStyles.rating}>
                {t('languages.2ndLanguageRating')}
              </span>
            </li>
          </p>
          <span className={utilStyles.listItem}>
            {t('programmingLanguages.title')}
          </span>
          <p>
            <li>
              {t('programmingLanguages.1')}{' '}
              <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.2')}{' '}
              <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.3')}{' '}
              <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.4')}{' '}
              <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.5')}{' '}
              <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.6')}{' '}
              <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.7')}{' '}
              <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.8')}{' '}
              <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
            </li>
            <li>
              {t('programmingLanguages.9')}{' '}
              <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
            </li>
          </p>
          <span className={utilStyles.listItem}>{t('courses.title')}</span>
          <p>
            <li>
              {t('courses.CCNA1')}
              <span className={utilStyles.rating}>
                {t('ratings.5Star')}
              </span>{' '}
            </li>
            <li>
              {t('courses.Git')}{' '}
              <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
            </li>
            <li>
              {t('courses.adminLinux')}
              <span className={utilStyles.rating}>
                {t('ratings.5Star')}
              </span>{' '}
            </li>
            <li>
              {t('courses.CCNA2')}
              <span className={utilStyles.rating}>
                {t('ratings.4Star')}
              </span>{' '}
            </li>
            <li>
              {t('courses.adminWindows')}
              <span className={utilStyles.rating}>
                {t('ratings.4Star')}
              </span>{' '}
            </li>
            <li>
              {t('courses.SEO')}
              <span className={utilStyles.rating}>
                {t('ratings.4Star')}
              </span>{' '}
            </li>
            <li>
              {t('courses.Management')}
              <span className={utilStyles.rating}>
                {t('ratings.3Star')}
              </span>{' '}
            </li>
          </p>
        </ul>
      </section>
    </PageLayout>
  )
}
