import React, {FC} from 'react'
import ListItem from '@mui/material/ListItem'
import styles from './style.module.scss'
import { IProduct } from 'src/stores/redusers/main/types'

type Item = {
  item: IProduct
  handleToggle: (product: IProduct) => void
}


const ItemHelper: FC<Item> = ({item, handleToggle}) => {

  return (
    <ListItem className={styles.text} onClick={() => handleToggle(item)}>
      <p>{item.name}</p>
    </ListItem>
  )
}

export default ItemHelper