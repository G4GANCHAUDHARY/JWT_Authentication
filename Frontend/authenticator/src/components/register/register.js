function register(){
    return (
        <div className="container">
             <div className="username">
                <input type="text" name="name" id="nameinput" placeholder="type your name"/> 
            </div>
            <div className="email">
                <input type="text" name="email" id="emailinput" placeholder="type your email"/> 
            </div>
            <div className="password">
                <input type="password" name="password" id="passinput" placeholder="type your password"/> 
            </div>
            <div className="regdiv">
                <input type="submit" name="register" id="reg" value="register" /> 
            </div>
            <div className="logindiv">
                <a id="reg" href="/">Login Yourself</a>
            </div>
        </div>
    )
}

export default register;