let React = require('react');
let ReactDOM = require('react-dom');


let Listing = React.createClass({

  render: function () {
    let family2 = this.props.names.map(function (family, idx) {
      return <li key={idx}>{family}</li>;
    });

    return (
        <div>
          <ul>{family2}</ul>
        </div>
    )
  }
});

let Hello = React.createClass({
  render: function () {
    let family = ['mike', 'andrea', 'derek'];
    return (
        <div>
          Testing React, {this.props.name}
          <Listing names={family}/>
        </div>
    )
  }
});

ReactDOM.render(<Hello name="this is a prop"/>, document.getElementById('app'));