import react from "react";
function Header({isDarkMode,onDarkModeClick}){
  return(
      <Header>
          <h2>Shopster</h2>
          <button onClick={onDarkModeClick}>
              {isDarkMode? "Dark":"Light"}Mode</button>
      </Header>
  )
}
export default Header;