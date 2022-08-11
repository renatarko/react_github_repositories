import "./style.css"

export const Header = ({title = "Github Repository"}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}