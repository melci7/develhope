function AlertClock() {
    function currentTime() {
        const time = new Date()
        alert(time.toLocaleTimeString())
    }
    
    return (
        <button onClick={currentTime}>Click</button>
    )
}

export default AlertClock