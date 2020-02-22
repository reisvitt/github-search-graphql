import React from 'react';
import Header from '../header/'
import Form from '../form/'
import Repos from '../userRepositories/'
import UserData from '../userData/'
import Description from '../description/'
import './index.css'
import github from '../../images/github_logo_icon.png'

const axios = require('axios')

require('dotenv/config');


export default class index extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      userName: '',
      baseUrl: "http://api.github.com/users/",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      userData: [],
      userRepos: []
    }
  }

  getProfile(username){

    axios.get(`${this.state.baseUrl}${username}?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`)
      .then((userResponse => {
        this.setState({userData: userResponse.data})
      }))
      .catch(err => {
        this.setState({userData: []})
        console.log(err)
      });

    axios.get(`${this.state.baseUrl}${username}/repos?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`)
      .then((reposResponse => {
        const ordenados = this.sort(reposResponse)
        const onlyfour = ordenados.splice(0,4)
        this.setState({userRepos: onlyfour})
      }))
      .catch(err => {
        this.setState({userRepos: []})
        console.log(err)
      });

      /*axios.post(`${this.state.baseUrl}${username}`,
        this.params = {
          client_id: `${this.state.user}`,
          client_secret: `${this.state.password}`,
          grant_type: "client_credentials"
      })
    .then((res) => {
      axios.post(`${this.state.baseUrl}${username}/repos`,
        this.params = {
          client_id: `${this.state.user}`,
          client_secret: `${this.state.password}`,
          grant_type: "client_credentials"
        })  
        .then((repos) => {
            let ordenados = this.sort(repos)
            ordenados = ordenados.splice(0,4)

            this.setState({userRepos: ordenados})
            this.setState({userData: res.data})
          })
    })*/
  }
  
  // ordena o array de acordo com o numero de forks e stars
  sort(repos){
    const sortedData = repos.data.sort(
      (b, a) => a.forks + a.stargazers_count - (b.forks + b.stargazers_count),
    );
  
    return sortedData
  }

  search = () => {
    this.getProfile(this.state.userName)
  }

  getUserName = (e) => {
    this.setState({userName: e.target.value})
    
    // se nao tiver nenhuma letra na pesquisa, fecha-se o profile
    if(e.target.value === ''){
      this.setState({userData: []})
    }
  }

  render (){
    const { userData, userRepos } = this.state

    return (
      <div className="Home">
        <Header />
        <Form userName={this.getUserName} handleClick={this.search} />
        {userData.length !== 0 ? 
        
          ( <div className="data"> 
            <UserData profile={this.state.userData}/> 
            <div className="data_container">
                <div className="repos_container">
                  {userRepos.map(repo => <Repos repos={repo} />)}
                </div>
              </div>
          </div>)

          : <Description />}

        <span className="created">By Vitor Reis - <img className="github_icon" alt="github_logo" src={github}/><strong>/reisvitt</strong></span>
      </div>
    );
  }
}