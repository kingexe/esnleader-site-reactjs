import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {UpdateEntreprise}  from "../actions/EntrepriseAction";
import {fetchEntreprise} from '../actions/EntrepriseAction';

class ModifierEntrepriseComponent extends React.Component{
   
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
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
          nom :event.target.value,
          entrepriseSelected :event.target.value,
          idEntreprise:this.state.entrepriseSelected.idEntreprise,
      })
     }
     handleAdressechange =(event) =>{
      this.setState({
        adresse :event.target.value
      })
     }
     handleSecteurchange =(event) =>{
      this.setState({
        secteur :event.target.value
      })
     }
     handleSitechange =(event) =>{
      this.setState({
        site :event.target.value
      })
     }
     handleNumTelchange =(event) =>{
      this.setState({
        numTel :event.target.value
      })
     }

  

     handleSubmit = (e) =>{
        
      const entreprise ={
          idEntreprise:this.state.idEntreprise,
          nom:this.state.nom,
          adresse:this.state.adresse,
          secteur:this.state.secteur,
          site:this.state.site,
          numTel:this.state.numTel,
        
      }
      
    
     this.props.UpdateEntreprise(entreprise);
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
    console.log("test",entreprise)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Modifier Votre Entreprise</h1>
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
          <MenuItem key={entreprise.idEntreprise}id={entreprise.idEntreprise} value={entreprise.nom} >{entreprise.nom}</MenuItem>
                            
          )) :'' }
        </Select>
          
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Adresse</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez l'adresse de votre entreprise"
          value ={this.state.adresse}
          onChange={this.handleAdressechange}
        />
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>numéro de téléphone</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez votre numéro de téléphone"
          value ={this.state.numTel}
          onChange={this.handleNumTelchange}
        />
          </FormControl> 
            <br/>
            <br/>
            <InputLabel style={{fontSize:'18px',marginTop:'1%'}} className="test" >Secteur activité</InputLabel>
                
            <Select className=' alin select' defaultValue=''
            onChange={this.handleSecteurchange} >
                 <MenuItem  value='Intégration de systèmes'>Intégration de systèmes</MenuItem>
                 <MenuItem  value='Conseil en organisation'>Conseil en organisation</MenuItem>
                 <MenuItem  value='Climatisation ventilation et Chauffage'>Conseil en conduite du changement</MenuItem>
                 <MenuItem  value='Conseil technique et RandD externalisé'>Conseil technique et R&D externalisé</MenuItem>
                 <MenuItem  value='Assistance technique'>Assistance technique</MenuItem>*
                 <MenuItem  value='Vente de licences de logiciels'>Vente de licences de logiciels</MenuItem>
                 <MenuItem  value='formation, assistance aux utilisateurs'>formation, assistance aux utilisateurs</MenuItem>
                 <MenuItem  value='Développement applications/ingénierie logicielle'>Développement d'applications/ingénierie logicielle</MenuItem>
             </Select>

            
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Site</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le Site de votre entreprise"
            className="a2a"
            value ={this.state.site}
            onChange={this.handleSitechange}
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

   

ModifierEntrepriseComponent.propTypes = {
    entreprises: PropTypes.array.isRequired,
    UpdateEntreprise : PropTypes.array.isRequired,
    fetchEntreprise : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      entreprises : state.entreprise.entreprises
    }
};
export default connect(mapStateToProps, { UpdateEntreprise,fetchEntreprise })(ModifierEntrepriseComponent)



