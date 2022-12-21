import React, {FC} from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import { TransitionGroup } from 'react-transition-group'
import ItemHelper from 'atoms/ItemHelper'
import styles from './style.module.scss'
import { IProduct } from 'src/stores/redusers/main/types'
import { useActions, useOutside } from 'hooks'
import { clearDublicat } from 'helpers'

type Helper = {
  text: string
  list: IProduct[]
  setText: (value: string) => void
}

const SearchHelper: FC<Helper> = ({text, list, setText}) => {

  const {setSearchProduct} = useActions()
  
  const searchData = text.trim().length && clearDublicat(list).filter((item) => {
    if (item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
      return item
    }
  })

  const clearHandler = () => {
    setText('')
  }

  const handleToggle = (product: IProduct) => {
    clearHandler()
    setSearchProduct(product)
  }


  const {ref} = useOutside(clearHandler)

  
  return (
    <div ref={ref} className={styles.container}>
      <Box>
        <List>
          <TransitionGroup>
            {!!searchData && searchData.map((item, i) => (
              <Collapse key={i}>
                <ItemHelper item={item} handleToggle={handleToggle} />
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  )
}

export default SearchHelper