import {Col, Row} from "reactstrap";
import WordList from "../components/Game/WordList";
import Lobby from "../components/Game/Lobby";
import SelectedWord from "../components/Game/SelectedWord";
import GameStateButton from "../components/Game/GameStateButton";
import WordSubmission from "../components/Game/WordSubmission";
import Timer from "../components/Game/Timer";

function Game(props) {
    return(
        <>
            <Row xs={'3'}>
                <Col>
                    <WordList margin={'55vh'} />
                    <Lobby/>
                </Col>
                <Col>
                    <SelectedWord margin={'65vh'}/>
                    <GameStateButton />
                </Col>
                <Col>
                    <WordSubmission margin={'45vh'}/>
                    <Timer />
                </Col>
            </Row>
        </>
    )
}

export default Game