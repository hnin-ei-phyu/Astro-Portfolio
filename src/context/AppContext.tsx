import { createContext, useState } from 'react'
import { type ReactNode } from 'react'
import type { Dispatch, SetStateAction } from 'react'; // Import necessary types

interface AppContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>; // The correct type for useState setter
}

const defaultContextValue: AppContextType = {
  count: 0,
  setCount: () => {}, // A dummy function
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const AppContextProvider = ({ children }: {children: ReactNode}) => {

  // 3. **The State:** This is the data being managed
  const [count, setCount] = useState(0) 
  
  // 4. **The Value Object:** This must match the interface (AppContextType)
  const value: AppContextType = { // Explicitly type the value object for safety
    count,
    setCount,
  }

  return (
      <AppContext.Provider value={value} >
          {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider