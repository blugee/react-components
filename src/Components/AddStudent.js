import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';

const styles = style => ({
  input: {
    margin: style.spacing.unit,
  },
  button: {
    margin: style.spacing.unit,
  },

});

class AddUsers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
    };
  }

  handleChange(e) {
    this.setState(
      {
        ...this.state,
        [e.target.name]: e.target.value
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(allActions.addStudent(this.state));
    this.setState({
      firstName: '',
      lastName: '',
      country: ''
    });

  }

  render() {
    const { classes, student } = this.props;
    return (
      <div>
        {/* <MenuBar /> */}
        <h1>Add New Users</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextField name="firstName" value={this.state.firstName} label="First Name" className={classes.input} onChange={(e) => this.handleChange(e)} />
          <TextField name="lastName" value={this.state.lastName} label="Last Name" className={classes.input} onChange={(e) => this.handleChange(e)} />
          <TextField name="country" value={this.state.country} label="Country" className={classes.input} onChange={(e) => this.handleChange(e)} />
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add Student
            </Button>
          </div>
        </form>
        <div>
          <h3>Last added student</h3>
          <span>
            <p>{'First Name: ' + student.firstName}</p>
            <p>{'Last Name: ' + student.lastName}</p>
            <p>{'Country: ' + student.country}</p>

          </span>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { student } = state.crudStudent;
  return {
    student
  };
}

export default connect(mapStateToProps)(withStyles(styles)(AddUsers));
