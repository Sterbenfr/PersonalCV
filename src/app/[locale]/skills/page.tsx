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
          <li className={utilStyles.listItem}>{t('languages.title')}</li>
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
        </ul>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            {t('programmingLanguages.title')}
          </li>
          <li>
            {t('programmingLanguages.nextjs')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.nodejs')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.js')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.ts')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.python')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.web')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.sql')}{' '}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.api')}{' '}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.c')}{' '}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.iot')}{' '}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.java')}{' '}
            <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
          </li>
          <li>
            {t('programmingLanguages.php')}{' '}
            <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
          </li>
        </ul>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>{t('courses.title')}</li>
          <li>
            {t('courses.CCNA1')}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('courses.Git')}{' '}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('courses.adminLinux')}
            <span className={utilStyles.rating}>{t('ratings.5Star')}</span>{' '}
          </li>
          <li>
            {t('courses.CCNA2')}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('courses.adminWindows')}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('courses.SEO')}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('courses.Management')}
            <span className={utilStyles.rating}>{t('ratings.4Star')}</span>{' '}
          </li>
          <li>
            {t('courses.data')}
            <span className={utilStyles.rating}>{t('ratings.3Star')}</span>{' '}
          </li>
        </ul>
      </section>
    </PageLayout>
  )
}
