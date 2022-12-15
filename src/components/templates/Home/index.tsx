import React, { FC } from "react"
import styles from './style.module.scss'

type Page = {
  
}

const HomeTemplate: FC<Page> = ({}) => {
  return (
    <div className={styles.container}>
      <div>
        Главная
      </div>
    </div>
  )
}

export default HomeTemplate