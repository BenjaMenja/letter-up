import {Button, Card, CardText, Col, Form, Input, Label, Row} from "reactstrap";

function Lobby() {
    return(
        <div style={{marginLeft: '6.25%'}}>
            <Card style={{width: '87.5%', borderColor: '#000000', borderRadius: '16px', borderStyle: 'solid'}}>
                <Button color={'primary'} style={{width: '75%', alignSelf: 'center', marginTop: '0.5rem', marginBottom: '2rem'}}>
                    Create Lobby
                </Button>
                <CardText>
                    <Form style={{marginBottom: '0.5rem'}}>
                        <Row>
                            <Col>
                                <Label style={{color: '#000000', fontSize: '0.9rem'}}>
                                    Join Lobby:
                                </Label>
                            </Col>
                            <Col>
                                <Input type={'text'} style={{width: '100%', marginRight: '2px'}} placeholder={'Enter Code'}/>
                            </Col>
                            <Col>
                                <Button>

                                    Join
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </CardText>
            </Card>
        </div>
    )
}

export default Lobby