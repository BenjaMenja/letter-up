import {Button, Card, CardText, CardTitle} from "reactstrap";

function Lobby() {
    return(
        <>
            <Card>
                <CardTitle tag={'h2'}>
                    Lobby
                </CardTitle>
                <Button style={{backgroundColor: '#003ff8', fontSize: '1.3rem', color: '#FFFFFF', borderRadius: '10px', borderColor: 'rgba(0,0,0,0)'}}>
                    Create Lobby
                </Button>
            </Card>
        </>
    )
}

export default Lobby