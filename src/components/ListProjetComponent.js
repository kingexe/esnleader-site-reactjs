import React,{useState} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {fetchProjet} from '../actions/ProjetAction';
import './ListEntreprise.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';  

class ListProjetComponent extends React.Component{
    
    componentDidMount(){
        const p = this.props;
        p.fetchProjet()
        
     }
     constructor(props){
        super(props);

        this.state={
            nomFiliale :"",
            client :"",
            description : "" ,
            duree :"",
            nom_projet:"",
            type_projet:"",
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
          const{projets}=this.props;
          const projet ={

            nomFiliale :this.state.nomFiliale,
            client :this.state.client,
            description : this.state.description,
            duree :this.state.duree,
            nom_projet:this.state.nom_projet,
            type_projet:this.state.type_projet,
            
        }
           
        return (
            <MuiThemeProvider>
                 <div className="wrapper">
                 <div className="form-wrapper2">
            <h1 className="titre">Listes des projets en cours</h1>
                <br/>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client du projet</StyledTableCell>
            <StyledTableCell align="center">Description du projet</StyledTableCell>
            <StyledTableCell align="center">Durée du projet</StyledTableCell>
            <StyledTableCell align="center">Nom du projet</StyledTableCell>
            <StyledTableCell align="center">Type du projet</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projets ? projets.map((projet) => (
              
            <StyledTableRow key={projet.nom_projet}>
              <StyledTableCell component="th" scope="row">
              {projet.client}
              </StyledTableCell>
            
              <StyledTableCell align="center">{projet.description}</StyledTableCell>
              <StyledTableCell align="center">{projet.duree}</StyledTableCell>
              <StyledTableCell align="center">{projet.nom_projet}</StyledTableCell>
              <StyledTableCell align="center">{projet.type_projet}</StyledTableCell>
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

ListProjetComponent.propTypes = {
         projets: PropTypes.array.isRequired,
         fetchProjet : PropTypes.array.isRequired,
       
    }
    const mapStateToProps = state => {
        return {
          projets : state.projet.projets
        }
    };
export default connect(mapStateToProps, { fetchProjet })(ListProjetComponent)