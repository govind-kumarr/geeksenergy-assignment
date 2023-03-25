import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { response } from "../pages/fetch";
import { logout } from "../redux/movies.slice";
import { MovieCard } from "./MovieCard";

let popup;
export const MoviesList = () => {
  const [movies, setMovies] = useState(response.result);
  const dispatch = useDispatch();
  const { isLoading, isError, username } = useSelector((state) => state.movies);

  useEffect(() => {
    popup = document.querySelector(".popup");
  }, []);

  return (
    <MoviesSection>
      <div className="section_movies_header">
        <h3> All Movies</h3>
        <button
          className="btn info"
          onClick={() => popup.classList.toggle("showpopup")}
        >
          Company Info
        </button>
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
      <div className="popup">
        <div>
          <span>
            <b>Company: </b>
          </span>
          Geeksynergy Technologies Pvt Ltd
        </div>
        <div>
          <span>
            <b>Address: </b>
          </span>
          Sanjayanagar, Bengaluru-56
        </div>
        <div>
          <span>
            <b>Email: </b>
          </span>
          XXXXXX@gmail.com
        </div>
        <div>
          <span>
            <b>Phone: </b>
          </span>
          XXXXXXXXX09
        </div>
        <p
          className="btn info"
          onClick={() => popup.classList.toggle("showpopup")}
        >
          close
        </p>
      </div>
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    .info {
      background: var(--second-color);
      border-radius: 5px;
      font-size: large;
      text-transform: uppercase;
    }
    /* border: 1px solid black; */

    position: relative;
    .login {
      background: #0081c9;
      border-radius: 5px;
      font-size: large;
      text-transform: uppercase;

      /* position: absolute;
      top: 0;
      right: 0; */
    }
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }
  .popup {
    position: fixed;
    top: -30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--first-color);
    padding: 1rem;
    color: white;
    font-size: 20px;
    transition: 0.3s all ease-in-out;
  }
  .showpopup {
    top: 30%;
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
