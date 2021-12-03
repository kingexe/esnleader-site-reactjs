import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select,Checkbox, MenuItem,FormControl,InputLabel ,makeStyles, FormGroup} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addEntreprise}  from "../actions/EntrepriseAction";

class EntrerpiseComponent extends React.Component{
   
    
    constructor(props){
        super(props);

        this.state={

            adresse : "" ,
            nom :"",
            secteur:"",
            site:"",
            numTel:"",
            filiales:[],
           
             nomFiliale:"",
             addresseFilale:"",
             emailFiliale:"",
             telFiliale:"",
            visible:false
        }  
        this.ShowVisible=this.ShowVisible.bind(this);
    }

    ShowVisible() {
      this.setState({
          visible: !this.state.visible
      });
  }
    handleNomChange =(event) =>{
      this.setState({
          nom :event.target.value
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
     handleNomFilialechange =(event) =>{
      this.setState({
        nomFiliale:event.target.value,
        filiales:{
          nom:this.state.nomFiliale,
        }
      })
     }
     handlAddresseFilialechange =(event) =>{
      this.setState({
        addresseFilale:event.target.value,
        filiales:{
          adresse:this.state.addresseFilale,
        }
      })
     }
     handlEmailFilialechange =(event) =>{
      this.setState({
        emailFiliale:event.target.value,
        filiales:{
          email:this.state.emailFiliale,
        }
      })
     }

     handlTellFilialechange =(event) =>{
      this.setState({
        telFiliale:event.target.value,
        filiales:{
          tel:this.state.telFiliale,
        }
      })
     }
   

     handleSubmit = (e) =>{
        
      const entreprise ={

          nom:this.state.nom,
          adresse:this.state.adresse,
          secteur:this.state.secteur,
          site:this.state.site,
          numTel:this.state.numTel,
          filiales:[{
            nomFiliale:this.state.nomFiliale,
            adresse:this.state.addresseFilale,
            email:this.state.emailFiliale,
            tel:this.state.telFiliale,
          }]
      }
      
    
     this.props.addEntreprise(entreprise);
  }
    render(){
      const entreprise ={

        nom:this.state.nom,
        adresse:this.state.adresse,
        secteur:this.state.secteur,
        site:this.state.site,
        numTel:this.state.numTel,
        filiales:[{
            nomFiliale:this.state.nomFiliale,
            adresse:this.state.addresseFilale,
            email:this.state.emailFiliale,
            tel:this.state.telFiliale,
        }]
    }
    console.log("test",entreprise)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Ajouter Votre Entreprise</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >

          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom de votre entreprise </InputLabel>
          <TextField
          className="a1a"
          placeholder="Sasisez le nom de votre entreprise"
          value ={this.state.nom}
          onChange={this.handleNomChange}
        />
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
            <FormControl margin="normal">
            <InputLabel style={{fontSize:'18px',whiteSpace:'nowrap',overflow: 'hidden',marginTop:'-13px'}}>Avez vous une filiale?</InputLabel>
            </FormControl>
            <FormControl margin="normal">
            <Checkbox style={{left:'265px'}}value="true" 
            onClick={this.ShowVisible}></Checkbox>
            </FormControl>
            {this.state.visible ? 
            <FormGroup>
                 <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom de votre filiale</InputLabel>
          <TextField
          className="affa"
          placeholder="Saissez le nom de votre filiale"
          value ={this.state.nomFiliale}
          onChange={this.handleNomFilialechange}
        />
          </FormControl>
          <br/>
               <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Adresse de votre filiale</InputLabel>
          <TextField
          className="affa"
          placeholder="Saissez l'adresse de votre filiale"
          value ={this.state.addresseFilale}
          onChange={this.handlAddresseFilialechange}
        />
          </FormControl>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>email de votre filiale</InputLabel>
          <TextField
          className="affa"
          placeholder="Saissez l'email de votre filiale"
          value ={this.state.emailFiliale}
          onChange={this.handlEmailFilialechange}
        />
          </FormControl>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>numéro de votre filiale</InputLabel>
          <TextField
          className="affa"
          placeholder="Saissez l'email de votre filiale"
          value ={this.state.telFiliale}
          onChange={this.handlTellFilialechange}
        />
          </FormControl>  
            </FormGroup>
    : null}
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

   

EntrerpiseComponent.propTypes = {
    entreprises: PropTypes.array.isRequired,
    addEntreprise : PropTypes.array.isRequired,
   
}
const mapStateToProps = state => {
    return {
      entreprises : state.entreprise.entreprises
    }
};
export default connect(mapStateToProps, { addEntreprise })(EntrerpiseComponent)



