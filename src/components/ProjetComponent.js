import React,{useState} from 'react';
import './Entreprise.scss'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import {Select, MenuItem,FormControl,InputLabel ,makeStyles} from '@material-ui/core'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addProjet}  from "../actions/FilialeAction"
import {fetchFiliale} from '../actions/FilialeAction';

class ProjetComponent extends React.Component{
  

  componentDidMount(){
    const p = this.props;
    p.fetchFiliale();
    
 }
    constructor(props){
        super(props);
        this.state={
             
            idFiliale :"",
            nomFiliale :"",
            client :"",
            description : "" ,
            duree :"",
            nom_projet:"",
            type_projet:"",
            filialeSelected:null,
        }    
        
    }
    handleNomFilialeChange=(event) =>{
      this.setState({
        nomFiliale :event.target.value,
        filialeSelected :event.target.value,
        idFiliale:this.state.filialeSelected.idFiliale,
      })
    }
    handleClientChange =(event) =>{
      this.setState({
        client :event.target.value,
      })
     }
     handleDescriptionchange =(event) =>{
      this.setState({
        description :event.target.value
      })
     }
     handleDureechange =(event) =>{
      this.setState({
        duree :event.target.value
      })
     }

     handleNomProjetTelchange =(event) =>{
      this.setState({
        nom_projet :event.target.value
      })
     }
     handleTypeProjetchange =(event) =>{
        this.setState({
        type_projet :event.target.value
        })
       }

    

     handleSubmit = (e) =>{
        
      const projet ={
      

        client :this.state.client,
        description : this.state.description,
        duree :this.state.duree,
        nom_projet:this.state.nom_projet,
        type_projet:this.state.type_projet,
        
      }
      this.props.addProjet(this.state.idFiliale,projet);
    
    
  }
    render(){
      const{filiales}=this.props;
      const projet ={
      
        client :this.state.client,
        description : this.state.description,
        duree :this.state.duree,
        nom_projet:this.state.nom_projet,
        type_projet:this.state.type_projet,
      
    }
    console.log("test",projet)
        return (
            <MuiThemeProvider>
         <div className="wrapper">

        <div className="form-wrapper">
         <h1 className="titre">Ajouter Un projet</h1>
          <br/>
          <br/>
          <form  onSubmit={this.handleSubmit} >
           

                 
          <InputLabel style={{fontSize:'18px',marginBottom:'-40px'}}>Nom de votre entreprise </InputLabel>
          <FormControl margin="normal">
          <Select
          
          className="a1a"
          value={this.state.nomFiliale}
          onChange={this.handleNomFilialeChange}
        >
          
          {filiales ? filiales.map(
                        filiale =>(
                            this.state.filialeSelected=filiale,
          <MenuItem key={filiale.idFiliale}id={filiale.idFiliale} value={filiale.nomFiliale} >{filiale.nomFiliale}</MenuItem>
                            
          )) :'' }
        </Select>

        </FormControl> 
                    <br/><br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom du client</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez le nom de votre client"
          value ={this.state.client}
          onChange={this.handleClientChange}
        />       
        </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Description du projet</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez la description de votre projet"
          value ={this.state.description}
          onChange={this.handleDescriptionchange}
        />
          </FormControl> 
          <br/>
          <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Durée du projet</InputLabel>
          <TextField
          className="a1a"
          placeholder="Saissez le numéro de votre filiale"
          value ={this.state.duree}
          onChange={this.handleDureechange}
        />
          </FormControl> 
         
            
                <br/>
                <br/>
          <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Nom du projet</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le nom de votre projet"
            className="a2a"
            value ={this.state.nom_projet}
            onChange={this.handleNomProjetTelchange}
            />
          </FormControl> 
            <br/>    
            <br/>
            <FormControl margin="normal">
          <InputLabel style={{fontSize:'18px',marginTop:'-10px'}}>Type du projet</InputLabel>
          <TextField
            hintText="Site"
            placeholder="Saissez le type de votre projet"
            className="a2a"
            value ={this.state.type_projet}
            onChange={this.handleTypeProjetchange}
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

   

ProjetComponent.propTypes = {
    filiales: PropTypes.array.isRequired,
    addProjet : PropTypes.func.isRequired,
   
}
const mapStateToProps = state => {
    return {
      filiales : state.filiale.filiales
    }
};
export default connect(mapStateToProps, {fetchFiliale,addProjet })(ProjetComponent)



