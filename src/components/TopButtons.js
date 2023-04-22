import {Button, Row} from "reactstrap";

function TopButtons() {
    return (
        <div style={{marginBottom: '3rem'}}>
            <Row>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}}>
                    Game
                </Button>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}}>
                    Rules
                </Button>
                <Button style={{width: '33.33vw', height: '10vh', border: 'solid', borderColor: '#013596'}}>
                    Options
                </Button>
            </Row>
        </div>
    )
}

export default TopButtons