"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Header() {     
    const [links, setLinks] = useState(false);

    return (
       <header className={`${styles.cor} ${links ? styles.expanded : styles.collapsed}`}>
            <button className={styles.butao} onClick={() => setLinks(!links)}>
                <Image src="/images/menu.png" alt="sim" width={70} height={70} />
            </button>

            <nav className={`${styles.nav} ${links ? styles.show : styles.hide}`}>
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
                    <li>
                        <Link className={styles.a} href="/listas">Listas</Link>
                    </li>
                    <li>
                        <Link className={styles.a} href="/props">Props</Link>
                    </li>
                    <li>
                        <Link className={styles.a} href="/filtro">Filtro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}