import React from 'react';
import './index.css'

export default class index extends React.Component{
  render () {
    return (
      <div className="container_user_data">
        <img className="profile_pic" src={this.props.profile.avatar_url} alt="profile_pic" />
        
        <div className="description">
          <span><strong>Name:</strong> {this.props.profile.name}</span>
          <span><strong>Bio:</strong> {this.props.profile.bio}</span>
          <span><strong>Followers:</strong> {this.props.profile.followers}</span>
          <span><strong>Following:</strong> {this.props.profile.following}</span>
          <span><strong>Repositories:</strong> {this.props.profile.public_repos}</span>
        </div>
      </div>
    );
  }
}