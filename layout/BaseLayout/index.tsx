import React, { useState, useEffect, createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUserProfile } from '../../store/slice/user'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import 'animate.css'
import api from '../../api'
import Router from 'next/router'
import SideBar from '../../components/AdminPage/SideBar'

export const AuthContext = createContext<{ isAuthenticated: boolean }>({ isAuthenticated: false })
export const useAuth = () => {
  return useContext(AuthContext)
}

export const SideBarContext = createContext<{
  toggled: boolean
  collapsed: boolean
  onToggle: (value: boolean) => void
  onCollapse: () => void
}>({
  toggled: false,
  collapsed: false,
  onToggle: (value) => { },
  onCollapse: () => { }
})

export interface ILayoutProps {
  children: React.ReactNode
}

export const WithNavFooter = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUser)
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)
    useEffect(() => {
      const validateToken = async () => {
        if (userInfo.token === '') {
          setisAuthenticated(false)
          return
        }
        const { statusCode, responseContent } = await api.prod.validateToken(userInfo.token)
        if (statusCode === 200) {
          dispatch(
            setUserProfile(responseContent)
          )
          setisAuthenticated(true)
        } else {
          setisAuthenticated(false)
        }
      }
      validateToken()
    }, [userInfo.token])

    return (
      <>
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
          <Header />
          <div className="content-container">
            <Component {...props} />
          </div>
          <Footer />
        </AuthContext.Provider>
      </>
    )
  }
  return wrappedComponent
}

export const WithNavFooterProtected = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUser)
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)
    useEffect(() => {
      const validateToken = async () => {
        if (userInfo.token === '') {
          setisAuthenticated(false)
          Router.push('/unauthorized')
          return
        }
        const { statusCode, responseContent } = await api.prod.validateToken(userInfo.token)
        if (statusCode === 200) {
          dispatch(
            setUserProfile(responseContent)
          )
          setisAuthenticated(true)
        } else {
          setisAuthenticated(false)
          Router.push('/unauthorized')
        }
      }
      validateToken()
    }, [userInfo.token])

    return (
      <>
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
          <Header />
          <div className="content-container">
            <Component {...props} />
          </div>
          <Footer />
        </AuthContext.Provider>
      </>
    )
  }
  return wrappedComponent
}

export const WithNavProtected = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUser)
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)
    useEffect(() => {
      const validateToken = async () => {
        if (userInfo.token === '') {
          setisAuthenticated(false)
          Router.push('/unauthorized')
          return
        }
        const { statusCode, responseContent } = await api.prod.validateToken(userInfo.token)
        if (statusCode === 200) {
          dispatch(
            setUserProfile(responseContent)
          )
          setisAuthenticated(true)
        } else {
          setisAuthenticated(false)
          Router.push('/unauthorized')
        }
      }
      validateToken()
    }, [userInfo.token])

    return (
      <>
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
          <Header />
          <div className="content-container">
            <Component {...props} />
          </div>
        </AuthContext.Provider>
      </>
    )
  }
  return wrappedComponent
}

export const WithNothingLayout = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    return <Component {...props} />
  }
  return wrappedComponent
}

export const WithNothingProtected = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUser)
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)
    useEffect(() => {
      const validateToken = async () => {
        if (userInfo.token === '') {
          setisAuthenticated(false)
          Router.push('/unauthorized')
          return
        }
        const { statusCode, responseContent } = await api.prod.validateToken(userInfo.token)
        if (statusCode === 200) {
          dispatch(
            setUserProfile(responseContent)
          )
          setisAuthenticated(true)
        } else {
          setisAuthenticated(false)
          Router.push('/unauthorized')
        }
      }
      validateToken()
    }, [userInfo.token])
    return (
      <>
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
          <div className="content-container">
            <Component {...props} />
          </div>
        </AuthContext.Provider>
      </>
    )
  }
  return wrappedComponent
}

export const WithSideBarProtected = function <P extends { [k: string]: any }> (Component: React.ComponentType<P>) {
  const wrappedComponent = (props: P) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(selectUser)
    const [isAuthenticated, setisAuthenticated] = useState<boolean>(false)
    const [toggled, settoggled] = useState<boolean>(true)
    const [collapsed, setcollapsed] = useState<boolean>(false)
    useEffect(() => {
      const validateToken = async () => {
        if (userInfo.token === '') {
          setisAuthenticated(false)
          Router.push('/unauthorized')
          return
        }
        const { statusCode, responseContent } = await api.prod.validateToken(userInfo.token)
        if (statusCode === 200) {
          dispatch(
            setUserProfile(responseContent)
          )
          setisAuthenticated(true)
        } else {
          setisAuthenticated(false)
          Router.push('/unauthorized')
        }
      }
      validateToken()
    }, [userInfo.token])
    return (
      <>
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
          <SideBarContext.Provider value={{
            toggled: toggled,
            collapsed: collapsed,
            onToggle: (value) => { settoggled(value) },
            onCollapse: () => { setcollapsed(value => !value) }
          }}>
            <div className="admin-page">
              <SideBar />

              {/* <TopBar /> */}
              <Component {...props} />
            </div>
          </SideBarContext.Provider>
        </AuthContext.Provider>
      </>
    )
  }
  return wrappedComponent
}
