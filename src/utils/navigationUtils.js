import { useNavigate } from "react-router-dom"

export const navigate = () => {
    const navigate = useNavigate()
    const viewNavigate = (newRoute) => {
        if (!document.startViewTransition)
            return navigate(newRoute)

        return document.startViewTransition(() => { navigate(newRoute) })
    }

    return viewNavigate
}