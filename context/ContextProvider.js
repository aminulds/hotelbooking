import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // Assign State
  const [openDateRange, setopenDateRange] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({ adult: 2, children: 5, room: 1, });
  const [filterSearch, setFilterSearch] = useState(true);

  // State Share as variables
  const stateShare = {
    openDateRange, setopenDateRange,
    date, setDate,
    openOption, setOpenOption,
    option, setOption,
    filterSearch, setFilterSearch,
    destination, setDestination,
  }

  return (
    <StateContext.Provider value={stateShare} >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);