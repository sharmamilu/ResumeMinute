import React, { createContext , useContext, useState,useMemo,useEffect } from "react";
import { userRegister,userLogin } from "../api/apifunctions";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        const storedExpiry = localStorage.getItem('expiry');

        if (storedUser && storedToken && storedExpiry) {
            const user = JSON.parse(storedUser);
            const expiry = parseInt(storedExpiry);
            if (Date.now() < expiry) {
                setUser(user);
                setIsLoggedIn(true);
            }else{
                logout();
            }
        }  
    }, []);
    const registerUser = async (user) => {
        console.log("Registered user:", user);
        const res = await userRegister(user);
        if(res){
            console.log("the response is",res);
        }
    }

    const loginUser = async (user) => {
        const res = await  userLogin(user);
        console.log("the response is",res);
        if(res.success){
            setUser(user);
            console.log("the response is",res);
            setIsLoggedIn(true);
            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem('token',res.token);
            localStorage.setItem('expiry',Date.now() + 3600000);
            return true;
        }else{
            return false;
        }  
    }


    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('expiry');
    }

    const value = useMemo(() => ({
        user,
        isLoggedIn,
        registerUser,
        loginUser,
        logout
    }), [user, isLoggedIn]);

    return (
        <AuthContext.Provider value={{ ...value }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);