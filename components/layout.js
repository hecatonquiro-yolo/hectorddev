import Head from 'next/head'

import styles from './layout.module.css'

export const siteTitle = 'hectorddev'


export default function Layout({children}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/> 
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
                <meta 
                    name="description"
                    content="Portfolio Hector Marquez"
                />
                <meta 
                    property="og:image"
                    content={siteTitle}
                />
            </Head>
            <nav id="site-nav" role="navigation" className={styles.nav}>
                <ul className="menu">
                    <li>
                        <a href="#home" className={styles.menu_item}>Home</a>
                    </li>
                    <li>
                        <a href="#projects" className={styles.menu_item}> 
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={styles.menu_item}>About</a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.menu_item}>Contact</a>
                    </li>
                </ul>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>Derechos reservados</p>
                <p>Hector M</p>
            </footer>
        </div>
    )
    
}