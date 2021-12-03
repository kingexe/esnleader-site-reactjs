import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addCollab}  from "../actions/ProjetAction"
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
            anciennete :"",
            formation :"",
            grade : "" ,
            name :"",
            salaire:"",
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
    handleAncienneteChange =(event) =>{
      this.setState({
        anciennete :event.target.value,
      })
     }
     handleFormationchange =(event) =>{
      this.setState({
        formation :event.target.value
      })
     }
     handleGradechange =(event) =>{
      this.setState({
        grade :event.target.value
      })
     }

     handleNamechange =(event) =>{
      this.setState({
        name :event.target.value
      })
     }
     handleSalairechange =(event) =>{
        this.setState({
        salaire :event.target.value
        })
       }

    

     handleSubmit = (e) =>{
        
      const collaborateur ={
        
        anciennete :this.state.anciennete,
        formation :this.state.formation,
        grade : this.state.grade,
        name :this.state.name,
        salaire:this.state.salaire
        
      }
      console.log(collaborateur);
      this.props.addCollab(this.state.idProjet,collaborateur);
    
    
  }
    render(){
      const{projets}=this.props;
      const collaborateur ={
      
        anciennete :this.state.anciennete,
        formation :this.state.formation,
        grade : this.state.grade,
        name :this.state.name,
        salaire:this.state.salaire
      
    }
    console.log("test",collaborateur)
    console.log("test",this.state.idProjet)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Collaborateur d'un projet </h1>
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
                    <br/><br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Anciennete</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez l'anciennté du collborateur'"
          value ={this.state.anciennete}
          onChange={this.handleAncienneteChange}
        />       
        </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Formation</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez la formation du collaborateur"
          value ={this.state.formation}
          onChange={this.handleFormationchange}
        />
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Grade</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez le grade du collaborateur"
          value ={this.state.grade}
          onChange={this.handleGradechange}
        />
          </FormControl> 
         
            
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom du collaborateur</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le nom du collaborateur"
            className="a2a"
            value ={this.state.name}
            onChange={this.handleNamechange}
            />
          </FormControl> 
  
            <br/>    
            <br/>
            <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Salaire</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le salaire du collaborateur"
            className="a2a"
            value ={this.state.salaire}
            type={Number}
            onChange={this.handleSalairechange}
            />
              <br/>    
            <br/>
          </FormControl> 
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
    addCollab : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        projets : state.projet.projets
    }
};
export default connect(mapStateToProps, {fetchProjet,addCollab })(CollaborateurComponent)



