import React,{useState} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import './ListEntreprise.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';  


import {fetchCollaborateur} from '../actions/CollaborateurAction';

class ListCollaborateurComponent extends React.Component{
    
    componentDidMount(){
        const p = this.props;
        p.fetchCollaborateur()
        
     }
     constructor(props){
        super(props);

        this.state={

            anciennete : "" ,
            formation :"",
            grade:"",
            name:"",
            salaire:"",
        }    
        
    }
    render(){
        
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14, 
            },
          }));
          
          const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));
          const{collaborateurs}=this.props;
          const collaborateur ={

            name:this.state.name,
            grade:this.state.grade,
            formation:this.state.formation,
            salaire:this.state.salaire,
            anciennete:this.state.anciennete,
        }
           
        return (
            <MuiThemeProvider>
                 <div className="wrapper">
                 <div className="form-wrapper2">
            <h1 className="titre">Liste des collaborateurs</h1>
                <br/>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Nom du collaborateur</StyledTableCell>
            
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Formation</StyledTableCell>
            <StyledTableCell align="center">Salaire</StyledTableCell>
            <StyledTableCell align="center">anciennete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collaborateurs ? collaborateurs.map((collaborateur) => (
              
            <StyledTableRow key={collaborateur.name}>
              <StyledTableCell component="th" scope="row">
                {collaborateur.name}
              </StyledTableCell>
              <StyledTableCell align="center">{collaborateur.grade}</StyledTableCell>
              <StyledTableCell align="center">{collaborateur.formation}</StyledTableCell>
              <StyledTableCell align="center">{collaborateur.salaire}</StyledTableCell>
              <StyledTableCell align="center">{collaborateur.anciennete}</StyledTableCell>
            </StyledTableRow>
          )):''}
        </TableBody>
      </Table>
    </TableContainer>
                 </div>
                 </div>
            </MuiThemeProvider>
            );
        
    }
    

}

ListCollaborateurComponent.propTypes = {
        collaborateurs: PropTypes.array.isRequired,
        fetchCollaborateur : PropTypes.array.isRequired,
       
    }
    const mapStateToProps = state => {
        return {
            collaborateurs : state.collaborateur.collaborateurs
        }
    };
export default connect(mapStateToProps, { fetchCollaborateur })(ListCollaborateurComponent)