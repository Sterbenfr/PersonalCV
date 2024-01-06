import { Inter } from 'next/font/google'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { locales } from '../../config'
import styles from '../../styles/Layout.module.css'
import { getTranslations } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export type Props = {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams(): Promise<Props[]> {
  return locales.map(locale => ({ children: null, params: { locale } }))
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html className={styles.html} lang={locale}>
      <head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
