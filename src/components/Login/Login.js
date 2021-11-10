import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CHECK_LOGIN } from '../../redux/actions/actions'
import { StyledLogin } from '../../styled/styledLogin/styledLogin'
import { StyledForm } from '../../styled/styledLogin/styledForm'
import { StyledButton } from '../../styled/styledLogin/styledButton'
import { StyledInput } from '../../styled/styledLogin/styled.Input'

const Login = ( {
    checkLogin
} ) => {

    const [login, setLogin] = useState('')

    const loginHandler =(e) => {
        e.preventDefault();
        console.log(login)
        setLogin('');
        checkLogin( login )
    }

    return (
        <StyledLogin>
           <StyledForm action="/" onSubmit={ loginHandler }>
                <StyledInput type="text" onChange={  e => setLogin(e.target.value) } />
                <StyledButton>Log In</StyledButton>
           </StyledForm>
        </StyledLogin>
    )
}

const mapStateToProps = state => {
    return {

    }

}
const mapDispatchToProps = dispatch => {
    return {
        checkLogin: ( login ) => dispatch( { type: CHECK_LOGIN, payload: { login } } ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
