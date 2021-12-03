import React,{useState} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {fetchFiliale} from '../actions/FilialeAction';
import './ListEntreprise.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';  

class ListEntrerpiseComponent extends React.Component{
    
    componentDidMount(){
        const p = this.props;
        p.fetchFiliale()
        
     }
     constructor(props){
        super(props);

        this.state={

            adresse : "" ,
            nomFiliale :"",
            email:"",
            tel:"",
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
          const{filiales}=this.props;
          const filiale ={
            nomFiliale:this.state.nomFiliale,
            adresse:this.state.adresse,
            email:this.state.email,
            tel:this.state.tel,    
        }
           
        return (
            <MuiThemeProvider>
                 <div className="wrapper">
                 <div className="form-wrapper2">
            <h1 className="titre">Filiales des Entreprises </h1>
                <br/>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom de la filiale</StyledTableCell>
            <StyledTableCell align="center">Adresse</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
            <StyledTableCell align="center">Numéro de téléphone</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filiales ? filiales.map((filiale) => (
              
            <StyledTableRow key={filiale.nomFiliale}>
              <StyledTableCell component="th" scope="row">
                {filiale.nomFiliale}
              </StyledTableCell>
              <StyledTableCell align="center">{filiale.adresse}</StyledTableCell>
              <StyledTableCell align="center">{filiale.email}</StyledTableCell>
              <StyledTableCell align="center">{filiale.tel}</StyledTableCell>
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

ListEntrerpiseComponent.propTypes = {
        filiales: PropTypes.array.isRequired,
        fetchFiliale : PropTypes.array.isRequired,
       
    }
    const mapStateToProps = state => {
        return {
            filiales : state.filiale.filiales
        }
    };
export default connect(mapStateToProps, { fetchFiliale })(ListEntrerpiseComponent)