import {Button, Card, CardText, Input, Label} from "reactstrap";
import {useState} from "react";


function Lobby(props) {

    const [inLobby, setInLobby] = useState(false)
    const validateLobby = () => {
        let lobbybox = document.getElementById('lobbybox')
        let lobbyerror = document.getElementById('lobbyerror')

        if (props.GameRunning) {
            lobbyerror.textContent = 'Error: A game is already in progress.'
            return
        }
        if (lobbybox.value.length !== 4) {
            lobbyerror.textContent = 'Error: Expected a 4 character code.'
        } else {
            lobbyerror.textContent = ''
            setInLobby(!inLobby)
        }
    }

    const createLobby = () => {
        let lobbyerror = document.getElementById('lobbyerror')
        if (props.GameRunning) {
            lobbyerror.textContent = 'Error: A game is already in progress.'
            return
        }
        setInLobby(!inLobby)
        lobbyerror.textContent = 'Lobby Code: XCPL'
    }

    return (
        <div>
            <h5 id={'lobbyerror'} style={{color: 'red'}}></h5>
            <Card className={'mx-auto'} style={{width: '87.5%', borderColor: '#000000', borderRadius: '16px', borderStyle: 'solid'}}>
                {inLobby ? <h5 style={{color: 'green'}}>You joined a lobby!</h5> : <><Button color={'primary'} style={{
                    width: '75%',
                    alignSelf: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '2rem'
                }} onClick={createLobby}>
                    Create Lobby
                </Button>
                    <CardText>
                        <div className={'d-flex'} style={{paddingLeft: '1rem', marginBottom: '0.5rem'}}>
                            <Label style={{color: '#000000', fontSize: '1rem', marginLeft: '1rem'}}>
                                Join Lobby:
                            </Label>
                            <Input id='lobbybox' type={'text'} style={{width: '60%', marginLeft: '1rem'}}
                                   placeholder={'Enter Code'}/>
                            <Button style={{marginLeft: '1rem'}} onClick={validateLobby}>
                                Join
                            </Button>
                        </div>
                    </CardText></>}

            </Card>
        </div>
    )
}

export default Lobby