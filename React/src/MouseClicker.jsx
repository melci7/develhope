function MouseClicker() {

    function handleClick(event) {
        console.log(event.currentTarget.name);
    }

    return (
        <button name="one" onClick={handleClick}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" /> Click</button>
    )
}   

export default MouseClicker