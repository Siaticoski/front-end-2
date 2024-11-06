import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Meu título</h1>
      <Image className={styles.img} src="/images/star_rail.jpg" alt= "star_rail" width={300} height={300} />
    </div>
  );
}