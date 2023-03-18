import Layout from "../../components/layout";
import Image from "next/future/image";
import { formatearFecha } from "../../utilidades/helpers";
import styles from "../../styles/blog.module.css";

export default function Post({ post }) {
  const { imagen, titulo, contenido, publishedAt } = post[0].attributes;
  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`imagen blog ${titulo}`}
          width={1000}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `http://localhost:1337/api/posts?filters[url][$eq]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();

  return {
    props: { post },
  };
}
