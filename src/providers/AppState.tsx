import React, {useContext, useState} from 'react';
import {AppState, View} from 'react-native';
import {AppData, User} from '../resources/ITUser';

const activeUser: User = {
  username: 'Hello',
  email: 'test@test.com',
  userId: '343gsrgs',
};

const initialAppData = {
  activeUser: activeUser,
};

export interface AppdataProvider {
  activeUser: User;
  setActiveUser: (value: User) => void;
}

export const AppStateContext = React.createContext<any>({});

export const useAppData = (): AppdataProvider => {
  return useContext(AppStateContext);
};

const AppStateProvider = ({children}) => {
  const [activeUser, setActiveUser] = useState<User>();

  const loginUser = (value: User) => {
    //   Do Validations
    // Set Variables
    setActiveUser(value);
  };
  return (
    <AppStateContext.Provider
      value={{setActiveUser: loginUser, activeUser: activeUser}}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
