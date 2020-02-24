import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';
// import ReactTable from 'react-table-6';
import  Table  from 'react-bootstrap/Table';

const styles = theme => ({
  tableContainer: {
    width: '75%',
    margin: 'auto',
    
    
  }
});

class ViewPlayers extends React.Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(allActions.viewStudents());
  }

  render() {
    const { students } = this.props;
   
    return (
      <div>
        {/* <MenuBar/> */}
        <h1>All Users</h1>
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {students.map(( student, index ) => {
                return (
                  <tr key={index}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
         
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { students } = state.viewStudents;
    return {
        students
    };
}

export default connect(mapStateToProps)(withStyles(styles)(ViewPlayers));
