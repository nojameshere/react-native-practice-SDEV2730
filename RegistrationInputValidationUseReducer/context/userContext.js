import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
  
    const updateFirstName = (newFirstName) => {
      setFirstName(newFirstName);
    };
  
    const updateLastName = (newLastName) => {
      setLastName(newLastName);
    };
  
    const updatePhoneNumber = (newPhoneNumber) => {
      setPhoneNumber(newPhoneNumber);
    };
  
    const updateEmail = (newEmail) => {
      setEmail(newEmail);
    };
    const value = {
      firstName,
      lastName,
      phoneNumber,
      email,
      updateFirstName,
      updateLastName,
      updatePhoneNumber,
      updateEmail,
    };
  
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserContextProvider;
  