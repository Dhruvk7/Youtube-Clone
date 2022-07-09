import React from 'react'
import './_loginScreen.scss'

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="yt-logo" />
                <button>Login with google</button>
                <p>This project is made using Youtube DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen