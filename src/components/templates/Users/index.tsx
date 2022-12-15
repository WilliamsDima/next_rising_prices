import React, { FC } from "react"
import UserList from "../../organisms/UserList"
import styles from './style.module.scss'


const UsersTemplate: FC = () => {


  return (
    <div className={styles.container}>
      <div>
        Пользователи:
      </div>

      <UserList />
    </div>
  )
}

export default UsersTemplate