import { createContext, useState, useContext } from "react";

// 1. Create the context
const UserContext = createContext();

export const UserProvider = ({ children, username }) => {
  // store the current user in state at the top level
  const [currentUser, setCurrentUser] = useState(username);
  // sets user object in state, shared via context

  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
  return useContext(UserContext);
};
// Save as UserContext.jsx in a separate 'context' folder
