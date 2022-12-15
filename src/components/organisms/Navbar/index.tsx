import Link from "next/link"
import styles from './style.module.scss'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href='/'>Главная</Link>
      <Link href="/users">Пользователи</Link>
    </div>
  )
}

export default Navbar