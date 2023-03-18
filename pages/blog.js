import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css";

export default function Blog({ posts }) {
  return (
    <Layout
      title={"Blog"}
      description={"Blog de música, venta de guitarras, consejos, GuitarLA"}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const respuesta = await fetch(
    `http://localhost:1337/api/posts?populate=imagen`
  );
  const { data: posts } = await respuesta.json();

  // Siempre debe retornar props
  return {
    props: {
      posts,
    },
  };
}
