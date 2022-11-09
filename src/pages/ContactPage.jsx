import React, { Component } from "react";
// import { contactService } from "../services/contactService.js";
import { ContactList } from "../components/ContactList.jsx";
import { FilterContact } from "../components/FilterContact.jsx";
import { connect } from "react-redux";
import { loadContacts, setFilterBy } from "../store/actions/contactsActions.js";

 class _ContactPage extends Component {

  
   async componentDidMount() {
    this.props.loadContacts()
  }


  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy);
    this.props.loadContacts();
  };

  render() {
    const { contacts } = this.props;
    if (!contacts) return <div>Loading...</div>;

    return (
      <div className="contacts-container">
        <FilterContact onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactModule.contacts
  };
};

const mapDispatchToProps = {
  loadContacts,
  setFilterBy
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);