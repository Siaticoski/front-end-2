"use client"
import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"
import { useState } from "react"

export default function header() {     

    const [links, setlinks] = useState(true);

    
    return (

        <header className={styles.cor}>

        <button className={styles.butao} onClick={()=>setlinks(!links)}><Image src="/images/menu.png" alt="sim" width={70} height={70}/></button>

            {links && (
                <nav className={styles.nav}>

                          

                
                    <ul className={styles.lista}>

                        
                        <Image className={styles.img} src="/images/pompom.png" alt="sim" width={60} height={60} />

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
            )}
            

        </header>
    )
    
    
}