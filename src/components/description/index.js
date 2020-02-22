import React from 'react';
import octocat from '../../images/Octocat.png'
import code from '../../images/code.png'

import './index.css'

export default class index extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text1: 'Search app that uses GitHub API to retrieve user information when a valid username is input. It display avatar, username, followers count, repository count, top 4 repositories based on forks and stars.',
      text2: ''
    }
  }

  render () {
    return (
      <div className="container_explanation">
        <img className="pic_1" src={octocat} alt="octocat_img"/>

        <div className="intern_container_explanation">
          <span className="span_text">{this.state.text1}</span>
          <img className="pic_2" src={code} alt="code_img"/>
          <span className="span_text"></span>

        </div>
        
      </div>

    );
  }
}