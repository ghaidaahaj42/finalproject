

const Header = ({title, children}) => {
  return (
    <header className="header">
      <div className="headertocontainer">
        <div className="headertocontainer-bg">
        <h2>{title}</h2>
        <p>{children}</p>
         
        </div>
        
      </div>
    </header>
  )
}

export default Header
