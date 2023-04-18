import {Button, Row} from "reactstrap";

function TopButtons() {
    return (
        <>
            <Row>
                <Button style={{width: '33.33vw', height: '4vw', border: 'solid'}}>
                    Game
                </Button>
                <Button style={{width: '33.33vw', height: '4vw', border: 'solid'}}>
                    Rules
                </Button>
                <Button style={{width: '33.33vw', height: '4vw', border: 'solid'}}>
                    Options
                </Button>
            </Row>
        </>
    )
}

export default TopButtons