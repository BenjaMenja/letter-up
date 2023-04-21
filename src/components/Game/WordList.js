import {List} from "reactstrap";
import {useState} from "react";

function WordList(props) {
    let [wordCount, setWordCount] = useState(0)

    return(
        <div style={{marginBottom: props.margin}}>
            <h2>Submitted Words: {wordCount}</h2>
            <List type={'unstyled'}>

            </List>
        </div>
    )
}

export default WordList