function MouseClicker() {
    
    // Yes "name" attribute still printed in the console because
    // image inside the button and button has "event.currentTarget.name" handler.
    function handleClick(event) {
        console.log(event.target.name);
    }
    function getSrc(event) {
        console.log(event.target.src)
    }
    return (
        <button name="one" onClick={handleClick}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" onClick={getSrc}/> Click</button>
    )
}   

export default MouseClicker