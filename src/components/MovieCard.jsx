import { useState } from "react";
import styled from "styled-components";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

export const MovieCard = ({ data }) => {
  const { title, poster, totalVoted, pageViews, genre, director, stars } = data;
  const [votes, setVotes] = useState(totalVoted);
  return (
    <MovieDiv>
      <div className="upper__section">
        <div className="votes_section">
          <BiUpArrow
            className="icon"
            onClick={() => {
              setVotes((prev) => prev + 1);
            }}
          />
          {votes}
          <BiDownArrow
            className="icon down-arrow"
            onClick={() => {
              setVotes((prev) => prev - 1);
            }}
          />
          votes
        </div>
        <div className="poster_section">
          <img src={poster} alt="" />
        </div>
        <div className="movie_details">
          <h1>{title}</h1>
          <p>
            <span className="key">Genre{" : "}</span>
            {genre
              .split(",")
              .map((genre, index, arr) =>
                index != arr.length - 1 ? `${genre} | ` : `${genre}`
              )}
          </p>
          <p>
            <span className="key">Director{" : "}</span>
            {director.map((director, index, arr) =>
              index != arr.length - 1 ? `${director} | ` : `${director}`
            )}
          </p>
          <div>
            <span className="key">Staring{" : "}</span>
            {stars[0]
              .split(",")
              .map((stars, index, arr) =>
                index != arr.length - 1 ? `${stars} | ` : `${stars}`
              )}
          </div>
          <p>
            {pageViews} views voted by {votes} people
          </p>
          <p></p>
        </div>
      </div>
      <div className="lower__section">
        <button className="watch_trailer_btn btn">watch trailer</button>
      </div>
    </MovieDiv>
  );
};

const MovieDiv = styled.div`
  /* border: 3px solid grey; */
  background-color: lightgrey;
  border-radius: 5px;
  color: black;
  padding: 1rem;
  .upper__section {
    display: flex;
    gap: 5px;
  }
  .votes_section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  .movie_details {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .poster_section > img {
    width: 150px;
    border-radius: 10px;
  }
  .lower__section {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .watch_trailer_btn {
    background: #0081c9;
    width: 90%;
    border-radius: 5px;
    font-size: large;
    text-transform: uppercase;
  }
  .key {
    font-weight: bolder;
  }
  .icon {
    cursor: pointer;
    color: #0081c9;
  }
  .down-arrow {
    color: red;
  }
  @media (max-width: 760px) {
    .upper__section {
      flex-direction: column;
    }
    .votes_section {
      order: 1;
      flex-direction: row;
    }
  }
  @media (max-width: 460px) {
    .upper__section {
      flex-direction: column;
    }
    .votes_section {
      order: 1;
      flex-direction: row;
    }
  }
`;
