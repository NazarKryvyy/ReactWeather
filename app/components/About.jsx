var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About components</h3>
//         )
//     }
// });

//is the same

var About = (props) =>{
    return (
        <h3>About components</h3>
    );
}

module.exports = About;