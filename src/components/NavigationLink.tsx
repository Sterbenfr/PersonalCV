'use client'

import { usePathname } from '../navigation'
import { ComponentProps } from 'react'
import type { AppPathnames } from '../config'
import { Link } from '../navigation'
import styles from '../styles/Layout.module.css'

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const path = usePathname()
  const isActive = path === href
  return (
    <Link className={isActive ? styles.active : ''} href={href} {...rest} />
  )
}
