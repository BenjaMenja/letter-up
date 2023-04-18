import {Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row} from "reactstrap";
import React, {useState} from 'react';

function Game(props) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prevState) => !prevState);

    return(
        <>
            <Row>
                <Col style={{width: '33.33vw'}}>
                    <Dropdown isOpen={open} toggle={toggle} {...props}>
                        <DropdownToggle caret size="lg">
                            Submitted Words
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag={'h6'}>f</DropdownItem>
                            <DropdownItem>No</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
        </>
    )
}

export default Game