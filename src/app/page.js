import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name='dinesh'/>
      <User name='Peter'/>
    </main>
  )
}

const User=(props)=>{
  return(
    <div>
      <h2>USer name is {props.name}</h2>
    </div>
  )
}