import { createContext, useState } from "react"

export const ResultContext = createContext();
const ResultProvider = ({ children }) => {

  const [result, setResult] = useState('');

  return (
    <ResultContext.Provider value={{result, setResult}}>
      {children}
    </ResultContext.Provider>
  )
}

export default ResultProvider;
