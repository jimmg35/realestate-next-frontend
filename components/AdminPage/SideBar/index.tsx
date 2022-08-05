import {
  ProSidebar, SidebarHeader,
  SidebarFooter, SidebarContent,
  Menu, MenuItem, SubMenu
} from 'react-pro-sidebar'
import { useState, useContext } from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import style from './index.module.scss'
import { SideBarContext } from '../../../layout/BaseLayout'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

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
      <SideBarHeader
        collapsed={collapsed}
        onCollapse={onCollapse}
      />

      <SidebarContent>

        <Menu iconShape="square">
          <MenuItem onClick={() => { onCollapse() }}>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>

      </SidebarContent>

      <SidebarFooter>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideBar
