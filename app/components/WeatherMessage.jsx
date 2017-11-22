var React = require('react');

// var WeatherMessage = React.createClass({

//     render: function(){
//         var temp = this.props.temp;
//         var location = this.props.location;
//         return(
//             <div>
//                 <h3>It's it {temp} in {location}</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">
      It's it {temp} in {location}
    </h3>
  );
};

module.exports = WeatherMessage;