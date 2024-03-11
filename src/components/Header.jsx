import { User, Breadcrumbs, BreadcrumbItem, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Button } from "@nextui-org/react"
import { Children, useContext } from "react"
import { matchRoutes, useLocation, useNavigate, useParams, Link } from "react-router-dom"
import Counter from "./Counter"
import { AuthContext } from "../AuthContext"
import { navigate } from "../utils/navigationUtils"

const Header = () => {
    const { user, loggedIn } = useContext(AuthContext)
    console.log(loggedIn);
    const viewNavigate = navigate()
    const location = useLocation()
    const { pathname } = location
    return (
        <header className="w-full p-3 bg-neutral-900 flex items-center justify-between">
            <Breadcrumbs radius="1" variant="bordered">
                <BreadcrumbItem onPress={() => { viewNavigate('/') }}>
                    <span>Home</span>

                </BreadcrumbItem>
                {pathname.includes('profile') &&
                    <BreadcrumbItem>
                        <span>Profile</span>
                    </BreadcrumbItem>

                }
                {pathname.includes('dialogs') &&

                    <BreadcrumbItem onPress={() => { viewNavigate('/dialogs') }}>
                        <span>Dialogs</span>
                    </BreadcrumbItem>

                }
                {pathname.includes('dialogs/') &&

                    <BreadcrumbItem>
                        <span>Eric</span>
                    </BreadcrumbItem>

                }
            </Breadcrumbs>
            {!loggedIn && <Counter />}
            {loggedIn && !(pathname.includes('profile')) && (
                <User
                    name={user.name}
                    description={user.email}
                    avatarProps={{ src: user.picture }}
                    onClick={() => viewNavigate('/profile')}
                    className='p-2 cursor-pointer hover:bg-neutral-800 transition !duration-100'
                />
            )}
        </header>
    )
}

export default Header
