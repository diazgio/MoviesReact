/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';
import PageWrapper from './PageWrapper';
import Pelicula from './pelicula';
import peliculasJson from './peliculas.json';
import Pagination from './pagination';

function App() {

  const [actualPage, setActualPage] = useState(1);
  const TOTAL_POR_PAGINA = 5;
  let peliculas = peliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (actualPage - 1) * TOTAL_POR_PAGINA,
      actualPage * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();
  
  return (
    <PageWrapper>

      {peliculas.map((p) => 
        <Pelicula
          img={p.img}
          title={p.title}
          year={p.year}
          rate={p.rate}
          director={p.director}
          director2={p.director2}
          actor1={p.actor1}
          actor2={p.actor2}
          actor3={p.actor3}
          key={p.title}>
          {p.describe}
        </Pelicula>
      )}
      <Pagination page={actualPage} total={getTotalPaginas()} onChange={(page) => {
        setActualPage(page)
      }}/>

    </PageWrapper>
  );
}

export default App;
