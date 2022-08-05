import React from 'react'
import style from './index.module.scss'
import Admin from './Admin'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/slice/user'

export interface IUserGreet {
  username: string
  isAuthenticated: boolean
  onLogout: () => void
  onLogin: () => void
}

const UserGreet = (props: IUserGreet) => {
  const userInfo = useSelector(selectUser)

  return (
    <>
      <div className={style.userGreet}>
        {
          props.isAuthenticated && <div className={style.btnContainer}>
            {
              userInfo.userProfile?.roles[0].roleName === 'admin' && <Admin />
            }
          </div>
        }

        <div className={style.userContainer}>
          {
            props.isAuthenticated
              ? <>
                <p>您好! {props.username}</p>
                <div className={style.logoutBtn}
                  onClick={props.onLogout}
                >
                  登出
                </div>
              </>
              : <div className={style.loginBtn}
                onClick={props.onLogin}
              >
                登入
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default UserGreet