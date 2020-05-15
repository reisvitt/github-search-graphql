import React from "react";
import { Container } from "reactstrap";
import "./index.css";

const UserData = ({ profile }) => {
  return (
    <Container>
      <div className="center">
        <img
          className="profile_pic"
          src={profile.avatar_url}
          alt="profile_pic"
        />
      </div>

      <div className="description">
        <span>
          <strong>Name:</strong> {profile.name}
        </span>
        <span>
          <strong>Bio:</strong> {profile.bio}
        </span>
        <span>
          <strong>Followers:</strong> {profile.followers}
        </span>
        <span>
          <strong>Following:</strong> {profile.following}
        </span>
        <span>
          <strong>Repositories:</strong> {profile.public_repos}
        </span>
      </div>
    </Container>
  );
};

export default UserData;
