"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function header() {
    const [links, setlinks] = useState(true);
    return (
        <header className={`${styles.cor} ${links ? styles.expanded : styles.collapsed}`}>
            <button className={styles.butao} onClick={() => setLinks(!links)}>
                <Image src="/images/menu.png" alt="sim" width={70} height={70} />
            </button>

        <header className={styles.cor}>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <Image src="/images/pompom.png" alt="sim" width={60} height={60} />

                    {links && (
                        <ul className={styles.lista}>
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


                </ul>

            </nav>
        </header>
    )
}