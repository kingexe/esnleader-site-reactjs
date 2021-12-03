import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DeleteProjet}  from "../actions/ProjetAction";
import {fetchProjet} from '../actions/ProjetAction';

class SupprimerProjetComponnent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchProjet()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idProjet :"",
            client :"",
            description : "" ,
            duree :"",
            nom_projet:"",
            type_projet:"",
            ProjetSelected:null,
            test:"",
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
        nom_projet :event.target.value,
        ProjetSelected :event.target.value,
      })
     }
     handleSubmit = (e) =>{
        
     
     this.props.DeleteProjet(this.state.nom_projet);
  }
    render(){
      const{projets}=this.props;
      const projet ={
        idProjet:this.state.idProjet,
        client:this.state.client,
        description:this.state.description,
        duree:this.state.duree,
        nom_projet:this.state.nom_projet,
        type_projet:this.state.type_projet,
    }
    console.log("test",projet.nom_projet)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Supprimer un projet</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre Filiale </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nom_projet}
          onChange={this.handleNomChange}
        >
          
          {projets ? projets.map(
                        projet =>(
                            this.state.ProjetSelected=projet,
                            this.state.test=projet.nom_projet,
          <MenuItem key={projet.idProjet}id={projet.idProjet} value={projet.nom_projet} >{projet.nom_projet}</MenuItem>
                            
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

   

SupprimerProjetComponnent.propTypes = {
    projets: PropTypes.array.isRequired,
    DeleteProjet : PropTypes.array.isRequired,
    fetchProjet : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        projets : state.projet.projets
    }
};
export default connect(mapStateToProps, { DeleteProjet,fetchProjet })(SupprimerProjetComponnent)



