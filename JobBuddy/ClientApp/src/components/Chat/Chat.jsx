import React, { Component } from 'react';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
            bookingMessage: '',
            bookingHubConnection: null
        };
}

componentDidMount() {

  const bookingHubConnection = new signalR.HubConnectionBuilder()
  .withUrl("/chat")
  .configureLogging(signalR.LogLevel.Information)
  .build();

  this.setState({ bookingHubConnection }), () => {
    this.state.bookingHubConnection.start()
    .then(function () { console.log("connected");})
    .catch((err) => console.log('Error connecting signalr - ' + err));
  }


    this.state.bookingHubConnection.on('booking', (message) => {
        const bookingMessage = message;
        this.setState({ bookingMessage });
    });

}

render() {
    return (
        <div>
            <div>message from server {this.state.bookingMessage}</div>
            userName <input id="userName" />
            userMessage<input id="userMessage" />
            <button id = "sendMessage"> sendMessage</button>
        </div>
    )
}
}

export default Chat;