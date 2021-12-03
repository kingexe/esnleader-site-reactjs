import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {UpdateCollaborateur}  from "../actions/CollaborateurAction";
import {fetchCollaborateur} from '../actions/CollaborateurAction';

class ModifierCollaborateurComponent extends React.Component{
   
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
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
          name :event.target.value,
          CollaborateurSelected :event.target.value,
          idCollaborateur:this.state.CollaborateurSelected.idCollaborateur,
      })
     }
     handleAnciennetechange =(event) =>{
      this.setState({
        anciennete :event.target.value
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
     handleSalairechange =(event) =>{
      this.setState({
        salaire :event.target.value
      })
     }

  

     handleSubmit = (e) =>{
        
      const collaborateur ={
          idCollaborateur:this.state.idCollaborateur,
          name:this.state.name,
          anciennete:this.state.anciennete,
          formation:this.state.formation,
          salaire:this.state.salaire,
          grade:this.state.grade,
        
      }
      
    
     this.props.UpdateCollaborateur(collaborateur);
  }
    render(){
      const{collaborateurs}=this.props;
      const collaborateur ={
        idCollaborateur:this.state.idCollaborateur,
        name:this.state.name,
        anciennete:this.state.anciennete,
        formation:this.state.formation,
        salaire:this.state.salaire,
        grade:this.state.grade,
    }
    console.log("test",collaborateur)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Modifier le Collaborateur</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom du Collaborateur </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.name}
          onChange={this.handleNomChange}
        >
          
          {collaborateurs ? collaborateurs.map(
                        collaborateur =>(
                            this.state.CollaborateurSelected=collaborateur,
          <MenuItem key={collaborateur.idCollaborateur}id={collaborateur.idCollaborateur} value={collaborateur.name} >{collaborateur.name}</MenuItem>
                            
          )) :'' }
        </Select>
          
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Grade</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez Le grade"
          value ={this.state.grade}
          onChange={this.handleGradechange}
        />
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Formation</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez La Formation"
          value ={this.state.formation}
          onChange={this.handleFormationchange}
        />
          </FormControl> 
            
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Salaire</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le Salaire"
            className="a2a"
            value ={this.state.salaire}
            onChange={this.handleSalairechange}
            />
          </FormControl> 

          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Anciennete</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez L'Anciennete"
          value ={this.state.anciennete}
          onChange={this.handleAnciennetechange}
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

   

ModifierCollaborateurComponent.propTypes = {
    collaborateurs: PropTypes.array.isRequired,
    UpdateCollaborateur : PropTypes.array.isRequired,
    fetchCollaborateur : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      collaborateurs : state.collaborateur.collaborateurs
    }
};
export default connect(mapStateToProps, { UpdateCollaborateur,fetchCollaborateur })(ModifierCollaborateurComponent)