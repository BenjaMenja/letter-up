import {Button, Card, Col, Form, Input, Row} from "reactstrap";

function WordSubmission(props) {
    return (
        <div style={{marginBottom: props.margin}}>
            <Card style={{alignItems: 'center', width: '75%', marginLeft: '12.5%'}}>
                <Form>
                    <Row style={{marginTop: '2rem', marginBottom: '2rem'}}>
                        <Col>
                            <Input placeholder={'Type words...'} type={'text'} style={{width: '80%'}}/>
                        </Col>
                        <Col>
                            <Button color={'primary'}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default WordSubmission