import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"

export default function header (){
    return(
        <header className={styles.cor}>
            <nav className={styles.nav}>

                <ul className={styles.lista}>
                    <li className={styles.links}>
                        <Link className={styles.a} href='/'>Home</Link>
                    </li>
                    <li className={styles.links}>
                        <Link className={styles.a} href="/star_rail">star rail</Link>
                    </li>
                </ul>


                <ul className={styles.img2}>
                    <p>
                        <Image src="/images/star_rail.jpg" alt="sim" width={80} height={80} />
                    </p>
                </ul>
                
                

            </nav>
        </header>
    )
}