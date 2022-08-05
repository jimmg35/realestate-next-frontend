import React from 'react'
import style from './index.module.scss'
import Router from 'next/router'
import { useAuth } from '../../layout/BaseLayout'

const renderContent = (index: number, link: {
  name: string
  route: string
  protected: boolean
}) => {
  return (
    <p key={index}
      className={style.content}
      onClick={() => { Router.push(link.route) }}
    >{link.name}</p>
  )
}

const Footer = () => {
  const { isAuthenticated } = useAuth()
  return (
    <footer className={style.footer}>
      <div className={style.footerMap}>

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
      <div className={style.copyRightContainer}>
        <p>Copyright © 2022 房產公司 版權所有</p>
      </div>
    </footer>
  )
}

export default Footer