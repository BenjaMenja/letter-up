import {Button} from "reactstrap";
import {useEffect, useState} from "react";

function GameStateButton(props) {

    const [msg, setMsg] = useState("Start Game")

    useEffect(() => {
        if (!props.GameRunning) {
            setMsg("Start Game")
        }
    }, [props.GameRunning])

    return (
        <div>
            <Button color='primary' style={{fontSize: '1.5rem'}} onClick={() => {
                if (!props.GameRunning) {
                    props.GameStateChanger(true)
                    setMsg("Quit Game")
                } else {
                    props.GameStateChanger(false)
                    setMsg("Start Game")
                }
            }}>
                {msg}
            </Button>
        </div>
    )
}

export default GameStateButton