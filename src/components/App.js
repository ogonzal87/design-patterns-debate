import React from "react";
import PatternOne from "./PatternOne";
import PatternTwo from "./PatternTwo";

class App extends React.Component {
    render() {
        return (
            <div className="patterns-container">
                <PatternOne match={this.props.match} />
                <PatternTwo match={this.props.match} />
            </div>
        );
    }
}

export default App;
