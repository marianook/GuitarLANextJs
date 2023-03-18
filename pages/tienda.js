import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  return (
    <Layout
      title={"Tienda Virtual"}
      description={"Tienda virtual, venta de guitarras, instrumentos, GuitarLA"}
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>

        <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

/* Consultar APIS con ServerSideProps 

* Si utilizamos esta forma y ya está funcionando el sitio en un servidor
y se elimina una guitarra o se le cambia el precio, no es necesario hacer
otro build, cuando otro user visite la página se reflejarán los cambios
y visualizará la información actualizada (información dinámica)

*/

// export async function getServerSideProps() {
//   const respuesta = await fetch(
//     `http://localhost:1337/api/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();

//   // Siempre debe retornar props
//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

export async function getStaticProps() {
  const respuesta = await fetch(
    `http://localhost:1337/api/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  // Siempre debe retornar props
  return {
    props: {
      guitarras,
    },
  };
}
