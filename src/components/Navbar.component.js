import React, { Component } from 'react'
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { withRouter, matchPath } from "react-router";
import PropTypes from 'prop-types';
import './Navbar.component.scss';
import { fetchUser, fetchUserConf } from '../actions/navbarAction';
import logo from '../assets/images/logo.png';
import Button from '@mui/material/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
class Navbar extends Component {
    
    state = {
        anchorEl: null,
    }

    handleClick = event => this.setState({ anchorEl: event.currentTarget })
    handleClick1 = event => this.setState({ anchorEl2: event.currentTarget })
    handleClick2 = event => this.setState({ anchorEl3: event.currentTarget })
    handleClick3 = event => this.setState({ anchorEl4: event.currentTarget })
    handleClick4 = event => this.setState({ anchorEl5: event.currentTarget })
    handleClose = () => this.setState({ anchorEl: null  })
    handleClose1 = () => this.setState({ anchorEl2: null  })
    handleClose2 = () => this.setState({ anchorEl3: null  })
    handleClose3 = () => this.setState({ anchorEl4: null  })
    handleClose4 = () => this.setState({ anchorEl5: null  })
    render() {
        
        const { location, user } = this.props
        
        const matchAddEntreprise = matchPath(location.pathname, {
            path: "/AjouterEntreprise",
            exact: true,
            trict: true
          });

          const matchListEntreprise= matchPath(location.pathname, {
            path: "/ListerEntreprise",
            exact: true,
            trict: true
          });
          
          const matchModfierEntreprise= matchPath(location.pathname, {
            path: "/ModifierEntreprise",
            exact: true,
            trict: true
          });

          const matchSupprimerEntreprise= matchPath(location.pathname, {
            path: "/SupprimerEntreprise",
            exact: true,
            trict: true
          });
          const matchAjouterFiliale= matchPath(location.pathname, {
            path: "/AjouterFiliale",
            exact: true,
            trict: true
          });
          const matchListerFiliale= matchPath(location.pathname, {
            path: "/ListerFiliale",
            exact: true,
            trict: true
          });
          const matchSupprimerFiliale= matchPath(location.pathname, {
            path: "/SupprimerrFiliale",
            exact: true,
            trict: true
          });
          const matchModifierFiliale= matchPath(location.pathname, {
            path: "/ModifierFiliale",
            exact: true,
            trict: true
          });
          const matchAjouterProjet= matchPath(location.pathname, {
            path: "/AjouterProjet",
            exact: true,
            trict: true
          });
          const matchListerProjet= matchPath(location.pathname, {
            path: "/ListerProjet",
            exact: true,
            trict: true
          });
      
          const matchSupprimerProjet= matchPath(location.pathname, {
            path: "/SupprimerProjet",
            exact: true,
            trict: true
          });
          const matchModifierProjet= matchPath(location.pathname, {
            path: "/ModifierProjet",
            exact: true,
            trict: true
          });

          const matchAjouterCollaborateur= matchPath(location.pathname, {
            path: "/AjouterCollaborateur",
            exact: true,
            trict: true
          });

          const matchListerCollaborateur= matchPath(location.pathname, {
            path: "/ListerCollaborateur",
            exact: true,
            trict: true
          });
          const matchModifierCollaborateur= matchPath(location.pathname, {
            path: "/ModifierCollaborateur",
            exact: true,
            trict: true
          });
          const matchSupprimerCollaborateur= matchPath(location.pathname, {
            path: "/SupprimerCollaborateur",
            exact: true,
            trict: true
          });
          const matchAjouterTechnologies= matchPath(location.pathname, {
            path: "/AjouterTechnologie",
            exact: true,
            trict: true
          });
          const matchListerTechnologies= matchPath(location.pathname, {
            path: "/ListerTechnologie",
            exact: true,
            trict: true
          });
          const matchLModifierTechnologies= matchPath(location.pathname, {
            path: "/ModifierTechnologie",
            exact: true,
            trict: true
          });
          const matchLSupprimerTechnologies= matchPath(location.pathname, {
            path: "/SupprimerTechnologie",
            exact: true,
            trict: true
          });
          
          
          
          const { anchorEl,anchorEl2,anchorEl3,anchorEl4,anchorEl5} = this.state
      
         
        return (
            <Fade top>
             <div className="nav" data-testid="app-navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>    
                <div className="nav-menu">
                <Button aria-controls="basic-menu" aria-haspopup="true" onClick={this.handleClick} style={{fontSize:'25px'}}>
                    Entreprises
              </Button>
              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                    <Link
                        to="/AjouterEntreprise"
                        className={matchAddEntreprise!== null ? 'active drag' : 'drag'}>Ajouter Entreprise
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                    <Link
                        to="/ListerEntreprise"
                        className={matchListEntreprise!== null ? 'active drag' : 'drag'}>Lister Entreprise
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                    <Link
                        to="/ModifierEntreprise"
                        className={matchModfierEntreprise!== null ? 'active drag' : 'drag'}>Modifier Entreprise
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                    <Link
                        to="/SupprimerEntreprise"
                        className={matchSupprimerEntreprise!== null ? 'active drag' : 'drag'}>Supprimer Entreprise
                    </Link>
                    </MenuItem>
                </Menu>
                    &nbsp;&nbsp;&nbsp;

                <Button aria-controls="basic-menu" aria-haspopup="true" onClick={this.handleClick1}  style={{fontSize:'25px'}}>
                    Filiales
              </Button>
              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={this.handleClose1}
                >
                    <MenuItem onClick={this.handleClose1}>
                    <Link
                        to="/AjouterFiliale"
                        className={matchAjouterFiliale!== null ? 'active drag' : 'drag'}>Ajouter Filiales
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose1}>
                    <Link
                        to="/ListerFiliale"
                        className={matchListerFiliale!== null ? 'active drag' : 'drag'}>Liste Des Filiales
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose1}>
                    <Link
                        to="/ModifierFiliale"
                        className={matchModifierFiliale!== null ? 'active drag' : 'drag'}>Modifier une Filiale
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose1}>
                    <Link
                        to="/SupprimerFiliale"
                        className={matchSupprimerFiliale!== null ? 'active drag' : 'drag'}>Supprimer une Filiale
                    </Link>
                    </MenuItem>
                    
                </Menu>
                &nbsp;&nbsp;&nbsp;
                <Button aria-controls="basic-menu" aria-haspopup="true" onClick={this.handleClick2}  style={{fontSize:'25px'}}>
                    Projets
              </Button>
              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={this.handleClose2}
                >
                    <MenuItem onClick={this.handleClose2}>
                    <Link
                        to="/AjouterProjet"
                        className={matchAjouterProjet!== null ? 'active drag' : 'drag'}>Ajouter Projet
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose2}>
                    <Link
                        to="/ListerProjet"
                        className={matchListerProjet!== null ? 'active drag' : 'drag'}>Lister Projet
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose2}>
                    <Link
                        to="/SupprimerProjet"
                        className={matchSupprimerProjet!== null ? 'active drag' : 'drag'}>Supprimer Projet
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose2}>
                    <Link
                        to="/ModifierProjet"
                        className={matchModifierProjet!== null ? 'active drag' : 'drag'}>Modifier Projet
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose2}>
                    <Link
                        to="/SupprimerProjet"
                        className={matchModifierProjet!== null ? 'active drag' : 'drag'}>Modifier Projet
                    </Link>
                    </MenuItem>
                    
                </Menu>

                &nbsp;&nbsp;&nbsp;
                <Button aria-controls="basic-menu" aria-haspopup="true" onClick={this.handleClick3}  style={{fontSize:'25px'}}>
                    Collaborateurs
              </Button>
              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl4}
                    keepMounted
                    open={Boolean(anchorEl4)}
                    onClose={this.handleClose3}
                >
                    <MenuItem onClick={this.handleClose3}>
                    <Link
                        to="/AjouterCollaborateur"
                        className={matchAjouterCollaborateur!== null ? 'active drag' : 'drag'}>Ajouter Collaborateur
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose3}>
                    <Link
                        to="/ListerCollaborateur"
                        className={matchListerCollaborateur!== null ? 'active drag' : 'drag'}>Lister Collaborateur
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose3}>
                    <Link
                        to="/ModifierCollaborateur"
                        className={matchModifierCollaborateur!== null ? 'active drag' : 'drag'}>Modifier Collaborateur
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose3}>
                    <Link
                        to="/SupprimerCollaborateur"
                        className={matchSupprimerCollaborateur!== null ? 'active drag' : 'drag'}>Supprimer Collaborateur
                    </Link>
                    </MenuItem>
                    
                </Menu>
                &nbsp;&nbsp;&nbsp;
                <Button aria-controls="basic-menu" aria-haspopup="true" onClick={this.handleClick4}  
                style={{fontSize:'25px', border: 'none',padding: '15px 32px',textAlign: 'center',
                display: 'inline-block', color:'blue'}}>
                    Technologies
              </Button>
              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl5}
                    keepMounted
                    open={Boolean(anchorEl5)}
                    onClose={this.handleClose4}
                >
                    <MenuItem onClick={this.handleClose4}>
                    <Link
                        to="/AjouterTechnologie"
                        className={matchAjouterTechnologies!== null ? 'active drag' : 'drag'}>Ajouter Technologie
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose4}>
                    <Link
                        to="/ListerTechnologie"
                        className={matchListerTechnologies!== null ? 'active drag' : 'drag'}>Lister Technologie
                    </Link>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose4}>
                    <Link
                        to="/ModifierTechnologie"
                        className={matchLModifierTechnologies!== null ? 'active drag' : 'drag'}>Modifier Technologie
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose4}>
                    <Link
                        to="/SupprimerTechnologie"
                        className={matchLSupprimerTechnologies!== null ? 'active drag' : 'drag'}>Supprimer Technologie
                    </Link>
                    </MenuItem>
                 
                </Menu>
                </div>

                <div className="nav-home">
                    <a href="#news">
                    <i className="icon-home" />
                    </a>
                </div>
                <div className="nav-profil">
                    <a href="#news">
                    <span>{user ? user.nickname : 'RCL Natha'} </span>
                    <span>RCL Natha</span>
                    <i className="icon-arrow-down" />
                    </a>
                </div>
                </div>
            </Fade>
        );
    }
}

Navbar.propTypes = {
    location: PropTypes.shape().isRequired,
    user: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchUserConf: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        user: state.navbar.user,
        userConfig: state.navbar.userConfig
    }
};
export default connect(mapStateToProps, { fetchUser, fetchUserConf })(withRouter(Navbar))
