import DiagrammLine from "../../organisms/DiagrammLine"
import React, { FC } from "react"
import styles from './style.module.scss'
import Form from "molecules/Form"
import Box from '@mui/material/Box'

type Page = {
  
}

const HomeTemplate: FC<Page> = ({}) => {
  return (
    <Box className={styles.container}>
        <Form />

        <DiagrammLine />
    </Box>
  )
}

export default HomeTemplate