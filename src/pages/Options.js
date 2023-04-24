import {Col, Input, Row} from "reactstrap";
import {useEffect} from "react";

function Options() {

    let options
    useEffect(() => {
        options = JSON.parse(window.localStorage.getItem('options'))
        console.log(options.timer)
        document.getElementById('timermin').setAttribute('value', options.timer.min)
        document.getElementById('timersec').setAttribute('value', options.timer.sec)
    })

    return (
        <div>
            <h1><b>Options</b></h1>
            <Row xs={'2'}>
                <Col style={{textAlign: 'left', marginLeft: '12.5%'}}>
                    <div className={'d-flex'} style={{marginBottom: '2rem'}}>
                        <h5>Timer (Minutes:Seconds): </h5>
                        <Input id='timermin' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '13%'}} type={'number'} placeholder={'Minutes'}></Input>
                        <h5>:</h5>
                        <Input id='timersec' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '14%'}} type={'number'} placeholder={'Seconds'}></Input>
                    </div>
                    <div className={'d-flex'} style={{marginBottom: '2rem'}}>
                        <h5>Word Length (Minimum - Maximum):</h5>
                        <Input id='wordmin' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '16%'}} type={'number'} placeholder={'Minimum'}></Input>
                        <h5>-</h5>
                        <Input id='wordmax' style={{marginLeft: '0.5rem', marginRight: '0.5rem', width: '16%'}} type={'number'} placeholder={'Maximum'}></Input>
                    </div>
                    <div className={'d-flex'}>
                        <h5>Singleplayer mode (Disables Lobby Feature): </h5>
                        <div className={'form-check form-switch'} style={{marginLeft: '0.5rem'}}>
                            <Input type={'checkbox'}></Input>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Options