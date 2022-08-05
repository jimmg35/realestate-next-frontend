import style from './index.module.scss'
import RWDBurger from '../../components/AdminPage/RWDBurger'

const ArticlesContainer = () => {
  return (
    <div className={style.ArticlesContainer}>

      <RWDBurger />

      <div className={style.Title}>
        <span>文章列表</span>
      </div>
    </div >
  )
}

export default ArticlesContainer
