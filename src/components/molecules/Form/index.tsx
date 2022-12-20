import InputSearch from "atoms/Input"
import { useAppSelector } from "../../../hooks/hooks"
import SearchHelper from "molecules/SearchHelper"
import React, { FC, useState, memo } from "react"
import styles from './style.module.scss'

type Form = {
  
}

const Form: FC<Form> = memo(({}) => {

  const { products } = useAppSelector(store => store.main)

  const [text, setText] = useState('')

  return (
    <div className={styles.form}>
        <InputSearch text={text} setText={setText} showClear={!!text}/>

        {!!products && <SearchHelper text={text} list={products} setText={setText}/>}

    </div>
  )
})

export default Form