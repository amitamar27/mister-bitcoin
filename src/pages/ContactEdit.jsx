import React, { Component } from "react";
import { contactService } from "../services/contactService.js";
import { Oval } from "react-loader-spinner";


export class ContactEdit extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    console.log(this);
    const contactId = this.props.match.params.id;
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact();
    this.setState({ contact });
  }

  
  get titlePage() {
    if (this.props.match.params.id) return "Edit";
    return "Add";
  }
  
  onSaveContact = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...this.state.contact });
    this.props.history.push("/contacts");
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }));
  };

  onRemoveContact = async (ev,id) => {
    ev.preventDefault()
    await contactService.deleteContact(id)
    this.props.history.push("/contacts");

  }

  render() {
    const { contact } = this.state;
    if (!contact) return <Oval color="#03a9f4" height={40} width={40} />;
    const imgUrl = `https://robohash.org/${contact._id}`;
    return (
      <div className="edit-container">
        <h2>{this.titlePage}</h2>
        <form onSubmit={this.onSaveContact}>
          <img src={imgUrl} alt="" />
          {/* name */}
          <label htmlFor="name">Name:</label>
          <input
            onChange={this.handleChange}
            value={contact.name}
            type="text"
            name="name"
            id="name"
          />
          {/* email */}
          <label htmlFor="email">Email:</label>
          <input
            onChange={this.handleChange}
            value={contact.email}
            type="text"
            name="email"
            id="email"
          />
          {/* phone */}
          <label htmlFor="phone">Phone:</label>
          <input
            onChange={this.handleChange}
            value={contact.phone}
            type="number"
            name="phone"
            id="phone"
          />
          <button>Save</button>
          <button onClick={(event)=>this.onRemoveContact(event,contact._id)}>Delete</button>
        </form>
      </div>
    );
  }
}
