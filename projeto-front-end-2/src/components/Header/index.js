import Link from "next/link"
import styles from "./Header.module.css"

export default function header (){
    return(
        <header>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href="/star_rail">star rail</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}