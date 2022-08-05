import style from './index.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { onToggle, onCollapse } from '../../../store/slice/sideBar'

const RWDBurger = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.RWDBurger}>
      <IconButton sx={{ color: 'white' }}
        onClick={() => {
          dispatch(onCollapse(false))
          dispatch(onToggle(true))
        }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  )
}

export default RWDBurger
