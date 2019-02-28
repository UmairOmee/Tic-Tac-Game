import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    Width: 30,
  },
  title: {
    fontSize: 65,
  },
  pos: {
    marginBottom: 12,
  },
};


       
class Tile extends Component {
    tileClick = (props) =>{
        
        props.gameLoop(props.loc,props.turn)
}
  render(){
    // const { classes } = this.props;
    
  return (
    <Card className={this.props.card} className="tile" onClick={()=> this.tileClick(this.props)}>
      <CardContent>
        <Typography variant="h3" component="h2">
        <p>{this.props.value}</p>
        </Typography>
      </CardContent>
    </Card>
  );
  }
}

Tile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tile);