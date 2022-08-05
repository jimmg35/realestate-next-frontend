import style from './index.module.scss'
import RWDBurger from '../../components/AdminPage/RWDBurger'

const CasesContainer = () => {
  return (
    <div className={style.CasesContainer}>

      <RWDBurger />

      <div className={style.Title}>
        <span>案件列表</span>
      </div>
    </div >
  )
}

export default CasesContainer
