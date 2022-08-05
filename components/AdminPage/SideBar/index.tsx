import {
  ProSidebar, SidebarHeader,
  SidebarFooter, SidebarContent,
  Menu
} from 'react-pro-sidebar'
import style from './index.module.scss'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArticleIcon from '@mui/icons-material/Article'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import CustomBarItem from './CustomBarItem'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { selectSideBarConfig } from '../../../store/slice/sideBar'
import { onToggle, onCollapse, onPageChange } from '../../../store/slice/sideBar'

const SideBarHeader = ({
  collapsed,
  onCollapse
}: {
  collapsed: boolean
  onCollapse: () => void
}) => {
  return (
    <SidebarHeader>
      {
        collapsed
          ?
          <div className={style.Burger}>
            <IconButton sx={{ color: '#adadad' }}
              onClick={() => { onCollapse() }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          : <div className={style.Header}>
            <span
              onClick={() => {
                Router.push('/admin')
              }}
            >後台管理系統</span>
            <IconButton sx={{ color: '#adadad' }}
              onClick={() => { onCollapse() }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>
      }
    </SidebarHeader>
  )
}

const SideBarFooter = () => {
  return (
    <SidebarFooter>
      <div className={style.Logout}>
        <span className={style.LogoutButton}>登出</span>
      </div>
    </SidebarFooter>
  )
}

const SideBar = () => {
  const dispatch = useDispatch()
  const { toggled, collapsed, page } = useSelector(selectSideBarConfig)
  return (
    <ProSidebar
      toggled={toggled}
      collapsed={collapsed}
      onToggle={(value) => {
        dispatch(onToggle(value))
      }}
      breakPoint='md'
    >

      <SideBarHeader collapsed={collapsed} onCollapse={() => {
        dispatch(onCollapse(!collapsed))
      }} />

      <SidebarContent>
        <Menu iconShape="square">

          <CustomBarItem
            title='案件列表'
            icon={<MapsHomeWorkIcon />}
            focused={page === 'cases'}
            onClick={() => {
              dispatch(onPageChange('cases'))
              Router.push('/admin/cases')
            }}
          />
          <CustomBarItem
            title='文章列表'
            icon={<ArticleIcon />}
            focused={page === 'articles'}
            onClick={() => {
              dispatch(onPageChange('articles'))
              Router.push('/admin/articles')
            }}
          />

        </Menu>
      </SidebarContent>

      <SideBarFooter />

    </ProSidebar>
  )
}

export default SideBar
