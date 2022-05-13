const login=()=>{
    return (
    <body>
        <form>
            <h2>CGU Login</h2>

            <div>
                <label>User Name</label>
                <input type='text' name='user'id='user'/>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password'id='password'/>
            </div>

            <button type='Login'>Log in</button>
        </form>
    </body>
    )
}

export default login;