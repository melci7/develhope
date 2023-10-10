function MultiButton() {
    
    function handleClick(event) {
        console.log(event.target.name);
    }

    return (
        <div>
            <button name="one" onClick={handleClick}>Click</button>
            <button name="two" onClick={handleClick}>Click</button>
            <button name="three" onClick={handleClick}>Click</button>
        </div>
    )
}   

export default MultiButton