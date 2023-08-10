import Link from "next/link";
import './about.css'

export default function Layout({ children }) {
    return (
        <div>
            <ul className="nav-bar">
                <li><h4>About Navbar</h4></li>
                <li>
                    <Link href={'/about'}>Main about</Link>
                </li>
                <li>
                    <Link href={'/about/aboutcollege'}>About College</Link>
                </li>
                <li>
                    <Link href={'/about/aboutstudent'}>About Student</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}