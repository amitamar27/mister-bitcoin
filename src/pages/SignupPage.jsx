import React, { Component } from 'react'
import { connect } from 'react-redux';
import logoImg from '../assets/images/bitcoin_coin.png'
// import { userService } from '../services/UserService';
import { setUser } from '../store/actions/userActions';


 class _SignupPage extends Component {
  state = {
    user: '',
  };

  componentDidMount() { 
    console.log(this);
   }

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ user: value });
  };


  onSaveUser = async(ev) => {
    ev.preventDefault();
    this.props.setUser(this.state.user);
    // userService.signUp(this.state.user);
    this.props.history.push('/')
  };

  render() {
    const { user } = this.state;
    
    return (
      <form onSubmit={this.onSaveUser} className="signUp">
        <img src={logoImg} alt="" />
        <p>please enter your name:</p>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={user}
        />
        <button>SignUp</button>
      </form>
    );
  }
}



// const mapStateToProps = (state) => {
//   return {
//     user: state.userModule.loggedInUser,
//   };
// };

const mapDispatchToProps = {
  setUser
};

export const SignupPage = connect(null , mapDispatchToProps)(_SignupPage);