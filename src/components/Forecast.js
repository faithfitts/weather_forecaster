import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Card from "react-bootstrap/Card";

// Open Weather API Call
const apiKey = "ee272a441023608a6dff62d428450270";
const config = {
  apiUrl: `https://api.openweathermap.org/data/2.5/forecast?units=imperial&us&appid=${apiKey}&zip=`,
};

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: "",
      city: "",
      description: "",
      temperature: "",
      feelsLike: "",
      humidity: "",
      wind: "",
      condition: "",
    };
  }

  handleChange = (event) => {
    event.persist();
    this.setState({ zipCode: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`${config.apiUrl}${this.state.zipCode}`)
      .then((res) =>
        this.setState({
          city: res.data.city.name,
          description: res.data.list[0].weather[0].description,
          temperature: res.data.list[0].main.temp,
          feelsLike: res.data.list[0].main.feels_like,
          humidity: res.data.list[0].main.humidity,
          wind: res.data.list[0].wind.speed,
          condition: res.data.list[0].weather[0].main,
        })
      )
      .catch((error) => {
        window.alert("Uh oh! Something Went Wrong!");
      });
    event.target.reset();
  };

  render() {
    let forecastDisplay;
    const {
      city,
      description,
      temperature,
      feelsLike,
      humidity,
      wind,
      condition,
    } = this.state;

    if (!city) {
      forecastDisplay = "";
    } else if (condition === "Clear") {
      forecastDisplay = (
        <div className="forecast">
          <Card className="clear">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    } else if (condition === "Clouds") {
      forecastDisplay = (
        <div className="forecast">
          <Card className="clouds">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    } else if (condition === "Rain" || "Drizzle") {
      forecastDisplay = (
        <div className="forecast">
          <Card className="rain">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    } else if (condition === "Snow") {
      forecastDisplay = (
        <div className="forecast">
          <Card className="snow">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    } else if (condition === "Thunderstorm") {
      forecastDisplay = (
        <div className="forecast">
          <Card className="thunderstorm">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    } else {
      forecastDisplay = (
        <div className="forecast">
          <Card className="default">
            <h1>Current Forecast For: {city}</h1>
            <h1>Current Conditon: {description}</h1>
            <h1>Current Temp: {Math.floor(temperature)}°F</h1>
            <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
            <h1>Humidity: {humidity}%</h1>
            <h1>Wind: {Math.floor(wind)} mph</h1>
          </Card>
        </div>
      );
    }

    return (
      <div className="heading" style={{ marginTop: "80px" }}>
        <h1>Weather Forecaster!</h1>
        <h4>Enter A Zip Code Below To See The Current Tempurature</h4>
        <Form
          temperature={temperature}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {forecastDisplay}
      </div>
    );
  }
}

export default Forecast;
