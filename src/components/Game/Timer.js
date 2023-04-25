import {useEffect, useRef, useState} from "react";

function Timer(props) {

    let time = useRef(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    let intervalID = useRef(0)

    useEffect(() => {
        let options = JSON.parse(window.localStorage.getItem('options'))
        if (options !== null) {
            time.current = (options.timer.min * 60) + (options.timer.sec)
        }
        if (props.GameRunning) {
            setMinutes(options.timer.min)
            setSeconds(options.timer.sec)
            if (intervalID.current === 0) {
                intervalID.current = setInterval(updateTimer, 1000)
            }
        } else {
            setMinutes(0)
            setSeconds(0)
            clearInterval(intervalID.current)
            intervalID.current = 0
        }
    }, [props.GameRunning])

    const updateTimer = () => {
        time.current--
        setMinutes(Math.floor(time.current / 60))
        setSeconds(time.current % 60)
        if (time.current <= 0) {
            props.GameStateChanger(false)
        }
    }

    return (
        <div>
            <h2>Time Remaining:</h2>
            <div className={'d-flex justify-content-center'}>
                <h3>{minutes > 9 ? minutes : '0' + minutes}</h3>
                <h3>:</h3>
                <h3>{seconds > 9 ? seconds : '0' + seconds}</h3>
            </div>
        </div>
    )
}

export default Timer