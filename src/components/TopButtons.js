import {Button, Row} from "reactstrap";

function TopButtons() {
    return (
        <div style={{marginBottom: '3rem'}}>
            <Row>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}} onClick={() => {
                    window.location.href = '/letter-up'
                }}>
                    Game
                </Button>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}} onClick={() => {
                    window.location.href = '/letter-up/rules'
                }}>
                    Rules
                </Button>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}} onClick={() => {
                    window.location.href = '/letter-up/options'
                }}>
                    Options
                </Button>
            </Row>
        </div>
    )
}

export default TopButtons