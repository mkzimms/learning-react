var React = require('react');
var ReactDOM = require('react-dom');


var Listing = React.createClass({

    render: function () {
        var family2 = this.props.names.map(function(family){
            return <li>{family}</li>;
        });

        return (
            <div><ul> {family2} </ul></div>
        )
    }
});

var Hello = React.createClass({
    render: function () {
        var family = ['mike','andrea','derek'];
        return (
            <div>
                Testing React, {this.props.name}
                <Listing names={family} />
            </div>
        )
    }
});

ReactDOM.render(<Hello name="this is a prop" />, document.getElementById('app'));