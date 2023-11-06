// import data from "../data.json"
import { useEffect, useState } from "react"
import SubMenu from "./subMenu"

// const topLevelIds = data.topLevelIds

const Menu = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const response = fetch('http://localhost:5173/data.json')
    response.then(res => res.json())
      .then(res => setData(res))
  }, [])

  
  return (
    <>
      {data === null ? 'загрузка' : <SubMenu ids={data.topLevelIds} entities={data.entities} />}
    </>
  )
}

export default Menu;