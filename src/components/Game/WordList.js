import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";

function WordList(props) {
    let [wordCount, setWordCount] = useState(0)
    let [open, setOpen] = useState(false)

    const toggle = () => {
        if (wordCount > 0) {setOpen((prevState) => !prevState)}
    }
    return(
        <div style={{marginBottom: props.margin}}>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret size={'lg'}>
                    Submitted Words - {wordCount}
                </DropdownToggle>
                <DropdownMenu>

                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default WordList