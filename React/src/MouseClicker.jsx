function MouseClicker() {

    function handleClick(event) {
        console.log(event.target.name);
    }

    return (
        <button name="one" onClick={handleClick}>Click</button>
    )
}   

export default MouseClicker