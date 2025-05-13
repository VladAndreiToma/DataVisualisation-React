//creating a theme context
// author: Vlad the Engineer
import React from "react";
import { useState , useContext , createContext } from "react";

const ThemeContext = createContext();
 
export const ThemeProvider=({children})=>{
    // defining param theme and set method
    const [theme,setTheme] = useState('light');
    // function to trigger setTheme
    const toggleTheme=()=>{
        setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'));
    }
    const value={theme,toggleTheme};
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext);