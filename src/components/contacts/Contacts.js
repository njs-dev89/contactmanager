import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {({ contacts }) => {
          return (
            <Fragment>
              <h1 className="display-4 mb-4">Contact List</h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
