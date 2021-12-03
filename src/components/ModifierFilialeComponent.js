import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {UpdateFiliale}  from "../actions/FilialeAction";
import {fetchFiliale} from '../actions/FilialeAction';

class ModifierFilialeComponent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchFiliale()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idFiliale :"",
            adresse : "" ,
            nomFiliale :"",
            email:"",
            tel:"",
            FilialeSelected:null,
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
          nomFiliale :event.target.value,
          FilialeSelected :event.target.value,
          idFiliale:this.state.FilialeSelected.idFiliale,
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

        idFiliale :this.state.idFiliale,
        adresse : this.state.adresse,
        nomFiliale :this.state.nomFiliale,
        email:this.state.email,
        tel:this.state.tel,
        
      }
      
    
     this.props.UpdateFiliale(filiale);
  }
    render(){
      const{filiales}=this.props;
      const filiale ={
        idFiliale :this.state.idFiliale,
        adresse : this.state.adresse,
        nomFiliale :this.state.nomFiliale,
        email:this.state.email,
        tel:this.state.tel,
        
      }
      
    console.log("test",filiale)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Modifier Votre Filiale</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre entreprise </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nomFiliale}
          onChange={this.handleNomChange}
        >
          
          {filiales ? filiales.map(
                        filiale =>(
                            this.state.FilialeSelected=filiale,
                            this.state.test=filiale.nomFiliale,
          <MenuItem key={filiale.idFiliale}id={filiale.idFiliale} value={filiale.nomFiliale} >{filiale.nomFiliale}</MenuItem>
                            
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
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Email</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le Site de votre entreprise"
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

   

ModifierFilialeComponent.propTypes = {
  filiales: PropTypes.array.isRequired,
  UpdateFiliale : PropTypes.array.isRequired,
  fetchFiliale : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      filiales : state.filiale.filiales
    }
};
export default connect(mapStateToProps, { UpdateFiliale,fetchFiliale })(ModifierFilialeComponent)



