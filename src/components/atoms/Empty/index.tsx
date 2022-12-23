import React, { FC } from "react"
import {Typography} from '@mui/material'
import styles from './style.module.scss'
import Image from 'next/image'

type IEmpty = {
  
}

const Empty: FC<IEmpty> = () => {


  return (
    <div className={styles.empty}>
        <Typography role="title" variant="h4" fontWeight={500} component="p" sx={{color: 'text.primary', textAlign: 'center'}}>
          начните поиск
        </Typography>
        <Image
          src={require('../../../assets/images/empty.png')}
          alt="empty"
        />
    </div>
  )
}

export default Empty
