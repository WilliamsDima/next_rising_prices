import React, { FC } from "react"
import Meta from "../../atoms/Meta"
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode | React.ReactFragment | React.ReactPortal | boolean | null | undefined
}

const Page: FC<Page> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Page