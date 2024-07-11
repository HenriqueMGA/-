import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import styles from "./Favoritos.module.css"
import { useFavoritoContext } from "../../contexts/Favoritos"
import Card from "../../components/Card"

function Favoritos() {
    const { favorito } = useFavoritoContext()
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                Meus Favoritos
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>

        </>
    )
}

export default Favoritos