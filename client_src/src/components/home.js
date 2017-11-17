import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/meetups').then(res => {
      this.setState({
        meetups: res.data
      });
    });
  }

  renderMeetup(meetup) {
    return (
      <li key={meetup._id}>
        {meetup.name} --- {meetup.city}
      </li>
    );
  }

  render() {
    return <ol>{this.state.meetups.map(this.renderMeetup)}</ol>;
  }
}
