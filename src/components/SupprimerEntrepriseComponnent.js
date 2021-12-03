import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DeleteEntreprise}  from "../actions/EntrepriseAction";
import {fetchEntreprise} from '../actions/EntrepriseAction';

class SupprimerEntrepriseComponnent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchEntreprise()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idEntreprise :"",
            adresse : "" ,
            nom :"",
            secteur:"",
            site:"",
            numTel:"",
            entrepriseSelected:null,
            test:"",
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
          nom :event.target.value,
          entrepriseSelected :event.target.value,
      })
     }
     handleSubmit = (e) =>{
        
     
     this.props.DeleteEntreprise(this.state.nom);
  }
    render(){
      const{entreprises}=this.props;
      const entreprise ={
        idEntreprise:this.state.idEntreprise,
        nom:this.state.nom,
        adresse:this.state.adresse,
        secteur:this.state.secteur,
        site:this.state.site,
        numTel:this.state.numTel,
    }
    console.log("test",entreprise.nom)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Supprimer une Entreprise</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre entreprise </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nom}
          onChange={this.handleNomChange}
        >
          
          {entreprises ? entreprises.map(
                        entreprise =>(
                            this.state.entrepriseSelected=entreprise,
                            this.state.test=entreprise.nom,
          <MenuItem key={entreprise.idEntreprise}id={entreprise.idEntreprise} value={entreprise.nom} >{entreprise.nom}</MenuItem>
                            
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

   

SupprimerEntrepriseComponnent.propTypes = {
    entreprises: PropTypes.array.isRequired,
    DeleteEntreprise : PropTypes.array.isRequired,
    fetchEntreprise : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      entreprises : state.entreprise.entreprises
    }
};
export default connect(mapStateToProps, { DeleteEntreprise,fetchEntreprise })(SupprimerEntrepriseComponnent)



