import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class DebatePicker extends React.Component {
  myInput = React.createRef();

  goToDebate = event => {
    const { history } = this.props;
    // 1. Stop the form from Submitting automatically
    event.preventDefault();
    // 2. Get text from the Input
    const pathName = this.myInput.value.value;
    // 3. Change the page to /debate/whatever-they-entered
    history.push(`/debate/${pathName}`);
  };

  render() {
    return (
      <Fragment>
        <div className="debate-picker__container">
          <h1 className="debate-picker__heading">DESIGN PATTERN DEBATES</h1>
          <form className="debate-selector__form" onSubmit={this.goToDebate}>
            <label>Debate Name</label>
            <input
              ref={this.myInput}
              type="text"
              required
              placeholder="Debate Name"
              defaultValue={getFunName()}
            />
            <button type="submit">Create Debate</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default DebatePicker;
