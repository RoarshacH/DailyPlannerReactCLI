export interface User {
  username: string;
  email: string;
  userId: string;
}

export interface AppData {
  activeUser: User | undefined;
}
