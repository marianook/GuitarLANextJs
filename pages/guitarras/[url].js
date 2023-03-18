import { useState } from "react";
import Image from "next/future/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no válida");
      return;
    }

    // Construir un objeto con la guitarra seleccionada para almacenarla en localstorage
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
    alert(`Se agregó al carrito la guitarra ${nombre}`);
  };
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          width={600}
          height={400}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              onChange={(e) => setCantidad(Number(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `http://localhost:1337/api/guitarras?filters[url][$eq]=${url}&populate=imagen`
//   );
//   const { data: guitarraSeleccionada } = await respuesta.json();
//   console.log(guitarraSeleccionada);

//   return {
//     props: { guitarraSeleccionada },
//   };
// }

export async function getStaticPaths() {
  const respuesta = await fetch(`http://localhost:1337/api/guitarras`);
  const { data } = await respuesta.json();
  console.log(data);

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `http://localhost:1337/api/guitarras?filters[url][$eq]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  console.log(guitarra);

  return {
    props: { guitarra },
  };
}
