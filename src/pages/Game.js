import {Col, Row} from "reactstrap";
import WordList from "../components/Game/WordList";
import Lobby from "../components/Game/Lobby";

function Game(props) {
    return(
        <>
            <Row>
                <Col style={{width: '33.33vw'}}>
                    <WordList margin={'55vh'} />
                    <Lobby />
                </Col>
            </Row>
        </>
    )
}

export default Game