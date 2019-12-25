import React from 'react';
import {Component} from 'react';
import '../components.css';
import {Container, Row, Col} from 'react-bootstrap';
import Tile from './Tile';
import Header from './Header';
import Loading from './Loading';
import {constants} from './secrets.js';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: [],
            weatherDescription: [],
            dates: [],
            city: "",
            loaded: false
        }
    }

    renderTile(num){
        let isLong = (num === 0) ? false : true;
        return (
            <Tile isLongTile={isLong} weatherData={this.state.temp[num]} weatherDes={this.state.weatherDescription[num]} date={this.state.dates[num]}/>
        );
    }

    getTodayDate(){
        let todayDate = new Date();
        let dd = String(todayDate.getDate()).padStart(2, '0');
        let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); 
        let yyyy = todayDate.getFullYear();
        return (yyyy+"-"+mm+"-"+dd);
    }

    // get current user location
    getLocation(){ 
        if (navigator.geolocation) {
            // return location as in JSON
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej)
            });
        }
        return 'Toronto';
    }

    // make custom api urls
    getApiURL(location){
        const apiKey = constants.apiKey;
        let todayURL = 'https://api.openweathermap.org/data/2.5/weather?';
        let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?'; 
        let end = (location === 'Toronto') ? 'q=Toronto' : 'lat=' + location.coords.latitude + '&lon=' + location.coords.longitude;
        todayURL += end + '&units=metric&appid=' + apiKey;
        forecastURL += end + '&units=metric&appid=' + apiKey;
        return [todayURL, forecastURL];
    }

    // api call function
    async componentDidMount() {
        let location = await this.getLocation();
        let urls = this.getApiURL(location);
        let today = this.getTodayDate();

        // weather data from api call
        let temp = [];
        let weatherDescription = [];
        let dates = [];
        let cityLocation = "";

        // get today's weather
        await fetch(urls[0]).then(res => res.json()).then((data) => {
            temp.push(data.main.temp);
            weatherDescription.push(data.weather[0].main);
            dates.push(today);
            cityLocation = data.name;
        });

        // get weather forecast from the api
        await fetch(urls[1]).then(res => res.json()).then((data) => {

            let list = data.list;
            // look for weather that at 12:00 and parse the weather data for temperature, weather description, and date
            for (let i = 0; i < list.length; i++){
                let str = list[i].dt_txt;
                if (!(str.includes(today)) && str.includes('12:00:00')){
                    console.log(list[i]);
                    let weatherData = list[i];
                    temp.push(weatherData.main.temp);
                    weatherDescription.push(weatherData.weather[0].main);
                    dates.push(weatherData.dt_txt.substring(0, 10));
                }
            }
    
            this.setState({
                temp: temp,
                weatherDescription: weatherDescription,
                dates: dates,
                city: cityLocation,
                loaded: true
            });
        }).catch(console.log('An error occurred while retrieving weather data'));
    }

    render() { 
        let styles = "body ";
        styles += (this.state.weatherDescription[0] === null) ? "na" : this.state.weatherDescription[0];
        styles += " commonBgdClass";

        return ( 
            <React.Fragment>
                {this.state.loaded ? (
                    <div className={styles}>
                        <Header city={this.state.city} />
                        <Container style={{textAlign: "center"}}>
                            <Row >
                                <Col style={{textAlign: "center", paddingBottom: "2%"}}>
                                    {this.renderTile(0)}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {this.renderTile(1)}
                                </Col>
                                <Col>
                                    {this.renderTile(2)}
                                </Col>
                        
                                <Col>
                                    {this.renderTile(3)}
                                </Col>
                                <Col>
                                    {this.renderTile(4)}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ) : (
                    // loading screen
                    <Loading />
                )}
            </React.Fragment>  
        );
    }
}
 
export default Body;