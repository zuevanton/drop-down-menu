import data from "../data.json"
import { useState } from "react"
import SubMenu from "./subMenu"

const topLevelIds = data.topLevelIds

const Menu = () => {
  return (
    <SubMenu ids={topLevelIds} />
  )
}

export default Menu;