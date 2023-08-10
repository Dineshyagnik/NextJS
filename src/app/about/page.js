"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'

const About = () =>{

    const router = useRouter();

    return(
        <div>
            <h1 className="heading">About Us</h1>
            <Link href={'/'}>Go to Home page using linking</Link> 
            <br/>
            <br/>
            {/* <button onClick={()=>router.push("/")}>Go to Home page using navigation</button> */}
            <Link href={'/about/aboutstudent'}>Go to About Student page</Link>
            <br/>
            <Link href={'/about/aboutcollege'}>Go to About College page</Link>
        </div>
    )
}
export default About;