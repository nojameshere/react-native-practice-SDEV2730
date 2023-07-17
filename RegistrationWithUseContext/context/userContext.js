import { createContext } from "react";

export const UserContext = createContext({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
});