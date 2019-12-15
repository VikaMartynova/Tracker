import React, {Component} from 'react';
import Tracker from './Tracker';


class TrackerList extends Component {

    render() {
        const trackerList = this.props.trackers.map(tracker =>
           <li key={tracker.index}>
               <Tracker tracker={tracker} removeTracker={this.props.removeTracker}/>
           </li>
        );
        return (
            <ul>{trackerList}</ul>
        );
    }
}

export default TrackerList;