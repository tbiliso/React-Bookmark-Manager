import bookmarkIcon  from '../assets/icon/Bookmark-icon.png'

function LogIn(){
    return(
        <div>
            <title className='login-title'>
                <img src={bookmarkIcon} alt="bookmark" />
                <h1>Bookmark Manager</h1>
            </title>
            <h2>Log in to your account</h2>
            <span>Welcome back! Please enter your details.</span>

            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>

            <label htmlFor="pass">Email</label>
            <input type="password" id='pass'/>
        </div>    
    )
}

export default LogIn