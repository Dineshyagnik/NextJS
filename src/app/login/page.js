"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';


const Login = () => {

    const router = useRouter();

    const navigate=(path)=>{
        router.push(path)
    }

    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <Link href={'/'}>Go to Home page</Link>
            <br />
            <button onClick={() => navigate('/about')}>Go to About Page</button>
            <br/>
            <button onClick={()=>navigate('/login/studentlogin')}>Student Login</button>
            <br/>
            <button onClick={()=>navigate('/login/teacherlogin')}>Teacher Login</button>
           
            
        </div>
    )
}

export default Login;