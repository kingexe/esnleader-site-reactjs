import React,{useState} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {fetchEntreprise} from '../actions/EntrepriseAction';
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
        p.fetchEntreprise()
        
     }
     constructor(props){
        super(props);

        this.state={

            adresse : "" ,
            nom :"",
            secteur:"",
            site:"",
            numTel:"",
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
          const{entreprises}=this.props;
          const entreprise ={

            nom:this.state.nom,
            adresse:this.state.adresse,
            secteur:this.state.secteur,
            site:this.state.site,
            numTel:this.state.numTel,
        }
           
        return (
            <MuiThemeProvider>
                 <div className="wrapper">
                 <div className="form-wrapper2">
            <h1 className="titre">Entreprises Paretnaires</h1>
                <br/>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom de l'entreprise</StyledTableCell>
            <StyledTableCell align="center">Adresse</StyledTableCell>
            <StyledTableCell align="center">Secteur d'activité</StyledTableCell>
            <StyledTableCell align="center">Numéro de téléphone</StyledTableCell>
            <StyledTableCell align="center">Site</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entreprises ? entreprises.map((entreprise) => (
              
            <StyledTableRow key={entreprise.nom}>
              <StyledTableCell component="th" scope="row">
                {entreprise.nom}
              </StyledTableCell>
              <StyledTableCell align="center">{entreprise.adresse}</StyledTableCell>
              <StyledTableCell align="center">{entreprise.secteur}</StyledTableCell>
              <StyledTableCell align="center">{entreprise.numTel}</StyledTableCell>
              <StyledTableCell align="rigcenterht">{entreprise.site}</StyledTableCell>
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
        entreprises: PropTypes.array.isRequired,
        fetchEntreprise : PropTypes.array.isRequired,
       
    }
    const mapStateToProps = state => {
        return {
          entreprises : state.entreprise.entreprises
        }
    };
export default connect(mapStateToProps, { fetchEntreprise })(ListEntrerpiseComponent)