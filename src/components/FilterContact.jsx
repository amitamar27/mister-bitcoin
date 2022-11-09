import { Component } from "react";
import { Link } from "react-router-dom";



export class FilterContact extends Component {
  state = {
    term: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state);
    });
  };

  // onEditContact = (ev) => {
  //   console.log(this.props);
  //   ev.preventDefault();
  //   ev.stopPropagation();
  //   history.push(`/edit/`);
  // }

  render() {
    const { term } = this.state;
    return (
      <section className="filter-container">
        <form className="filter">
          <input
            type="text"
            className="contact-search"
            name="term"
            placeholder="Search..."
            onChange={this.handleChange}
            value={term}
          />
        </form>
        <Link to={'/edit/'}>
          <button>Add Contact</button>
        </Link>
      </section>
    );
  }
}
