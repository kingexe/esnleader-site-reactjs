import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DeleteTechnologie}  from "../actions/TechnologieAction";
import {fetchTechnologie} from '../actions/TechnologieAction';

class SupprimerTechnologieComponnent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchTechnologie()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idTechnologie :"",
            nom :"",
            TechnologieSelected:null,
            test:"",
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
        nom :event.target.value,
        TechnologieSelected :event.target.value,
      })
     }
     handleSubmit = (e) =>{
        
     
     this.props.DeleteTechnologie(this.state.nom);
  }
    render(){
      const{technologies}=this.props;
      const technologie ={
        idTechnologie:this.state.idTechnologie,
        Nom:this.state.nom,
    }
    console.log("test",technologie.nom)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Supprimer une Technologie</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre Technologie </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nom}
          onChange={this.handleNomChange}
        >
          
          {technologies ? technologies.map(
                        technologie =>(
                            this.state.TechnologieSelected=technologie,
                            this.state.test=technologie.nom,
          <MenuItem key={technologie.idTechnologie}id={technologie.idTechnologie} value={technologie.nom} >{technologie.nom}</MenuItem>
                            
          )) :'' }
        </Select>
          
          </FormControl> 
        
            <br/>    
            <br/>
             <div style={{alignItems: 'center',display: 'flex',justifyContent: 'center'}}>
          <FormControl margin="normal"> 
          <Button variant="contained" color="success" style={{width:'200px'}} type="submit">Valider</Button>
          </FormControl> 
          &nbsp;&nbsp;&nbsp;
          <FormControl margin="normal"> 
          <Button variant="contained" color="error" style={{width:'200px'}}>
           Annuler
         </Button>
            </FormControl>
            </div>
          </form>
          </div>
          </div>
           </MuiThemeProvider>
        )
    }
}

const styles={
    button:{
        margin : 15
    }
}

   

SupprimerTechnologieComponnent.propTypes = {
    technologies: PropTypes.array.isRequired,
    DeleteTechnologie : PropTypes.array.isRequired,
    fetchTechnologie : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        technologies : state.technologie.technologies
    }
};
export default connect(mapStateToProps, { DeleteTechnologie,fetchTechnologie })(SupprimerTechnologieComponnent)