import React from "react";
import { Link } from "react-router-dom"


export function ContactPreview({ contact }) {

  const imgUrl = `https://robohash.org/${contact.name}`
  return (
    <Link to={`/details/${contact._id}`}>
      <div className="contact-preview">
        <img className="contact-img" src={imgUrl} alt="" />
        <p className="contact-name">{contact.name}</p>
      </div>
      <hr style={{ color: "#fff" }} />
    </Link>
  );
}
