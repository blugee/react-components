import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';


const styles = {
  menuItem: {
    marginRight: 100,
    color: '#fff',
    textDecoration: 'none'
  },
};

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Link className={classes.menuItem} to="/">Home</Link>
            <Link className={classes.menuItem} to="/add-users">Add Data</Link>
            <Link className={classes.menuItem} to="/view-users">View Users</Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



export default withStyles(styles)(MenuBar);
