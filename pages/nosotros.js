import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Morbi elementum ante vitae condimentum posuere. Donec a
              scelerisque neque. Donec tincidunt nunc velit. Phasellus et congue
              dui. Nam nec eros neque. Vestibulum sollicitudin sodales tortor id
              condimentum. Aliquam at faucibus dui, nec lacinia nibh. Aliquam
              mollis sagittis nisi eget ultrices. Aliquam felis augue, blandit
              non nisl quis, efficitur malesuada augue. Vivamus tempor nunc
              ipsum, sit amet luctus nisi congue et. Suspendisse potenti.
            </p>
            <p>
              Pellentesque hendrerit quis ligula in volutpat. Nam eleifend
              libero blandit, dapibus nulla semper, sagittis libero. Donec sit
              amet tempus metus. Praesent elementum blandit justo, ac hendrerit
              lorem placerat nec. Proin lobortis molestie ipsum sit amet
              posuere. Mauris blandit ante ac quam facilisis, sit amet volutpat
              nibh accumsan.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
