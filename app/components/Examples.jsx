var React = require('react');

// var Examples = React.createClass({
//     render: function(){
        
//     }
// });

//is the same

var Examples = (props) => {
    return(
        <div>
            <h3>Examples components</h3>
            <p>Welcome to Example page</p>
        </div>
        
    )
}

module.exports = Examples;