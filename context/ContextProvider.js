import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [openDateRange, setopenDateRange] = useState(false);
  const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

  const stateShare = {
    openDateRange, setopenDateRange,
    date, setDate,
  }

  return (
    <StateContext.Provider value={stateShare} >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);