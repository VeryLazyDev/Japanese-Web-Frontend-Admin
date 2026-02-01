import { createContext, useState } from "react";


const LevelContext = createContext();
const LevelProvider = ({children}) => {

    const [currentLevel, setCurrentLevel] = useState("")

    return (
        <LevelContext.Provider value={{ currentLevel, setCurrentLevel }}>
          {children}
        </LevelContext.Provider>
      );
    
}

export {LevelContext, LevelProvider}