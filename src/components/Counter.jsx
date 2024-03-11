import { Button, Card } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../state/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex items-center gap-x-2">
            <span>Current count is {count}</span>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
            <Button onClick={() => dispatch(incrementByAmount(10))}>+10</Button>
            </div>
    )
}
export default Counter