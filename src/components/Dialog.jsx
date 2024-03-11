import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../state/messages/messagesSlice'
import { Button, Card, Chip, Input } from '@nextui-org/react'

const Dialog = ({ user }) => {
    const [newMessage, setNewMessage] = useState('')
    const id = user?.id
    const messages = useSelector((state) => state.messages[id] || [])
    const dispatch = useDispatch()

    const handleSendMessage = () => {
        const dialogId = id
        const message = { text: newMessage, timestamp: Date.now() }

        dispatch(addMessage({ dialogId, message }))

        setNewMessage('')
    }

    return (
        <div className='p-6 flex flex-col h-full w-full justify-between items-start'>
            <h2 className='text-xl'>{user.name}</h2>
            <div className='flex flex-col gap-y-2 h-full py-5 items-end w-full justify-end'>
                {messages.slice().reverse().map((message, index) => (
                    <Chip variant="shadow" size='lg' key={index}>
                        <span>{message.text} </span>
                        <sub>{('0' + new Date(message.timestamp).getHours()).slice(-2)}:{('0' + new Date(message.timestamp).getMinutes()).slice(-2)}</sub>
                    </Chip>
                ))}
            </div>
            <div className='w-full space-y-2 flex flex-col items-end'>
                <Input
                    placeholder='Enter your message'
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button className='' onClick={handleSendMessage}>Send</Button>
            </div>
        </div>
    )
}

export default Dialog
