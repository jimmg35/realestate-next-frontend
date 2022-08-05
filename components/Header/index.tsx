import React, { useState, useEffect } from 'react'
import style from './index.module.scss'
import Image from 'next/image'
import NavButton from '../../components/NavButton'
import MenuDrawer from './MenuDrawer'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUserToken } from '../../store/slice/user'
import { useAuth } from '../../layout/BaseLayout'
import UserGreet from '../../components/UserGreet'

const Header = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(selectUser)
  const { isAuthenticated } = useAuth()
  const [menuDrawerOpen, setmenuDrawerOpen] = useState<boolean>(false)

  const handleLogout = () => {
    dispatch(
      setUserToken('')
    )
    Router.push('/')
  }

  return (
    <div className={style.headerContainer}>
      <header className={style.header}>
        <div className={style.contentGroup}>
          <div className={style.iconContainer}>
            <Image src={'/logo.png'} width="40px" height="40px"
              onClick={() => { Router.push('/') }}
            ></Image>
          </div>
        </div>

        <div className={style.buttonGroup}>
          <NavButton
            onMouseOver={() => { }}
            onMouseLeave={() => { }}
            onClick={() => { Router.push('/whoami') }}
          >個人介紹</NavButton>

          <NavButton
            onMouseOver={() => { }}
            onMouseLeave={() => { }}
            onClick={() => { Router.push('/firm') }}
          >公司介紹</NavButton>

          <NavButton
            onMouseOver={() => { }}
            onMouseLeave={() => { }}
            onClick={() => { Router.push('/article') }}
          >房產新知</NavButton>

          <NavButton
            onMouseOver={() => { }}
            onMouseLeave={() => { }}
            onClick={() => { Router.push('/cases') }}
          >案件介紹</NavButton>
        </div>

        <div className={style.contact}>
          <UserGreet
            username={userInfo.userProfile?.username!}
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
            onLogin={() => { Router.push('/login') }}
          />
        </div>

        <div className={style.burger}>
          <NavButton onClick={() => { setmenuDrawerOpen(true) }}>≡</NavButton>
        </div>
        <MenuDrawer
          open={menuDrawerOpen}
          onClose={() => { setmenuDrawerOpen(false) }}
        ></MenuDrawer>
      </header>

    </div>
  )
}

export default Header