"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'

const About = () =>{

    const router = useRouter();

    return(
        <div>
            <h1>About Us</h1>
            <Link href={'/'}>Go to Home page using linking</Link> 
            <br/>
            <br/>
            <button onClick={()=>router.push("/")}>Go to Home page using navigation</button>
        </div>
    )
}
export default About;