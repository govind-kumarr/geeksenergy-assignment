import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginSuccessFull } from "../redux/movies.slice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let data = new FormData(form);
    data = Object.fromEntries(data);
    if (!data.name || !data.password) return alert("Please Fill All Fields");
    form.reset();

    const signUpData = JSON.parse(localStorage.getItem("signupData"));
    if (data.name == signUpData.name && data.password == signUpData.password) {
      alert("Login Successful");
      navigate("/");
      dispatch(loginSuccessFull({ username: data.name }));
    } else return alert("Invalid Credentials");
  };

  return (
    <LoginPage>
      <section className="login_form">
        <h1>Login form</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formfield">
            <label htmlFor="name">name</label>
            <input name="name" type="text" />
          </div>
          <div className="formfield">
            <label htmlFor="password">password</label>
            <input name="password" type="password" />
          </div>
          <button className="btn login" type="submit">
            login
          </button>
        </form>
      </section>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  .login_form {
    max-width: 1200px;
    background: var(--fourth-color);
    padding: 1rem 1rem;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;

    font-size: 20px;
  }

  .login_form > h1 {
    text-align: center;
    text-transform: uppercase;
    color: black;
  }

  .form {
    width: 900px;
    padding: 1rem 1rem;
    margin: auto;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-transform: capitalize;
  }

  .btn {
    background: var(--first-color);
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }
  .login {
    margin: 1rem;
  }
  .formfield {
    display: flex;
    justify-content: space-between;
    width: 500px;
    label {
      color: black;
      font-weight: bolder;
    }
    input,
    select {
      width: 50%;
      padding: 5px 1rem;
      font-size: 18px;
    }
    select {
      cursor: pointer;
      text-transform: capitalize;
    }
  }

  @media (max-width: 760px) {
    .login_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
  @media (max-width: 460px) {
    .login_form {
      width: 100vw;
      align-items: center;
    }
    .form {
      width: 100%;
    }
    .formfield {
      flex-direction: column;
      width: 90%;
      input,
      select {
        width: 100%;
      }
    }
  }
`;
