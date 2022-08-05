import {
  ProSidebar, SidebarHeader,
  SidebarFooter, SidebarContent,
  Menu, MenuItem, SubMenu
} from 'react-pro-sidebar'
import { useState, useContext } from 'react'
import style from './index.module.scss'
import { SideBarContext } from '../../../layout/BaseLayout'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArticleIcon from '@mui/icons-material/Article'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'

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
            <span>後台管理系統</span>
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
  const { toggled, collapsed, onToggle, onCollapse } = useContext(SideBarContext)

  return (
    <ProSidebar
      toggled={toggled}
      collapsed={collapsed}
      onToggle={(value) => {
        onToggle(value)
      }}
      breakPoint='md'
    >

      <SideBarHeader collapsed={collapsed} onCollapse={onCollapse} />

      <SidebarContent>
        <Menu iconShape="square">

          <div className={style.MenuItem}>
            <MapsHomeWorkIcon />
            <span>案件列表</span>
          </div>

          <div className={style.MenuItem}>
            <ArticleIcon />
            <span>文章列表</span>
          </div>

          {/* <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu> */}
        </Menu>
      </SidebarContent>

      <SideBarFooter />

    </ProSidebar>
  )
}

export default SideBar
