import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import entrepriseReducer from './entrepriseReducer';
import filialeReducer from './filialeReducer';
import projetReducer from './projetReducer';
import collaborateurReducer from './collaborateurReducer';
import technologieReducer from './technologieReducer';
export default combineReducers({
    navbar: navbarReducer,
    entreprise : entrepriseReducer,
    filiale: filialeReducer,
    projet:projetReducer,
    collaborateur:collaborateurReducer,
    technologie : technologieReducer
});