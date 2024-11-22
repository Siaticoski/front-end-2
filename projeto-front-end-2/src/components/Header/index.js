import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"

export default function header (){
    return(
        <header className={styles.cor}>
            <nav className={styles.nav}>

                <ul className={styles.lista}>
                    <Image src="/images/" alt="sim" width={80} height={80} />
                    <li className={styles.links}>
                        <Link className={styles.a} href='/'>Home</Link>
                    </li>
                    <li className={styles.links}>
                        <Link className={styles.a} href="/star_rail">Star Rail</Link>
                    </li>
                    <li>
                        <Link className={styles.a} href="/reliquia">Relíquia</Link>
                    </li>
                </ul>

                
                

            </nav>
        </header>
    )
}