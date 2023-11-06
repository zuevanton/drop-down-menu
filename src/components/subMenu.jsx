// import data from "../data.json"
import MenuItem from "./menuItem"

const SubMenu = ({ids, entities}) => {

  return (
    <ul>
      {
        ids.map(id => {
          
          const {title, url, pages} = entities.pages[id]
          return <MenuItem 
            key={id}
            url={url}
            title={title}
            pages={pages}
            entities={entities} />
        })
      }
    </ul>
  )
}

export default SubMenu