import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthContext"
import { Button, Avatar, Card, CardBody, Divider } from "@nextui-org/react"

const Dashboard = () => {
    const { user, loggedIn, checkLoginState } = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            await axios.post(`http://localhost:5000/auth/logout`)
            checkLoginState()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="flex flex-col items-center w-full h-3/4 justify-center gap-y-6">
            <h2 className="text-xl">Your Personal Data</h2>
            <Card>
                <CardBody>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                        <h3 className="text-lg">Username</h3>
                        <h3 className="text-lg">{user?.name}</h3>
                        <Divider /><Divider />
                        <h3 className="text-lg">Email</h3>
                        <h3 className="text-lg">{user?.email}</h3>
                        <Divider /><Divider />
                        <h3 className="text-lg">Profile Picture</h3>
                        <Avatar className='place-self-center' src={user.picture} size='lg'></Avatar>
                    </div>
                </CardBody>
            </Card>


            <Button className="text-base" onClick={handleLogout}>
                Logout
            </Button>
        </div>

    )
}

export default Dashboard