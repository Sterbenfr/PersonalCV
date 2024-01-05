import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'

const name = 'Pierre Caudreliez'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.fullpage}>
      <div className={styles.container}>
        <NavBar />
        <header className={styles.header}>
          <Link href='/'>
            <Image
              priority
              src='/images/PP.jpg'
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt='My profile picture'
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href='/' className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </header>
        <main>{children}</main>
        <div className={styles.containerFoot}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
