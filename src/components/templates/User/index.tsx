import React, { FC } from "react"
import styles from './style.module.scss'

type Page = {
  data: {
    id: number,
    name: string
  }
}

const UserTemplate: FC<Page> = ({data}) => {


  return (
    <div className={styles.container}>
      <div>
        Пользователь: id - {data.id} имя- {data.name}
      </div>
    </div>
  )
}

export default UserTemplate