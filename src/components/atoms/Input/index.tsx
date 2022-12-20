import React, {FC, memo} from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './style.module.scss'
import { useTheme, Zoom } from '@mui/material'

type InputSearch = {
  text: string
  setText: (value: string) => void
  showClear?: boolean
}

const InputSearch: FC<InputSearch> = memo(({text, setText, showClear = false}) => {

  const theme = useTheme()

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const clearHandler = () => {
    setText('')
  }

  return (
    <Paper
      component="div"
      className={styles.wrapper}
      sx={{backgroundColor: 'transparent'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#fff', sha: '#fff' }}
        placeholder="Поиск товаров"
        type='search'
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />

      <Zoom
          in={showClear}
          timeout={transitionDuration}
          unmountOnExit
        >
        <IconButton onClick={clearHandler} type="button" sx={{ p: '10px'}} aria-label="search">
          <ClearIcon sx={{fontSize: 20, color: '#fff'}}/>
        </IconButton>
      </Zoom>

    </Paper>
  )
})

export default InputSearch