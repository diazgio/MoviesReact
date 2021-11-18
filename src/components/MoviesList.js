/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/App.css';
import { useState } from 'react';
import PageWrapper from './PageWrapper';
import Movie from './movie';
import moviesJson from '../json/movies.json';
import Pagination from './pagination';

function MoviesList() {

  const [actualPage, setActualPage] = useState(1);
  const TOTAL_PER_PAGE = 5;
  let movies = moviesJson;

  const loadMovies = () => {
    movies = movies.slice(
      (actualPage - 1) * TOTAL_PER_PAGE,
      actualPage * TOTAL_PER_PAGE
    );
  }

  const getTotalPages = () => {
    let totalMovies = moviesJson.length;
    return Math.ceil(totalMovies / TOTAL_PER_PAGE);
  }

  loadMovies();
  
  return (
    <PageWrapper>

      {movies.map((p) => 
        <Movie
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
        </Movie>
      )}
      <Pagination page={actualPage} total={getTotalPages()} onChange={(page) => {
        setActualPage(page)
      }}/>

    </PageWrapper>
  );
}

export default MoviesList;
