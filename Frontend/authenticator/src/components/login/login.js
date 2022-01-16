


function login(){
    return (
        <div className="container">
            <div className="email">
                <input type="text" name="email" id="emailinput" placeholder="type your email"/> 
            </div>
            <div className="password">
                <input type="password" name="password" id="passinput" placeholder="type your password"/> 
            </div>
            <div className="logindiv">
                <input type="submit" name="login" id="login" value="login" /> 
            </div>
            <div className="registerdiv">
                <a id="reg" href="/register">Register Yourself</a>
            </div>
        </div>
    )
}

export default login;