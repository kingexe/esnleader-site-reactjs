import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DeleteCollaborateur}  from "../actions/CollaborateurAction";
import {fetchCollaborateur} from '../actions/CollaborateurAction';

class SupprimerCollaborateurComponnent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchCollaborateur()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idCollaborateur :"",
          
            anciennete : "" ,
            formation :"",
            grade:"",
            name:"",
            salaire:"",
            CollaborateurSelected:null,
            test:"",
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
        name :event.target.value,
        CollaborateurSelected :event.target.value,
      })
     }
     handleSubmit = (e) =>{
        
     
     this.props.DeleteCollaborateur(this.state.name);
  }
    render(){
      const{collaborateurs}=this.props;
      const collaborateur ={
        idCollaborateur:this.state.idCollaborateur,
        name:this.state.name,
        formation:this.state.formation,
        grade:this.state.grade,
        salaire:this.state.salaire,
        anciennete:this.state.anciennete,
    }
    console.log("test",collaborateur.name)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Supprimer un Collaborateur</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom du collaborateur </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.name}
          onChange={this.handleNomChange}
        >
          
          {collaborateurs ? collaborateurs.map(
                        collaborateur =>(
                            this.state.CollaborateurSelected=collaborateur,
                            this.state.test=collaborateur.name,
          <MenuItem key={collaborateur.idCollaborateur}id={collaborateur.idCollaborateur} value={collaborateur.name} >{collaborateur.name}</MenuItem>
                            
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

   

SupprimerCollaborateurComponnent.propTypes = {
    collaborateurs: PropTypes.array.isRequired,
    DeleteCollaborateur : PropTypes.array.isRequired,
    fetchCollaborateur : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        collaborateurs : state.collaborateur.collaborateurs
    }
};
export default connect(mapStateToProps, { DeleteCollaborateur,fetchCollaborateur })(SupprimerCollaborateurComponnent)