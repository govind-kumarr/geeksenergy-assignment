import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { response } from "../pages/fetch";
import { logout } from "../redux/movies.slice";
import { MovieCard } from "./MovieCard";

export const MoviesList = () => {
  const [movies, setMovies] = useState(response.result);
  const dispatch = useDispatch();
  const { isLoading, isError, username } = useSelector((state) => state.movies);

  return (
    <MoviesSection>
      <div className="section_movies_header">
        All Movies{" "}
        <button className="btn login" onClick={() => dispatch(logout())}>
          logout
        </button>
      </div>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard key={movie._id} data={movie} />
          ))}
        </div>
      )}
    </MoviesSection>
  );
};

const MoviesSection = styled.section`
  /* width: 100%; */
  /* border: 1px solid black; */
  margin: 1rem 0rem;

  .section_movies_header {
    margin: auto;
    text-align: center;
    color: #0081c9;
    font-weight: bold;
    font-size: 30px;

    /* border: 1px solid black; */

    position: relative;
    .login {
      background: #0081c9;
      border-radius: 5px;
      font-size: large;
      text-transform: uppercase;

      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 760px) {
    .movies {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 460px) {
    .movies {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
