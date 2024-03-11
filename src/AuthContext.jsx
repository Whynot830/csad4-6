import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(null)
    const [user, setUser] = useState(null)
    const serverUrl = 'http://localhost:5000'
    const checkLoginState = useCallback(async () => {
        try {
            const {
                data: { loggedIn: logged_in, user },
            } = await axios.get(`${serverUrl}/auth/logged_in`)
            setLoggedIn(logged_in)
            user && setUser(user)
        } catch (err) {
            console.error(err);
        }
    }, [])

    useEffect(() => {
        checkLoginState()
    }, [checkLoginState])

    return <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>{children}</AuthContext.Provider>
}
export default AuthContextProvider