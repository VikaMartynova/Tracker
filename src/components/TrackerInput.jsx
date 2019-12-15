import React, {Component} from 'react';
import '../styles/input.scss';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

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
        const name = this.state.name || 'Tracker #' + (new Date()).toLocaleString('en-GB');
        const tracker = {
                index: this.state.index,
                name: name,
                time: 0,
                pause: false
            };
        this.props.addTracker(tracker);
        this.setState({name: '', index: ++this.state.index});
    };

    render() {
        const iconStyle = {
            position: 'absolute',
            right: 0,
            bottom: 3,
            width: '41px',
            height: '41px',
            fill: '#3FAF6C'
        };
        return <form onSubmit={this.createTracker}>
            <input type='text' name='name' placeholder='Enter track name' value={this.state.name} onChange={this.handleNameChange}/>
            <PlayCircleFilledIcon style={iconStyle} onClick={this.createTracker}/>
        </form>
    };
}

export default TrackerInput;