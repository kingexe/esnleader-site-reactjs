import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DeleteFiliale}  from "../actions/FilialeAction";
import {fetchFiliale} from '../actions/FilialeAction';

class SupprimerEntrepriseComponnent extends React.Component{
   
    componentDidMount(){
        const p = this.props;
        p.fetchFiliale()
        
     }
    
    constructor(props){
        super(props);

        this.state={
            idFiliale :"",
            nom :"",
            adresse : "" ,
            nomFiliale :"",
            email:"",
            tel:"",
            FilialeSelected:null,
            test:"",
        }    
        
    }
    handleNomChange =(event) =>{
      this.setState({
        nomFiliale :event.target.value,
        FilialeSelected :event.target.value,
      })
     }
     handleSubmit = (e) =>{
        
     
     this.props.DeleteFiliale(this.state.nomFiliale);
  }
    render(){
      const{filiales}=this.props;
      const filiale ={
        idFiliale:this.state.idFiliale,
        nomFiliale:this.state.nomFiliale,
        adresse:this.state.adresse,
        email:this.state.email,
         tel:this.state.tel,
    }
    console.log("test",filiale.nomFiliale)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Supprimer une Filiale</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           
                
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre Filiale </InputLabel>
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
    filiales: PropTypes.array.isRequired,
    DeleteFiliale : PropTypes.array.isRequired,
    fetchFiliale : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
        filiales : state.filiale.filiales
    }
};
export default connect(mapStateToProps, { DeleteFiliale,fetchFiliale })(SupprimerEntrepriseComponnent)



