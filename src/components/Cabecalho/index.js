import { Link } from "react-router-dom"
import logo from "./logo.png"
import styles from "./Cabecalho.module.css"

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link>
            <img src={logo} alt="Logo do CineTag" />
            </Link>
            <nav>
                <Cabecalho url="./">
                    Home
                </Cabecalho>
                <Cabecalho url="./favoritos">
                    Favoritos
                </Cabecalho>
            </nav>
        </header>
        
    )
}

export default Cabecalho