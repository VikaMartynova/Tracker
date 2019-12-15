import React, {Component} from 'react';

class TrackerInput extends Component {

    state = {
        name: '',
        index: 0
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    createTracker = (event) => {
        event.preventDefault();
        const tracker = {
                index: this.state.index,
                name: this.state.name,
                time: 0,
                pause: false
            };
        this.props.addTracker(tracker);
        this.setState({name: '', index: ++this.state.index});
    };

    render() {
        return <form onSubmit={this.createTracker}>
            <input type='text' name='name' placeholder='Enter track name' value={this.state.name} onChange={this.handleNameChange}/>
            <button type='submit' onClick={this.createTracker}>Create</button>
        </form>
    };
}

export default TrackerInput;