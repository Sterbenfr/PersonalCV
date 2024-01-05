import styles from '../styles/Layout.module.css'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const phone = '+33622920240'
const mail = 'pierrecaudreliez@gmail.com'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <div className={styles.footer}>
      <ul>
        {t('contact.title')}
        <li>
          <a target='_blank' href={`tel:${phone}`}>
            {phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/pierre-caudreliez'
          >
            LinkedIn: Pierre Caudreliez
          </a>
        </li>
        <li>
          <Link target='_blank' href='/CV-Caudreliez-Pierre.pdf'>
            {t('contact.cv')}
          </Link>
        </li>
      </ul>
      <Image
        src='/images/click.png'
        width={50}
        height={50}
        alt='You can click'
      />
    </div>
  )
}

export default Footer
