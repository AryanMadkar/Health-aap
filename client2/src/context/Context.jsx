import { createContext, useContext, useState, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null)
  const [authen, setAuthen] = useState(false)

 

  return (
    <ThemeContext.Provider value={{setUserdata,setAuthen,userdata,authen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Example usage in a component
