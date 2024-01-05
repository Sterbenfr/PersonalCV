'use client'

import styles from '../styles/Layout.module.css'
import { ChangeEvent, ReactNode, useTransition } from 'react'
import { useRouter, usePathname } from '../navigation'
import React from 'react'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <label className={styles.language + (isPending ? styles.isPending : '')}>
      <label>{label}</label>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span>⌄</span>
    </label>
  )
}

export default React.memo(LocaleSwitcherSelect)
