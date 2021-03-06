import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className='sign-in'>
        <h2 className="title">¿Ya estás registrado?</h2>
        <span>Inicia sesión con tu cuenta</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Correo Electrónico'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Contraseña'
            required
          />
          <div className="buttons"> 
          <CustomButton type='submit'> Iniciar Sesión </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn><i className="fab fa-google"></i>  Inicia Sesión con Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
