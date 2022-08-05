import style from './index.module.scss'
import ArticleIcon from '@mui/icons-material/Article'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import { onToggle, onCollapse } from '../../store/slice/sideBar'
import RWDBurger from '../../components/AdminPage/RWDBurger'

const AdminHome = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.AdminHome}>

      <RWDBurger />

      <div className={style.Title}>
        <span>早安! 今天想做些什麼呢?</span>
      </div>

      <div className={style.CardGroup}>
        <div className={style.ActionCard}>
          <MapsHomeWorkIcon sx={{ width: '100px', height: '100px' }} />
          <span>新增案件</span>
        </div>
        <div className={style.ActionCard}>
          <ArticleIcon sx={{ width: '100px', height: '100px' }} />
          <span>新增文章</span>
        </div>
      </div>

    </div >
  )
}

export default AdminHome
