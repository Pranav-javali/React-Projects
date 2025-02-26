import React,{useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //two way binding
    const submitHandler = (e) =>
    {
        e.preventDefault()
        //console.log("submit handler")
        console.log("email is", email);
        console.log("password is",password)
        
        setEmail('')
        setPassword('')

    }

  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    //console.log(e.target.value)
                    setEmail(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-400'  type="password" placeholder='Enter your password' />
                <button className='mt-5 text-white outline-none bg-transparent border-2 bg-emerald-600 text-xl py-4 px-5 rounded-full' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login