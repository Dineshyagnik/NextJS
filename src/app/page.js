"use client"

// import { useRouter } from 'next/router'; //wrong way
import styles from './page.module.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function Home() {

  const router = useRouter();

  const navigate=(name)=>{
    router.push(name)
  }

  return (
    <main className={styles.main}>
      {/* <h1>Basic Routing | Home Page</h1> */}
      {/* <h1>Fetch Data with API in Client Component | Home Page</h1> */}

      <h1>Fetch Data with API in Server Component | Home Page</h1>

      {/* <Link href={'/productlist'}>Go to Product Page</Link> */}
      {/* <p>API using Client Component</p> */}

      <Link href={'/prodcts'}>Go to Product Page</Link>
      <p>API using Server Component</p>

      {/* <User name='dinesh'/> */}
      {/* <User name='Peter'/> */}
      
      <Link href={'/login'}>Go to Login Page</Link>
      <Link href={'/about'}>Go to About Page</Link>

      <button onClick={()=>navigate("/login")}>Go to Login Page</button>
      <br/>
      <button onClick={()=>navigate("/about")}>Go to About Page</button>
    </main>
  )
}

// const User=(props)=>{
//   return(
//     <div>
//       <h2>User name is {props.name}</h2>
//     </div>
//   )
// }