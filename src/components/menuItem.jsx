import { useState } from "react"
import SubMenu from "./subMenu"

const MenuItem = ({id, title, url, pages, entities}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onItemClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li key={id} >
      <a href={url}>{title}</a>
      {pages !== undefined && <button onClick={onItemClick}>{isOpen ? "↑" : "↓"}</button>}
      {pages !== undefined && isOpen && <SubMenu ids={pages} entities={entities} /> }
    </li>
  )
}

export default MenuItem