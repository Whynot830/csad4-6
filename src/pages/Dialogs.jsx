import { BreadcrumbItem, Card, Listbox, ListboxItem, User } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setSeed } from "../state/seed/seedSlice"
import Dialog from "../components/Dialog"

const Dialogs = () => {
    const dispatch = useDispatch()
    const seed = useSelector((state) => state.seed)
    const [users, setUsers] = useState([])
    const [currentId, setCurrentId] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://randomuser.me/api/?inc=name,login,picture,location,info&results=10&seed=${seed}`)
            const data = await response.json()
            dispatch(setSeed(data.info.seed))
            const users = data.results.map((user, idx) =>
            ({
                id: idx + 1,
                name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                description: user.location.street.name,
                avatarProps: { src: user.picture.thumbnail }
            }))
            setUsers(users)
            console.log(users);
        }
        fetchData()
    }, [dispatch])

    return (
        <>
            <div className="flex justify-between gap-x-6 w-full">
                <Card className='h-fit'>
                    <Listbox
                        emptyContent={<span className="text-lg">No contacts yet</span>}
                        aria-label="Contacts"
                        selectionMode='single'
                    >
                        {users.map((user) => (
                            <ListboxItem textValue={user.id} key={user.id} onClick={() => setCurrentId(user.id)} >
                                <User
                                    name={user.name} description={user.description} avatarProps={user.avatarProps}
                                />
                            </ListboxItem>
                        ))}
                    </Listbox>
                </Card>
                <Card className="w-full">
                    {users.map((user) =>
                        <div className={`flex h-full ${currentId == user.id ? '' : 'hidden'}`} key={user.id}>
                            <Dialog user={user} ></Dialog>
                        </div>
                    )}
                </Card>
            </div>
        </>
    )
}
export default Dialogs