import React from "react"
import ProsForm from "./ProsForm"
import ConsForm from "./ConsForm"
import base from "../base";

class PatternOne extends React.Component {
    descriptionRef = React.createRef();
    proDescriptionRef = React.createRef();
    conDescriptionRef = React.createRef();

    state = {
        votes: {},
        pros: {},
        cons: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.votesRef = base.syncState(`${params.id}/pattern-one/votes`, {
            context: this,
            state: "votes"
        })

        this.prosRef = base.syncState(`${params.id}/pattern-one/pros`, {
            context: this,
            state: "pros"
        })

        this.consRef = base.syncState(`${params.id}/pattern-one/cons`, {
            context: this,
            state: "cons"
        })
    }

    // componentWillUnmount() {
    //     base.removeBinding(this.ref);
    // }

    addVote = (e) => {
        const { descriptionRef } = this
        const vote = {
            date: new Date().toJSON().slice(0, 10),
            description: descriptionRef.value.value
        }
        // 1. Take a copy of the existing state
        const votes = { ...this.state.votes };
        // 2. Add our new fish to that fishes
        votes[`vote${Date.now()}`] = vote
        // 3. Set the new fishes object to state
        this.setState({ votes });
        e.preventDefault();
        e.currentTarget.reset()
    }

    addPro = (e) => {
        const { proDescriptionRef } = this
        const pro = {
            date: new Date().toJSON().slice(0, 10),
            description: proDescriptionRef.value.value
        }
        // 1. Take a copy of the existing state
        const pros = { ...this.state.pros };
        // 2. Add our new fish to that fishes
        pros[`pro${Date.now()}`] = pro
        // 3. Set the new fishes object to state
        this.setState({ pros });
        e.preventDefault();
        e.currentTarget.reset()
    }

    addCon = (e) => {
        e.preventDefault();
        const { conDescriptionRef } = this
        const con = {
            date: new Date().toJSON().slice(0, 10),
            description: conDescriptionRef.value.value
        }
        // 1. Take a copy of the existing state
        const cons = { ...this.state.cons };
        // 2. Add our new fish to that fishes
        cons[`con${Date.now()}`] = con
        // 3. Set the new fishes object to state
        this.setState({ cons });

        e.currentTarget.reset()
    }

    render() {
        console.log(this.state.votes)
        return (
            <div>
                <img className="image1" src="https://via.placeholder.com/300.png/09f/fff" alt="" />
                <form onSubmit={this.addVote}>
                    <textarea
                        ref={this.descriptionRef}
                        placeholder="Description">
                    </textarea>
                    <button>
                        <i className="fa fa-chevron-up fa-3x meeting-voting-up-arrow"></i>
                        <h1>{this.state.votes ? Object.keys(this.state.votes).length : 0}</h1>
                    </button>
                </form>

                <ProsForm
                    addPro={this.addPro}
                    pros={this.state.pros}
                    proDescriptionRef={this.proDescriptionRef} />

                <ConsForm
                    addCon={this.addCon}
                    cons={this.state.cons}
                    conDescriptionRef={this.conDescriptionRef} />
            </div>
        )
    }
}

export default PatternOne;





// <button onClick={this.loadSamples}>Load Samples</button>

// <ul>
//                     {
//                         Object.keys(this.state.votes).map(key => (
//                             <Observation key={key} details={this.state.votes[key]} />
//                         ))
//                     }
//                 </ul>
