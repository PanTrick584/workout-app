import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";

import { ROUTES } from "../constans/routes";

const RedirectObserver = ({ children, logIn }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const findRoute = Object.keys(ROUTES).find((key) => ROUTES[key] === pathname);

  useEffect(() => {
    if (!logIn) push(ROUTES.LOGIN);
    if (pathname === ROUTES.LOGIN && logIn) push(ROUTES.START);
    if (pathname === ROUTES.START && logIn) push(ROUTES.MAIN);
    if (!findRoute) push(ROUTES.NOT_FOUND);
  }, [pathname, push, findRoute, logIn]);
  

  return children;
};

const mapStateToProps = state => {
  return {
    logIn: state.logIn
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedirectObserver)