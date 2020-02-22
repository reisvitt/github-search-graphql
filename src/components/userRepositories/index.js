import React from 'react'
import star from '../../images/star_icon.png'
import fork from '../../images/fork_icon.png'
import { Button} from '@material-ui/core'
import './index.css'


export default class index extends React.Component{
  
  render(){
    return (
      <div className="container_repo">
        <span>{this.props.repos.name}</span>

        <div> 
          <img className="image_repo" src={fork} alt="fork_icon"/>
          <span>{this.props.repos.forks}</span>
        </div>

        <span>{this.props.repos.language}</span>

        <div> 
          <img className="image_repo" src={star} alt="star_icon"/>
          <span>{this.props.repos.stargazers_count}</span>
        </div>

        <Button href={this.props.repos.html_url} color="primary" variant="outlined">Go to GitHub</Button>

      </div>
    );
  }
}