import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserContextProvider: any = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showAuthModal, setAuthModal] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        showAuthModal,
        setAuthModal,
        isUserLoggedIn,
        setUserLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
