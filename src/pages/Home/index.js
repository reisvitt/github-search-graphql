import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Repos from "../../components/UserRepos";
import UserData from "../../components/UserData";
import Description from "../../components/Description";
import github from "../../images/github_logo_icon.png";

import "./index.css";

import { useLazyQuery } from "@apollo/react-hooks";

// QUERYS
import { GET_USER } from "../../services/graphql/Query";

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState();
  const [userRepos, setUserRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [fullUsername, setFullUsername] = useState("");

  const [searchUser, { called, loading, data, error }] = useLazyQuery(
    GET_USER,
    {
      variables: { login: fullUsername },
    }
  );

  function handleSearch() {
    setFullUsername(username);
    searchUser();
  }

  useEffect(() => {
    if (called && !loading && data) {
      //define user
      const user = {
        avatar_url: data.user.avatarUrl,
        name: data.user.name,
        bio: data.user.bio || "",
        followers: data.user.followers.totalCount,
        following: data.user.following.totalCount,
        public_repos: data.user.repositories.totalCount,
      };

      //define repositories
      const Allrepos = [];
      data.user.repositories.nodes.map((repo) =>
        Allrepos.push({
          name: repo.name,
          id: repo.id,
          language: repo.primaryLanguage ? repo.primaryLanguage.name : "",
          html_url: repo.url,
          stargazers_count: repo.stargazers.totalCount,
          forks: repo.forkCount,
        })
      );

      const repos = sort(Allrepos);
      setUserData(user);
      setUserRepos(repos);
    }
  }, [data, called]);

  useEffect(() => {
    if (error) {
      setUserData();
      setUserRepos([]);
      setErrorMessage(error.message);
    }
  }, [error]);

  // ordena o array de acordo com o numero de forks e stars
  function sort(repos, quantity = 5) {
    const sortedData = repos.sort(
      (b, a) => a.forks + a.stargazers_count - (b.forks + b.stargazers_count)
    );
    const firstFive = sortedData.splice(0, quantity);
    return firstFive;
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
      setUserData();
      setUserRepos([]);
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

      {userData && userRepos.length > 0 && (
        <div className="data">
          <UserData profile={userData} />
          <div className="data_container">
            <div className="repos_container">
              {userRepos.map((repo) => (
                <Repos key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      )}
      <CircularProgress
        style={{
          margin: 10,
          opacity: called && loading ? "1" : "0",
        }}
      />
      {!userData && <Description />}
      <span className="created">
        By Vitor Reis -{" "}
        <img className="github_icon" alt="github_logo" src={github} />
        <strong>/reisvitt</strong>
      </span>
    </div>
  );
};

export default Home;
