var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require("ErrorModal");
var openWeatherMap = require("openWeatherMap");



var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSerch: function(location){    
        var that = this;    
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            lacatioin: undefined,
            temp: undefined
        });
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        },function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            })            
        });
    },
    componentDidMount: function(){
        var location = this.props.location.query.location;
        if(location && location.length > 0){
            this.handleSerch(location)
            window.location.hash ='/#';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        if(location && location.length > 0){
            this.handleSerch(location)
            window.location.hash ='/#';
        }
    },
    render: function(){
        // var location = this.state.location;
        // var temp = this.state.temp;
        // var isLoading =this.state.isLoading;
        // var errorMessage = this.state.ErrorMessage;
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }else if (temp && location){
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        function renderError (){
            if(typeof errorMessage === 'string'){
                return <ErrorModal message={errorMessage} />;
            }
        }
        return(
            <div>
                <h1 className="text-center page-title" >Get Weather</h1>
                <WeatherForm  onSearch={this.handleSerch}/>
                {renderMessage()}
                {renderError()}
            </div>
            
        )
    }
});

module.exports = Weather;