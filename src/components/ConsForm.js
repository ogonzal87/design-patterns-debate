import React from "react"
import Observation from "./observation"

export default class ConsForm extends React.Component {
  state = {
    con: ''
  };

  render() {
    return (
      <div>
        <form className="" onSubmit={this.props.addCon}>
          <input ref={this.props.conDescriptionRef} required />
          <button className="og-button og-button--primary og-button--s">Add Con</button>
        </form>
        <ul>
          {
            this.props.cons && Object.keys(this.props.cons).map(key => (
              <Observation key={key} details={this.props.cons[key]} />
            ))
          }
        </ul>
      </div>
    );
  }
}

// <Link to="/page-2/">Go to page 2</Link>
