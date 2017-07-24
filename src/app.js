import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './app.css';

class App extends Component {
  componentDidMount() {
    const notification_after_mount = {
      title: 'Electron App Ready',
      body: 'Your electron app is ready. Click on the spinning logo.'
    }

    const notification_after_click = {
      title: 'Logo Clicked',
      body: 'You clicked the logo.'
    }

    const notificationButton = document.getElementById('notif')

    // new window.Notification(notification_after_mount.title, notification_after_mount)

    notificationButton.addEventListener('click', function () {
      let myInit = {
        method: 'GET',
        headers: {
          "Authorization": "Token token=_",
        },
        mode: 'no-cors',
        cache: 'default',
        credentials: 'include',
      };

      console.log(myInit)

      let myRequest = new Request("url_goes_here", myInit);

      fetch(myRequest).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error.message);
      });
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <a id='notif'><img src={logo} className="App-logo" alt="logo" /></a>
          <h2>Welcome to React-Electron</h2>
        </div>
        <p className="App-intro">
          This was created using create-react-app and has Electron dependencies so that it can easily be transferred to Electron later.
        </p>
        <p>
          Node {window.process.versions.node},
          Chrome {window.process.versions.chrome},
          and Electron {window.process.versions.electron}.
        </p>
      </div>
    );
  }
}

export default App;
