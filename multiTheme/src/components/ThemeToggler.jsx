import { useState } from "react";
const ThemeToggler = () => {
    const [theme,setTheme]=useState("light");
    const handleToggleTheme=()=>{
        const themeValue=theme==='light'?'dark':'light';
        setTheme(themeValue);
        document.documentElement.setAttribute('data-theme',themeValue);

    }
  return (
    
      <img src={`/images/for-${theme}.png`} alt="toggle-theme" className="theme-icons" 
      onClick={handleToggleTheme}
      />
   
  )
}

export default ThemeToggler
