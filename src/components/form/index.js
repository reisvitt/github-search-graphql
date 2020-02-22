import React from 'react';
import { TextField, Button} from '@material-ui/core'

import './index.css'


export default class index extends React.Component{
  
  render () {
    return (
      <div className="container_form">

        <TextField color="primary" onChange={this.props.userName} id="input" className="input_text" label="Search username" type="search" variant="outlined" />

        <Button onClick={this.props.handleClick} className="button" variant="outlined" color="primary">Search</Button>
        
      </div>
    );
  }
}