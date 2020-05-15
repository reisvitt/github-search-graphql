import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Repos from "../../components/UserRepos";
import UserData from "../../components/UserData";
import Description from "../../components/Description";
import github from "../../images/github_logo_icon.png";
import api from "../../services/api";
import "./index.css";
import axios from "axios";

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    setLoading(true);

    axios
      .all([api.get(`${username}`), api.get(`${username}/repos`)])
      .then(
        axios.spread((user, repositories) => {
          setUserData(user.data);

          const ordenados = sort(repositories);
          const onlyfour = ordenados.splice(0, 4);
          setUserRepos(onlyfour);
          setLoading(false);
        })
      )
      .catch((error) => {
        setLoading(false);
        setErrorMessage(error.response.data.message);
        console.log(error);
      });
  }

  // ordena o array de acordo com o numero de forks e stars
  function sort(repos) {
    const sortedData = repos.data.sort(
      (b, a) => a.forks + a.stargazers_count - (b.forks + b.stargazers_count)
    );
    return sortedData;
  }

  function isEnter(e) {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  function getUserName(e) {
    setUsername(e.target.value);

    // se nao tiver nenhuma letra na pesquisa, fecha-se o profile
    if (e.target.value === "") {
      setUserData([]);
      setErrorMessage("");
    }
  }

  return (
    <div className="Home">
      <Header />
      <Form
        username={getUserName}
        handleClick={handleSearch}
        keyPressed={isEnter}
        errorMessage={errorMessage}
      />
      {loading ? (
        <CircularProgress style={{ margin: 20 }} />
      ) : userData.length !== 0 ? (
        <div className="data">
          <UserData profile={userData} />
          <div className="data_container">
            <div className="repos_container">
              {userRepos.map((repo) => (
                <Repos repo={repo} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Description />
      )}

      <span className="created">
        By Vitor Reis -{" "}
        <img className="github_icon" alt="github_logo" src={github} />
        <strong>/reisvitt</strong>
      </span>
    </div>
  );
};

export default Home;
