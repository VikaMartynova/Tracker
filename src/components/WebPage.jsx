import React, {Component} from 'react';
import '../styles/style.scss';
import TrackerInput from './TrackerInput';
import TrackerList from './TrackerList';

class WebPage extends Component {

    state = {
        trackers: []
    };

    addTracker = (newTracker) => {
        let trackers = this.state.trackers;
        trackers.unshift(newTracker);
        this.setState({trackers: trackers});
    };

    removeTracker = (trackerIndex) => {
      this.setState({trackers: this.state.trackers.filter(tr => tr.index !== trackerIndex)});
    };

    render() {
        return <div className='container'>
            <h1>tracker</h1>
            <TrackerInput addTracker={this.addTracker} />
            <TrackerList trackers={this.state.trackers} removeTracker={this.removeTracker}/>
        </div>
    }
}

export default WebPage;