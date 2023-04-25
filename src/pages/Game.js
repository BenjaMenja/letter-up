import {Col, Row} from "reactstrap";
import WordList from "../components/Game/WordList";
import Lobby from "../components/Game/Lobby";
import SelectedWord from "../components/Game/SelectedWord";
import GameStateButton from "../components/Game/GameStateButton";
import WordSubmission from "../components/Game/WordSubmission";
import Timer from "../components/Game/Timer";
import words from "../words.json"
import {useEffect, useRef, useState} from "react";

function Game() {

    const [gameOn, setGameOn] = useState(false)
    const [changeWord, setChangeWord] = useState(false)
    const [listUpdater, setListUpdater] = useState(false)

    let wordList = useRef([])
    let chosenWord = useRef("")

    useEffect(() => {
        let options = JSON.parse(window.localStorage.getItem('options'))
        if (gameOn) {
            if (!changeWord) {
                let wordLength = Math.floor(Math.random() * (options.wordLength.max - options.wordLength.min + 1) + options.wordLength.min)
                let wordArray = words[wordLength.toString()]
                let word = wordArray[Math.floor(Math.random() * (wordArray.length - 1))]
                chosenWord.current = word.charAt(0).toUpperCase() + word.slice(1)
            }
            setChangeWord(true)
        } else {
            wordList.current.length = 0
            setChangeWord(false)
            setListUpdater(true)
        }
    }, [gameOn, changeWord])

    return(
        <>
            <Row xs={'3'}>
                <Col className={'justify-content-center'}>
                    <WordList margin={'55vh'} GameRunning={gameOn} list={wordList.current} Update={listUpdater} Updater={setListUpdater}/>
                    {((window.localStorage.length !== 0) && (JSON.parse(window.localStorage.getItem('options')).lobby.enabled)) ? <Lobby GameRunning={gameOn}/> : null}
                </Col>
                <Col>
                    <SelectedWord margin={'60vh'} GameRunning={gameOn} ChangeWord={changeWord} word={chosenWord.current}/>
                    <GameStateButton GameStateChanger={setGameOn} GameRunning={gameOn}/>
                </Col>
                <Col>
                    <WordSubmission margin={'45vh'} GameRunning={gameOn} word={chosenWord.current} WordList={wordList.current} Update={listUpdater} Updater={setListUpdater}/>
                    <Timer GameStateChanger={setGameOn} GameRunning={gameOn}/>
                </Col>
            </Row>
        </>
    )
}

export default Game