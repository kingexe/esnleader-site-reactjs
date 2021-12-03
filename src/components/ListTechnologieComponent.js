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

import {fetchTechnologie} from '../actions/TechnologieAction';

class ListTechnologieComponent extends React.Component{
    
    componentDidMount(){
        const p = this.props;
        p.fetchTechnologie()
        
     }
     constructor(props){
        super(props);

        this.state={

          nom :"",
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
          const{technologies}=this.props;
          const technologie ={
            nom:this.state.nom,   
        }
           
        return (
            <MuiThemeProvider>
                 <div className="wrapper">
                 <div className="form-wrapper2">
            <h1 className="titre">Technologies </h1>
                <br/>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom de la Technologie</StyledTableCell>
            <StyledTableCell align="center">Adresse</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {technologies ? technologies.map((technologie) => (
              
            <StyledTableRow key={technologie.Nom}>
              <StyledTableCell component="th" scope="row">
                {technologie.nom}
              </StyledTableCell>
              <StyledTableCell align="center">{technologie.nom}</StyledTableCell>
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

ListTechnologieComponent.propTypes = {
        technologies: PropTypes.array.isRequired,
        fetchTechnologie : PropTypes.array.isRequired,
       
    }
    const mapStateToProps = state => {
        return {
            technologies : state.technologie.technologies
        }
    };
export default connect(mapStateToProps, { fetchTechnologie })(ListTechnologieComponent)