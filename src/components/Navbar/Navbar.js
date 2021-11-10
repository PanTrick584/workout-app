import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { LOG_OUT } from '../../redux/actions/actions';

import { StyledNavbar } from '../../styled/styledNavbar/styledNavbar'
import { StyledItem } from '../../styled/styledNavbar/styledItem';
import { StyledHeader } from '../../styled/styledNavbar/styledHeader';
import { StyledNaVButton } from '../../styled/styledNavbar/styledNavButton';

import { ROUTES } from "../../constans/routes";

const Navbar = ({ leaveApp }) => {

    const { push } = useHistory();
    const [ activeRoute, setActiveRoute ] = useState('/');
    const logout = useCallback(() => {
        leaveApp()
        push(ROUTES.LOGIN);
    }, [push, leaveApp]);

    const handleRoute = route => {
        push(route);
        setActiveRoute(route)
    }

    return (
        <StyledHeader>   
            <StyledNavbar>
                <StyledItem onClick={() => handleRoute(ROUTES.START)} status={ activeRoute === ROUTES.START ? true : false } >HOME</StyledItem>
                <StyledItem onClick={() => handleRoute(ROUTES.WORKOUT)} status={ activeRoute === ROUTES.WORKOUT ? true : false }>WORKOUT</StyledItem>
                <StyledItem onClick={() => handleRoute(ROUTES.MUSCLEPPARTS)} status={ activeRoute === ROUTES.MUSCLEPPARTS ? true : false }>MUSCLE PARTS</StyledItem>
                <StyledItem onClick={() => handleRoute(ROUTES.EXERCIZE)} status={ activeRoute === ROUTES.EXERCIZE ? true : false }>EXERCIZE</StyledItem>
                <StyledItem onClick={() => handleRoute(ROUTES.SETTINGS)} status={ activeRoute === ROUTES.SETTINGS ? true : false }>USTAWIENIA</StyledItem>
                <StyledNaVButton onClick={ logout }>Log out</StyledNaVButton>
            </StyledNavbar>
        </StyledHeader>
    )
}
const mapStateToProps = state => {
    return {
        userID: state.userID,
        logIn: state.logIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        leaveApp: () => dispatch({ type: LOG_OUT })
        // checkLogin: ( login ) => dispatch( { type: CHECK_LOGIN, payload: { login } } ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)