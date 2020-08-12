import Link from 'next/link'
import styles from './topbar.module.css'

export default function Topbar() {
    return (
        <div className={styles.topbar}>
            <img src="/logo.png" className={styles.logo} />
            <nav className={styles.navigation}>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </nav>
        </div>
    )
}