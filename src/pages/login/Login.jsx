import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/firebase.config'
import {
    signInWithEmailAndPassword, 
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth'



const Login = () => {


    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignInWithEmailAndPassword = async (e) => {
        e.preventDefault()  // prevent reload page
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            if (result?.user?.accessToken) {
                alert('Login Successfully')
                navigate('/')
            }
        } catch (error) {
            alert(error.message)
        }

       

    }



    const handleSignInWithGoogle = async (e) => { 
        e.preventDefault()
        try {
            const googleLoginProvider = new GoogleAuthProvider() // provider co gia tri bay gio = google auth provider dc import tu firebase
            const result = await signInWithPopup(auth, googleLoginProvider);
            if (result?.user?.accessToken) {
                alert('Login Successfully')
                navigate('/')
            }
        } catch (error) {
            alert(error.message)
        }
    }

    



  return (
    <div className="bg-[#B3FFAE] flex flex-1 justify-center items-center h-screen   ">
    <form
      autoComplete="off"
      className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
      aria-label="signup-form"
    >
      <h2 className="mb-10 text-3xl font-bold text-center">Sign In </h2>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label htmlFor="email" className="text-sm font-medium cursor-pointer">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-start mb-5 gap-y-3">
        <label
          htmlFor="password"
          className="text-sm font-medium cursor-pointer"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-5 text-slate-400">
        <p>Forgot your password?</p>
        <p
          onClick={() => navigate('/forgot')}
          className="text-blue-500 underline ml-2"
        >
          Reset Password
        </p>

      </div>
      <div className="flex items-center justify-end mb-5 text-slate-400">
      <p>Dont have account ? </p>
        <p
          onClick={() => navigate('/signup')}
          className="text-blue-500 underline ml-2"
        >
          Sign up now
        </p>
      </div>
      <button
        onClick={(e) => handleSignInWithEmailAndPassword(e)}
        type="submit"
        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Sign In
      </button>
      <button
        onClick={(e) => handleSignInWithGoogle(e)}
        type="submit"
        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-blue-500 gap-x-2 bg-transparent rounded-lg h-[60px] mt-4 border border-blue-500"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0003 12.2224C22.0003 11.4002 21.9322 10.8002 21.7848 10.178H12.2043V13.8891H17.8278C17.7145 14.8113 17.1023 16.2002 15.7417 17.1335L15.7226 17.2578L18.7518 19.5575L18.9617 19.578C20.8891 17.8336 22.0003 15.2669 22.0003 12.2224Z"
            fill="#4285F4"
          />
          <path
            d="M12.2037 21.9999C14.9588 21.9999 17.2717 21.111 18.9611 19.5776L15.7411 17.1331C14.8794 17.722 13.7229 18.1331 12.2037 18.1331C9.50529 18.1331 7.21505 16.3887 6.39864 13.9775L6.27898 13.9875L3.12918 16.3764L3.08799 16.4887C4.76598 19.7554 8.21272 21.9999 12.2037 21.9999Z"
            fill="#34A853"
          />
          <path
            d="M6.39902 13.9778C6.18361 13.3556 6.05894 12.6889 6.05894 12C6.05894 11.3111 6.18361 10.6444 6.38769 10.0222L6.38198 9.88969L3.19271 7.4624L3.08836 7.51104C2.39678 8.86663 1.99995 10.3889 1.99995 12C1.99995 13.6111 2.39678 15.1333 3.08836 16.4889L6.39902 13.9778Z"
            fill="#FBBC05"
          />
          <path
            d="M12.2037 5.86667C14.1198 5.86667 15.4123 6.67778 16.1493 7.35561L19.0292 4.60002C17.2605 2.9889 14.9588 2 12.2037 2C8.21275 2 4.76599 4.24444 3.08799 7.51111L6.38733 10.0223C7.21507 7.61115 9.50533 5.86667 12.2037 5.86667Z"
            fill="#EB4335"
          />
        </svg>
        Sign In With Google
      </button>

      <button
        // onClick={(e) => signInAnonymous(e)}
        type="submit"
        className="inline-flex w-full mt-4 items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Sign In Anonymous
      </button>
      <button
        // onClick={(e) => sendEmailDeepLink(e)}
        type="submit"
        className="inline-flex w-full mt-4 items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
      >
        Sign In với Email
      </button>
    </form>
  </div>
  )
}

export default Login