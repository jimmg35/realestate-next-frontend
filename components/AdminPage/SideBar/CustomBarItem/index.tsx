import style from './index.module.scss'
import classNames from 'classnames'

interface ICustomBarItem {
  title: string
  icon: React.ReactNode
  focused: boolean
  onClick: () => void
}

const CustomBarItem = ({
  title, icon, focused, onClick
}: ICustomBarItem) => {
  return (
    <div className={classNames({
      [style.MenuItem]: true,
      [style.focused]: focused
    })} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </div>
  )
}

export default CustomBarItem
