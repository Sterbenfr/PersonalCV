import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'fr'] as const

export const pathnames = {
  '/': {
    en: '/Home',
    fr: '/Acceuil',
  },
  '/skills': {
    en: '/Skills',
    fr: '/Competences',
  },
  '/projects': {
    en: '/Projects',
    fr: '/Projets',
  },
  '/degree': {
    en: '/Education',
    fr: '/Formations',
  },
  '/experience': {
    en: '/Experiences',
    fr: '/Experience',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
