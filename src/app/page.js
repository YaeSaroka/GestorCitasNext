import Image from "next/image";
import styles from "./styles/page.module.css"
import BUTON from "./componente/button/index.jsx"



export default function Home() {
  var direcciones = ["Nosotras", "Contacto", "Reservas"]
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
      {direcciones.map((direccion, index) => (
        <>
        <BUTON key={index} direccion={direccion} />
        </>
      ))}
        
       
      </div>
    </main>
  );
}
