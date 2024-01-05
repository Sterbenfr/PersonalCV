import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'
import NavigationLink from './NavigationLink'
import styles from '../styles/Layout.module.css'

export default function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <div className={styles.navbar}>
      <nav className=''>
        <NavigationLink href='/'>{t('home')}</NavigationLink>
        <NavigationLink href='/skills'>{t('skills')}</NavigationLink>
        <NavigationLink href='/experience'>{t('experience')}</NavigationLink>
        <NavigationLink href='/degree'>{t('education')}</NavigationLink>
        <NavigationLink href='/projects'>{t('projects')}</NavigationLink>
        <LocaleSwitcher />
      </nav>
    </div>
  )
}
