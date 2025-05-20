import React, { createContext, useState } from "react";

const USERS = [
  { username: "admin", password: "1234567a", role: "admin" },
  { username: "sebas", password: "abcdef123", role: "user" },
];

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("user");
    return session ? JSON.parse(session) : null;
  });

  const [users, setUsers] = useState(() => {
    const session = localStorage.getItem("users");
    return session ? JSON.parse(session) : USERS;
  });

  const login = (username, password) => {
    const foundUser = users.find(
        (u) => u.username === username && u.password === password
    );

    console.log(foundUser);

    if(foundUser){
        setUser(foundUser);
        localStorage.setItem('user' , JSON.stringify(foundUser));

        return true
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }


  const registerContext = (username, password) => {

    const userExists = users.some((u) => u.username === username);

    if (userExists) {
      return { success: false, message: "El usuario ya existe" };
    }

    const newUser = { username, password, role: "user" };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    return { success: true };
  };

  return (
    <AuthContext.Provider value={{user, login, logout, registerContext}}>
        {children}
    </AuthContext.Provider>
  )
};


