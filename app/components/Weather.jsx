var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSerch: function(location){    
        var that = this;    
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        },function(errorMessage){
            alert(errorMessage);
            that.setState({
                isLoading: false
            })
        });
    },
    render: function(){
        var location = this.state.location;
        var temp = this.state.temp;
        var isLoading =this.state.isLoading;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }else if (temp && location){
                return <WeatherMessage location={location} temp={temp} />;
            }
        }
        return(
            <div>
                <h3>Get Weayher</h3>
                <WeatherForm  onSearch={this.handleSerch}/>

                {renderMessage()}
            </div>
            
        )
    }
});

module.exports = Weather;