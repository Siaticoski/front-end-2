"use client"
import Link from "next/link"
import styles from "./Header.module.css"
import Image from "next/image"
import { useState } from "react"

export default function header() {     

    function menuShow() {
        let ul = document.querySelector('.nav ul')
        
        if (ul.classList.contains("open")){
            ul.classList.remove("open");
        } else {
            ul.classList.add("open");
        }
    }

    const [links, setlinks] = useState(true);

    
    return (

        <header className={styles.cor}>
            <nav className={styles.nav}>

                <button className={styles.butao} onClick={()=>setlinks(!links)}>Image</button>          

                    {links && (
                        <ul className={styles.lista}>

                            
                            <Image src="/images/pompom.png" alt="sim" width={60} height={60} />

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
                    )}

               

            </nav>

        </header>
    )
    
    
}
/*
 const butao = document.getElementById('butao');
    const menu = document.getElementById('menu');
    butao.forEach(butao => {
        butao.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });

*/