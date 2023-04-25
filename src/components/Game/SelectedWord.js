function SelectedWord(props) {
    return (
        <div style={{marginBottom: props.margin}}>
            <h3>{props.GameRunning ? props.word : 'Press Start Game to generate a word'}</h3>
        </div>
    )
}

export default SelectedWord