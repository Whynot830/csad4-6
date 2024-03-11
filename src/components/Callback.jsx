import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../AuthContext"
import axios from "axios"
import { navigate } from "../utils/navigationUtils"

const Callback = () => {
    const called = useRef(false)
    const { checkLoginState, loggedIn } = useContext(AuthContext)
    const viewNavigate = navigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (called.current) return
                called.current = true
                const res = await axios.get(`http://localhost:5000/auth/token${window.location.search}`)
                console.log('response: ', res)
                checkLoginState()
                viewNavigate('/')
            } catch (err) {
                console.error(err)
                viewNavigate('/')
            }
        }
        if (loggedIn === false)
            fetchData()
        else if (loggedIn === true)
            viewNavigate('/')
    }, [checkLoginState, loggedIn, viewNavigate])
    return <></>
}
export default Callback