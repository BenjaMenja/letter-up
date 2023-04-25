import {Button, Card, Col, Input, Row} from "reactstrap";
import {useEffect} from "react";

function isValidWord(validLetters, word) {
    const validLettersSplit = validLetters.split("")
    const attemptedWordSplit = word.split("")
    return attemptedWordSplit.every(attemptedLetter => {
        const letterIndex = validLettersSplit.indexOf(attemptedLetter)
        if (letterIndex > -1) {
            validLettersSplit.splice(letterIndex, 1)
            return true
        } else {
            return false
        }
    })
}

function WordSubmission(props) {

    let wordbox = document.getElementById('wordentrybox')

    const submitWord = () => {
        if (props.GameRunning) {
            let valid = isValidWord(props.word, wordbox.value)
            for (let i=0; i<props.WordList.length; i++) {
                if (wordbox.value === props.WordList[i]) {
                    document.getElementById('submiterror').textContent = 'Error: Word already used.'
                    return
                }
            }
            if (valid) {
                props.WordList.push(wordbox.value)
                wordbox.value = ""
                props.Updater(!props.Update)
            } else {
                document.getElementById('submiterror').textContent = 'Error: Invalid word.'
            }
        } else {
            document.getElementById('submiterror').textContent = 'Error: No game in progress.'
        }
    }

    useEffect(() => {
        if (props.GameRunning) {
            document.getElementById('submiterror').textContent = ''
        }
    })

    return (
        <div style={{marginBottom: props.margin}}>
            <Card className='mx-auto' style={{alignItems: 'center', width: '75%', marginBottom: '0.5rem'}}>
                <Row style={{marginTop: '2rem', marginBottom: '2rem'}}>
                    <Col>
                        <Input id='wordentrybox' placeholder={'Type words...'} type={'text'} style={{width: '80%'}}/>
                    </Col>
                    <Col>
                        <Button color={'primary'} onClick={submitWord}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Card>
            <h5 id={'submiterror'} style={{color: 'red'}}></h5>
        </div>
    )
}

export default WordSubmission