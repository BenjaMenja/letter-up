import {Button, Col, Dropdown, DropdownToggle, Input, Row} from "reactstrap";

function Rules() {
    const toggle = () => {
        window.alert('Hello there!')
    }
    return (
        <div>
            <Row xs={'2'}>
                <Col style={{textAlign: 'left', marginLeft: '12.5%'}}>
                    <h1><b>Welcome to LetterUp!</b></h1>
                    <h5>In this fast paced word game, players can either play solo or work together to</h5>
                    <h5>produce as many words as possible using the letters from the given larger word.</h5>
                    <div className={'d-flex mb-4'}>
                        <h5>Pressing</h5>
                        <Button color={'primary'} style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}>Start Game</Button>
                        <h5>will display a source word in the center of the page.</h5>
                    </div>
                    <div className={'d-flex mb-4'}>
                        <h5>Type words into the</h5>
                        <Input placeholder={'Type words...'} type={'text'} style={{width: '18%', marginLeft: '0.5rem', marginRight: '0.5rem'}}/>
                        <h5>box.</h5>
                    </div>
                    <h5>If the word only uses letters from the source word</h5>
                    <div className={'d-flex mb-4'}>
                        <h5>and is a valid English word, then it will be added to the</h5>
                        <Dropdown toggle={toggle} style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}>
                            <DropdownToggle caret size={'sm'}>
                                Submitted Words
                            </DropdownToggle>
                        </Dropdown>
                        <h5>box.</h5>
                    </div>
                    <h5>Try and fill out as many words as possible before time runs out!</h5>
                    <h5>Happy word hunting!</h5>
                </Col>
            </Row>
        </div>
    )
}
export default Rules