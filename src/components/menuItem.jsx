import { useState } from "react"
import SubMenu from "./subMenu"

const MenuItem = ({id, title, url, pages}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onItemClick = e => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <li key={id} onClick={onItemClick}>
      <a href={url}>{title}</a>
    {pages !== undefined && isOpen && <SubMenu ids={pages} /> }
    </li>
  )
}

export default MenuItem