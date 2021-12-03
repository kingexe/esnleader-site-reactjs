import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addFiliale}  from "../actions/EntrepriseAction";
import {fetchEntreprise} from '../actions/EntrepriseAction';

class FililaleComponent extends React.Component{
  

  componentDidMount(){
    const p = this.props;
    p.fetchEntreprise()
    
 }
    constructor(props){
        super(props);
        this.state={
             
            idEntreprise :"",
            nom :"",
            adresse : "" ,
            nomFiliale :"",
            email:"",
            tel:"",
            entrepriseSelected:null,
        }    
        
    }
    handleNomEntrepriseChange=(event) =>{
      this.setState({
        nom :event.target.value,
        entrepriseSelected :event.target.value,
        idEntreprise:this.state.entrepriseSelected.idEntreprise,
      })
    }
    handleNomChange =(event) =>{
      this.setState({
        nomFiliale :event.target.value,
      })
     }
     handleAdressechange =(event) =>{
      this.setState({
        adresse :event.target.value
      })
     }
     handleEmailchange =(event) =>{
      this.setState({
        email :event.target.value
      })
     }

     handleNumTelchange =(event) =>{
      this.setState({
        tel :event.target.value
      })
     }

     handleSubmit = (e) =>{
        
      const filiale ={
      
          nomFiliale:this.state.nomFiliale,
          adresse:this.state.adresse,
          email:this.state.email,
          tel:this.state.tel,
        
      }
      this.props.addFiliale(this.state.idEntreprise,filiale);
    
    
  }
    render(){
      const{entreprises}=this.props;
      const filiale ={
      
        nomFiliale:this.state.nomFiliale,
        adresse:this.state.adresse,
        email:this.state.email,
        tel:this.state.tel,
      
    }
    console.log("test",filiale)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Ajouter Une Filiale</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           

                 
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre entreprise </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nom}
          onChange={this.handleNomEntrepriseChange}
        >
          
          {entreprises ? entreprises.map(
                        entreprise =>(
                            this.state.entrepriseSelected=entreprise,
          <MenuItem key={entreprise.idEntreprise}id={entreprise.idEntreprise} value={entreprise.nom} >{entreprise.nom}</MenuItem>
                            
          )) :'' }
        </Select>

        </FormControl> 
                    <br/><br/><br/><br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom de la filiale</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez le nom de votre filiale"
          value ={this.state.nomFiliale}
          onChange={this.handleNomChange}
        />       
        </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Adresse de la filiale</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez l'adresse de votre filiale"
          value ={this.state.adresse}
          onChange={this.handleAdressechange}
        />
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Numéro de téléphone</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez le numéro de votre filiale"
          value ={this.state.tel}
          onChange={this.handleNumTelchange}
        />
          </FormControl> 
         
            
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Email</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez l'email de votre filiale"
            className="a2a"
            value ={this.state.email}
            onChange={this.handleEmailchange}
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

   

FililaleComponent.propTypes = {
  entreprises: PropTypes.array.isRequired,
    addFiliale : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      entreprises : state.entreprise.entreprises
    }
};
export default connect(mapStateToProps, {fetchEntreprise,addFiliale })(FililaleComponent)



