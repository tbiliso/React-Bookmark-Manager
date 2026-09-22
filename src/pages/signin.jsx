import bookmarkIcon from '../assets/icon/Bookmark-icon.png'
import '../assets/css/signin.css'
import {Link} from 'react-router-dom'
function LogIn() {
    return (
        <div className='login'>
            <div className='login-title'>
                <img src={bookmarkIcon} alt="bookmark" />
                <h1>Bookmark Manager</h1>
            </div>
            <div className='login-group'>
                <h2>Log in to your account</h2>
                <p className='login-group-subtext'>Welcome back! Please enter your details.</p>
            </div>

            <form className='login-form'>
                <div className='login-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                </div>

                <div className='login-group'>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' />
                </div>
                <button className='login-submit'>Log In</button>
            </form>
            <footer>
                <p>forgot password? <Link to="/recoverPass">Recover it</Link></p>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </footer>
        </div>
    )
}

export default LogIn