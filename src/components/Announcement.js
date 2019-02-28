import React, { Component } from 'react';
import '../styles/announcement.css'
import SnackBar from './SnackBar'
import ErrorSnackBar from './ErrorSnackBar'
import DrawSnackBar from './DrawSnackBar';


class Announcement extends Component {
    render() {
        return (
            <div>
            
            <p>{this.props.winner ==='d' ?  <DrawSnackBar/>:""}</p>
            <p>{this.props.winner ==='x' ? <SnackBar/>:""}</p>
            <p>{this.props.winner ==='o' ? <ErrorSnackBar/>:""}</p>
            
            
            </div>
        );
    }
}

export default Announcement;