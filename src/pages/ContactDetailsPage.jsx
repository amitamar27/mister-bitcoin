import React, { Component } from "react";
import { contactService } from "../services/contactService.js";
import { Link } from "react-router-dom";
import { TransferFund } from "../components/TransferFund.jsx";
import {userService} from '../services/UserService.js'
import { MovesList } from "../components/MovesList.jsx";
import { spendBalance } from "../store/actions/userActions.js";
import { connect } from "react-redux";

export class _ContactDetailsPage extends Component {
  
  state = {
    contact: null,
    nextContact: null,
    loggedInUser:null
  };
 
  componentDidMount() {
    this._loadContact();
    this._getLoggedInUser()
  }
  
  _getLoggedInUser() {
    const loggedInUser = userService.getUser();
    this.setState({ loggedInUser });
    console.log(loggedInUser);
  }

  async _loadContact() {
    const contact = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ contact });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.nextContactDetalis(prevProps.match.params.id);
    }
  }

  async nextContactDetalis(currContactId) {
    const nextContact = await contactService.getNextContactById(currContactId);
    this.setState({ nextContact }, this._loadContact);
  }

  addMove = (amount, contact) => {
    // userService.addMove(contact , +amount)
    this.props.spendBalance(contact , amount);
  };

  render() {
    const { contact, nextContact ,loggedInUser} = this.state;
    if (!contact && !nextContact) return <div>Loading...</div>;

    return (
      <div className="contact-details">
        {/* <h2>Contact Details</h2> */}
        <div className="contact">
          <img src={`https://robohash.org/${contact.name}`} alt="" />
          <div className="details">
            <label htmlFor="">
              Name:<h3>{contact.name}</h3>
            </label>
            <hr />
            <label htmlFor="">
              Phone:<h3>{contact.phone}</h3>
            </label>
            <hr />
            <label htmlFor="">
              Email:<h3>{contact.email}</h3>
            </label>
            <TransferFund props={this.props} contact={contact} addMove={this.addMove} />
            <MovesList moves={loggedInUser.moves} />
            <button onClick={this.props.history.goBack}>Back</button>
            <Link to={`/edit/${contact._id}`}>
              <button>Edit Contact</button>
            </Link>
            <Link to={`/details/${nextContact}`}>Next</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  };
};


const mapDispatchToProps = {
  spendBalance
};


export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage);


