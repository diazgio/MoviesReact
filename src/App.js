/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './pelicula';
import peliculasJsom from './peliculas.json';
import Pagination from './pagination';

function App() {
  let peliculas = peliculasJsom;
  
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
          actor3={p.actor3}>
          {p.describe}
        </Pelicula>
      )}
      <Pagination page={2} total={4} onChange={(page) => {

      }}/>

    </PageWrapper>
  );
}

export default App;
