import React, {Component} from 'react';
import moment from 'moment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

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
        const duration = moment.duration(seconds * 1000);
        const sec = duration.seconds();
        const min = duration.minutes();
        const hrs = duration.hours();
        return (hrs < 10 ? `0${hrs}`: `${hrs}`) + ':' + (min < 10 ? `0${min}`: `${min}`) + ':' + (sec < 10 ? `0${sec}`: `${sec}`);
    }

    removeTracker = () => {
        this.stopTimer();
        this.props.removeTracker(this.state.tracker.index);
    };

    render () {
        const {tracker, time} = this.state;
        return <div className={'item ' + (!tracker.pause ? 'active' : '')}>
            <span>{tracker.name}</span>
            <div>
                <span>{this.displayTime(time)}</span>
                {tracker.pause ?
                    <PlayCircleOutlineIcon onClick={this.manageTimer}/>
                    : <PauseCircleOutlineIcon onClick={this.manageTimer}/>
                }
                <RemoveCircleOutlineIcon style={{color: '#D2697A'}} onClick={this.removeTracker}/>
            </div>
        </div>
    }
}

export default Tracker;
