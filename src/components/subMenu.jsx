import data from "../data.json"
import MenuItem from "./menuItem"

const SubMenu = ({ids}) => {

  return (
    <ul>
      {
        ids.map(id => {
          console.log(data.entities.pages[id])
          const {title, url, pages} = data.entities.pages[id]
          return <MenuItem 
            key={id}
            url={url}
            title={title}
            pages={pages} />
        })
      }
    </ul>
  )
}

export default SubMenu