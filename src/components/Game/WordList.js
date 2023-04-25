import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useState} from "react";

function WordList(props) {
    let [wordCount, setWordCount] = useState(0)
    let [open, setOpen] = useState(false)

    useEffect(() => {
        if (props.Update) {
            console.log(props.list.length)
            setWordCount(props.list.length)
            props.Updater(false)
        }

        if (!props.GameRunning && open) {
            toggle()
        }

    }, [props.list.length])

    const toggle = () => {
        if (wordCount > 0) {setOpen((prevState) => !prevState)}
    }
    return(
        <div style={{marginBottom: props.margin}}>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret size={'lg'}>
                    Submitted Words - {props.list.length === undefined ? '0' : wordCount}
                </DropdownToggle>
                <DropdownMenu>
                    {(props.list.length === undefined || props.list.length === 0) ? null : props.list.map((heading, index) => <DropdownItem>{heading}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default WordList