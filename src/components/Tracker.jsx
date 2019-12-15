import React, {Component} from 'react';

class Tracker extends Component {

    state = {
        tracker: this.props.tracker,
        time: this.props.tracker.time
    };

    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        this.timer = setInterval(() => this.setState({
            time: this.state.time + 1
        }), 1000);
    };
    stopTimer = () => {
        clearInterval(this.timer);
    };
    manageTimer = () => {
        const pauseState = this.state.tracker.pause;
      if (pauseState) {
          this.startTimer();
      } else {
          this.stopTimer();
      }
      const newTracker = Object.assign({},this.state.tracker, {pause: !pauseState});
      this.setState({tracker: newTracker});
    };

    displayTime(seconds) {
        const hrs = Math.floor(seconds / (60*60));
        const min = Math.floor((seconds / (60*60) - hrs) * 60);
        const sec = Math.floor(((seconds/ (60*60) - hrs) * 60 - min) * 60);
        return (hrs < 10 ? `0${hrs}`: `${hrs}`) + ':' + (min < 10 ? `0${min}`: `${min}`) + ':' + (sec < 10 ? `0${sec}`: `${sec}`);
    }

    removeTracker = () => {
        this.stopTimer();
        this.props.removeTracker(this.state.tracker.index);
    };

    render () {
        const {tracker, time} = this.state;
        return <div>
            <span>{tracker.name || `name tracker ${tracker.index}`}</span>
            <span>{this.displayTime(time)}</span>
            <button className={'btn ' + (tracker.pause ? 'btn-pause' : 'btn-play')} onClick={this.manageTimer}>{this.state.tracker.pause ? 'Start' : 'Pause'}</button>
            <button className="btn-remove" onClick={this.removeTracker}>Remove</button>
        </div>
    }
}

export default Tracker;
