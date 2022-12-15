import Link from "next/link"
import { FC } from "react"
import { useAppSelector } from "../../../hooks/hooks"
import styles from './style.module.scss'

const UserList: FC = () => {

  const { users } = useAppSelector(store => store.main)

  return (
    <ul className={styles.list}>
        {users?.map((item: any) => {
          return <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              {item.name}
            </Link>
            
            </li>
        })}
    </ul>
  )
}

export default UserList
