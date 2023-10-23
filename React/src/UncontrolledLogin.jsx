
function UncontrolledLogin() {

    function handleData(event) {
        event.preventDefault()
        // FormData is more simple usage
        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === 'on' ? true : false,
        }

        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleData} className="p-4">
                <input className='border border-gray-300 rounded-md px-4 py-2 w-64' type="text" name="username"/>
                <input className="border border-gray-300 rounded-md px-4 py-2 w-64" type="password" name="password"/>
                <input className="border border-gray-300 rounded-md px-4 py-2 w-64" type="checkbox" name="remember"/>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2" >Login</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2" type="reset">Reset</button>
            </form>
        </div>
    )
}

export default UncontrolledLogin;