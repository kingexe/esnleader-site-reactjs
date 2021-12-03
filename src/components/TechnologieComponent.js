import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTechno}  from "../actions/ProjetAction"
import {fetchProjet} from '../actions/ProjetAction';

class CollaborateurComponent extends React.Component{
  

  componentDidMount(){
    const p = this.props;
    p.fetchProjet();
    
 }
    constructor(props){
        super(props);
        this.state={
             
            idProjet :"",
            nom_projet:"",
            nom :"",
            projetSelected:null,
        }    
        
    }
    handleNomProjetChange=(event) =>{
      this.setState({
        nom_projet :event.target.value,
        projetSelected :event.target.value,
        idProjet:this.state.projetSelected.idProjet,
      })
    }
     handleNamechange =(event) =>{
      this.setState({
        nom :event.target.value
      })
     }
    

    

     handleSubmit = (e) =>{
        
      const technologie ={
        nom :this.state.nom,
      }

      console.log(technologie);
      this.props.addTechno(this.state.idProjet,technologie);
    
    
  }
    render(){
      const{projets}=this.props;
      const technologie ={
        nom :this.state.nom,
    }

    console.log("test",technologie)
    console.log("test",this.state.idProjet)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Technologies d'un projet</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           

                 
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Selctionner votre entreprise</InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nom_projet}
          onChange={this.handleNomProjetChange}
        >
          
          {projets ? projets.map(
                        projet =>(
                            this.state.projetSelected=projet,
          <MenuItem key={projet.idProjet}id={projet.idProjet} value={projet.nom_projet} >{projet.nom_projet}</MenuItem>
                            
          )) :'' }
        </Select>

        </FormControl> 
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom de la technologie</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le nom de la technologie"
            className="a2a"
            value ={this.state.nom}
            onChange={this.handleNamechange}
            />
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

   

CollaborateurComponent.propTypes = {
    projets: PropTypes.array.isRequired,
    addProjet : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        projets : state.projet.projets
    }
};
export default connect(mapStateToProps, {fetchProjet,addTechno })(CollaborateurComponent)



