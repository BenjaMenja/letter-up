import {Button, Col, Input, Row} from "reactstrap";
import {useEffect, useRef} from "react";

function Options() {

    let options = useRef({})
    useEffect(() => {
        options.current = JSON.parse(window.localStorage.getItem('options'))
        console.log(options.current)
        document.getElementById('timermin').setAttribute('value', options.current.timer.min)
        document.getElementById('timersec').setAttribute('value', options.current.timer.sec)
        document.getElementById('wordmin').setAttribute('value', options.current.wordLength.min)
        document.getElementById('wordmax').setAttribute('value', options.current.wordLength.max)
        document.getElementById('lobby').checked = options.current.lobby.enabled
    })

    const updateOptions = () => {
        let timerminval = parseInt(document.getElementById('timermin').value)
        let timersecval = parseInt(document.getElementById('timersec').value)
        let wordminval = parseInt(document.getElementById('wordmin').value)
        let wordmaxval = parseInt(document.getElementById('wordmax').value)
        let lobbychecked = document.getElementById('lobby').checked
        let err = false

        console.log(timerminval, timersecval, wordminval, wordmaxval)

        if (timerminval < 1 || timerminval > 10) {
            document.getElementById('timererror').textContent = 'Error: Minutes must be between 1 and 10.'
            err = true
        } else {
            if (err === false) {
                document.getElementById('timererror').textContent = ''
                options.current.timer.min = timerminval
            }
        }

        if (timersecval < 0 || timersecval > 59) {
            document.getElementById('timererror').textContent = 'Error: Seconds must be between 0 and 60.'
            err = true
        } else {
            if (err === false) {
                document.getElementById('timererror').textContent = ''
                options.current.timer.sec = timersecval
            }
        }

        if (wordminval < 7 || wordminval > 15 || wordmaxval < 7 || wordmaxval > 15) {
            document.getElementById('wordlengtherror').textContent = 'Error: Word length bounds must be between 7 and 15.'
            err = true
        } else if (wordminval > wordmaxval) {
            document.getElementById('wordlengtherror').textContent = 'Error: Word length minimum must not be greater than the maximum.'
            err = true
        } else {
            document.getElementById('wordlengtherror').textContent = ''
            options.current.wordLength.min = wordminval
            options.current.wordLength.max = wordmaxval
        }

        if (err) {
            document.getElementById('savesettings').style.visibility = 'hidden'
            return
        } else {
            options.current.lobby.enabled = lobbychecked
            window.localStorage.setItem('options', JSON.stringify(options.current))
            document.getElementById('savesettings').style.visibility = 'visible'
        }

    }

    return (
        <div>
            <h1><b>Options</b></h1>
            <Row xs={'2'} style={{paddingBottom: '10%'}}>
                <Col style={{textAlign: 'left', marginLeft: '12.5%'}}>
                    <div className={'d-flex'} style={{marginBottom: '2rem'}}>
                        <h5>Timer (Minutes:Seconds): </h5>
                        <Input id='timermin' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '13%'}} type={'number'} placeholder={'Minutes'}></Input>
                        <h5>:</h5>
                        <Input id='timersec' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '14%'}} type={'number'} placeholder={'Seconds'}></Input>
                        <h5 id={'timererror'} style={{color: 'red'}}></h5>
                    </div>
                    <div className={'d-flex'} style={{marginBottom: '2rem'}}>
                        <h5>Word Length (Minimum - Maximum):</h5>
                        <Input id='wordmin' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '16%'}} type={'number'} placeholder={'Minimum'}></Input>
                        <h5>-</h5>
                        <Input id='wordmax' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '16%'}} type={'number'} placeholder={'Maximum'}></Input>
                        <h5 id={'wordlengtherror'} style={{color: 'red'}}></h5>
                    </div>
                    <div className={'d-flex'}>
                        <h5>Singleplayer mode (Disables Lobby Feature): </h5>
                        <div className={'form-check form-switch'} style={{marginLeft: '0.5rem'}}>
                            <Input id='lobby' type={'checkbox'}></Input>
                        </div>
                    </div>
                </Col>
            </Row>
            <h5 id='savesettings' style={{color: '#55ff3f', visibility: 'hidden'}} >Settings Saved!</h5>
            <Button color={'primary'} onClick={updateOptions} style={{fontSize: '1.5rem'}}>
                Save Settings
            </Button>
        </div>
    )
}

export default Options