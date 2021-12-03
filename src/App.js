import React from 'react';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import EntrepriseComponent from './components/EntrepriseComponent';
import GloballoadingInServer from './components/GloballoadingInServer';
import Navbar from './components/Navbar.component';
import SeeShipping from './components/SeeShipping';
import ListEntrepriseComponent from './components/ListEntrepriseComponent';
import ModifierEntrepriseComponent from './components/ModifierEntrepriseComponent';
import SupprimerEntrepriseComponnent from './components/SupprimerEntrepriseComponnent';
import FililaleComponent from './components/FililaleComponent';
import ListFilialeComponent from './components/ListFilialeComponent';
import SupprimerFilialeComponent from './components/SupprimerFilialeComponent';
import ModifierFilialeComponent from './components/ModifierFilialeComponent';
import ProjetComponent from './components/ProjetComponent';
import ListProjetComponent from './components/ListProjetComponent';
import SupprimerProjetComponent from './components/SupprimerProjetComponent';
import ModifierProjetComponent from './components/ModifierProjetComponent';
import CollaborateurComponent from './components/CollaborateurComponent';

import ListCollaborateurComponent from './components/ListCollaborateurComponent';
import ModifierCollaborateurComponent from './components/ModifierCollaborateurComponent';
import SupprimerCollaborateurComponent from './components/SupprimerCollaborateurComponent';
import TechnologieComponent from './components/TechnologieComponent';
import ListTechnologieComponent from './components/ListTechnologieComponent';
import ModiferTechnologieComponent from './components/ModiferTechnologieComponent';
import SupprimerTechnologieComponent from './components/SupprimerTechnologieComponent';

function App() {
  return (
    <Provider store={store}>
      <GloballoadingInServer show={false} />
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch >
          <Route exact path="/AjouterEntreprise" component= {EntrepriseComponent}/>
          <Route exact path="/ListerEntreprise" component= {ListEntrepriseComponent}/>
          <Route exact path="/ModifierEntreprise" component= {ModifierEntrepriseComponent}/>
          <Route exact path="/SupprimerEntreprise" component= {SupprimerEntrepriseComponnent}/>
          <Route exact path="/AjouterFiliale" component= {FililaleComponent}/>
          <Route exact path="/ListerFiliale" component= {ListFilialeComponent}/>
          <Route exact path="/SupprimerFiliale" component= {SupprimerFilialeComponent}/>
          <Route exact path="/ModifierFiliale" component= {ModifierFilialeComponent}/>
          <Route exact path="/AjouterProjet" component= {ProjetComponent}/>
          <Route exact path="/ListerProjet" component= {ListProjetComponent}/>
          <Route exact path="/SupprimerProjet" component= {SupprimerProjetComponent}/>
          <Route exact path="/ModifierProjet" component= {ModifierProjetComponent}/>
          <Route exact path="/AjouterCollaborateur" component= {CollaborateurComponent}/>
          <Route exact path="/ListerCollaborateur" component= {ListCollaborateurComponent}/>
          <Route exact path="/ModifierCollaborateur" component= {ModifierCollaborateurComponent}/>
          <Route exact path="/SupprimerCollaborateur" component= {SupprimerCollaborateurComponent}/>
          <Route exact path="/AjouterTechnologie" component= {TechnologieComponent}/>
          <Route exact path="/ListerTechnologie" component= {ListTechnologieComponent}/>
          <Route exact path="/ModifierTechnologie" component= {ModiferTechnologieComponent}/>
          <Route exact path="/SupprimerTechnologie" component= {SupprimerTechnologieComponent}/>
          
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
