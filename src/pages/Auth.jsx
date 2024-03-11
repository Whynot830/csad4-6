import { Button } from "@nextui-org/react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { navigate } from "../utils/navigationUtils";

const Auth = () => {
    const viewNavigate = navigate()
    const { loggedIn } = useContext(AuthContext)
    useEffect(() => {
        if (loggedIn)
            viewNavigate('/')
    })
    const handleLogin = async () => {
        try {
            const {
                data: { url },
            } = await axios.get(`http://localhost:5000/auth/url`)
            window.location.assign(url)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="flex flex-col gap-y-6 w-full h-3/4 justify-center items-center">
            <h2 className="text-3xl">Sign in to your account</h2>
            <Button onClick={handleLogin}>
                <span className="text-base">
                    Sign in with Google
                </span>
            </Button>
        </div>



    )
}
export default Auth