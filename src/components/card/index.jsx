import "./style.css";

export const Card = ({name, url}) => {
  return (
    <>
    <li><a target="_blanck "href={url}>{name}</a></li>
    </>
    
  )
}