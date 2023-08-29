import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"

function    Chatapp() {

    let x = { name: "Mohaadm"}

    
    const [state, setState] = useState({ message: "", name: "" })
    const [chat, setChat] = useState([])
    const [socket] = useState(() => io(':8000'));

    // const socket = io.connect("http://localhost:8000")

    useEffect(
        () => {
            socket.on("message", ({ name, message }) => {
                setChat([...chat, { name, message }])
            })
        },
        [chat]
    )

    // const onTextChange = (e) => {
    //     setState({ ...state, [e.target.name]: e.target.value })
    // }

    const onMessageSubmit = (e) => {
        const { name, message } = state
        socket.emit("message", { name, message })
        e.preventDefault()
        setState({ message: "", name })
    }


    return (
        <div className="card">
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div className="name-field">
                    <TextField name="name" onChange={(e) => setState({...state,[e.target.name]:e.target.value })} value={state.name} label="Name" />
                </div>
                <div>
                    <TextField
                        name="message"
                        onChange={(e) => setState({...state,[e.target.name]:e.target.value })}
                        value={state.message}
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Message"
                    />
                </div>
                <button>Send Message</button>
            </form>
            <div className="render-chat">
                <h1>Chat Log</h1>
                {
                    chat.map(({ name, message }, index) => (
                        <div key={index}>
                            <h3>
                                {name}: <span>{message}</span>
                            </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Chatapp