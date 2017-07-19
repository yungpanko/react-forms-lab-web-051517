import React from 'react';
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage}/>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}



export default TwitterMessage;
