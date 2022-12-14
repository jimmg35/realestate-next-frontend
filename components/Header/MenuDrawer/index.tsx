import React from 'react'
import style from './index.module.scss'
import classNames from 'classnames'
import Router from 'next/router'
import { useAuth } from '../../../layout/BaseLayout'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../../../store/slice/user'

export interface IMenuDrawer {
  open: boolean
  onClose: () => void
}

const renderContent = (index: number, link: {
  name: string
  route: string
  protected: boolean
}, onClose: () => void) => {
  return (
    <p
      key={index}
      className={style.content}
      onClick={() => {
        Router.push(link.route)
        onClose()
      }}
    >{link.name}
    </p>
  )
}

const MenuDrawer = (props: IMenuDrawer) => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth()

  const handleLogout = () => {
    dispatch(
      setUserToken('')
    )
    Router.push('/')
  }

  return (
    <>
      <div className={classNames({
        [style.menuDrawer]: true,
        [style.show]: props.open
      })}>
        <div className={style.header}>
          <p onClick={() => { props.onClose() }}>✕</p>
        </div>

        <div className={style.content}>

          <div className={style.tree}>
            <p className={style.title} onClick={() => { Router.push('/whoami') }}>個人介紹</p>
          </div>

          <div className={style.tree}>
            <p className={style.title} onClick={() => { Router.push('/firm') }}>公司介紹</p>
          </div>

          <div className={style.tree}>
            <p className={style.title} onClick={() => { Router.push('/article') }}>房產新知</p>
          </div>

          <div className={style.tree}>
            <p className={style.title} onClick={() => { Router.push('/cases') }}>案件介紹</p>
          </div>

        </div>
        {
          isAuthenticated
            ? <div className={style.loginBtn}
              onClick={handleLogout}
            >
              登出
            </div>
            : <div className={style.loginBtn}
              onClick={() => {
                Router.push('/login')
              }}
            >
              登入
            </div>
        }
      </div>
      <div className={classNames({
        [style.backgroundGray]: true,
        [style.hide]: !props.open
      })}
        onClick={() => { props.onClose() }}
      ></div>
    </>

  )
}

export default MenuDrawer