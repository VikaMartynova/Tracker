import React, {Component} from 'react';
import '../styles/style.scss';
import TrackerInput from './TrackerInput';
import Tracker from './Tracker';

class WebPage extends Component {

    state = {
        trackers: JSON.parse(localStorage.getItem('trackers') || '[]')
    };

    saveTrackers() {
        localStorage.clear();
        localStorage.setItem('trackers', JSON.stringify(this.state.trackers));
    }

    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            this.saveTrackers();
        });
    }

    addTracker = (newTracker) => {
        let trackers = this.state.trackers;
        trackers.unshift(newTracker);
        this.setState({trackers: trackers});
    };

    removeTracker = (trackerIndex) => {
      this.setState({trackers: this.state.trackers.filter(tr => tr.index !== trackerIndex)});
    };

    updateList = (tracker) => {
        // todo: update array of trackers to save real data to localstorage
        console.log(tracker, '----track----');
        // const trackers = this.state.trackers;
        // const currentTracker = trackers.filter(tr => tr.index === tracker.index)[0];
        // const index = trackers.indexOf(currentTracker);
        // const newTr = trackers.splice(index, 1, tracker);
        // this.setState({trackers: newTr});
    };

    render() {
        const trackerList = this.state.trackers.map(tracker =>
            <li key={tracker.index}>
                <Tracker tracker={tracker} removeTracker={this.removeTracker} updateList={this.updateList}/>
            </li>
        );
        return <div className='container'>
            <h1>tracker</h1>
            <TrackerInput addTracker={this.addTracker} />
            <ul>{trackerList}</ul>
        </div>
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload',  () => {
            this.saveTrackers();
        });
    }
}

export default WebPage;