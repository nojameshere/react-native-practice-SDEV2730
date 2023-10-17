import React, { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

export default MyContext;

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, userEmail: action.payload };
    case 'SET_BALANCE':
      return { ...state, balance: action.payload };
    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    case 'SET_PROFILE_PHOTO':
      return { ...state, profilePhotoPath: action.payload };
    case 'SET_SELECTED_LOCATION':
      return { ...state, selectedLocation: action.payload };
    default:
      return state;
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    userEmail: '',
    balance: 0,
    isAuthenticated: false,
    selectedLocation: null,
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
