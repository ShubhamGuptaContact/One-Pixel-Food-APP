import { createContext } from 'react';

const UserContext = createContext({
    LoggedInUser: "Default Login"
})

export default UserContext;