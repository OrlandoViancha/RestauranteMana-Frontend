
const Login_Buttons=()=>{

    return(

        <>
            <span className="navbar-text"> 
                <a className="login"  href="./login">LogIn</a>
            </span>
            <a className="btn btn-light action-button"style={{
                            fontFamily: "'PT Mono', sans-serif",
                            fontWeight: "400",
                            font: "normal",
                        }} role="button" href="./registrer">Signup
            </a>
        </>
    )
} 

export default Login_Buttons;