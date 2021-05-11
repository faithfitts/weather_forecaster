import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";

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
      weather: "",
      feelsLike: "",
      humidity: "",
      wind: "",
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
          weather: res.data.list[0].main.temp,
          feelsLike: res.data.list[0].main.feels_like,
          humidity: res.data.list[0].main.humidity,
          wind: res.data.list[0].wind.speed,
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
      weather,
      feelsLike,
      humidity,
      wind,
    } = this.state;

    if (!weather && !city && !description && !feelsLike && !humidity && !wind) {
      forecastDisplay = "";
    } else {
      forecastDisplay = (
        <div className="forecast-display">
          <h1>Current Forecast For: {city}</h1>
          <h1>Current Conditon: {description}</h1>
          <h1>Current Temp: {Math.floor(weather)}°F</h1>
          <h1>Feels Like: {Math.floor(feelsLike)}°F</h1>
          <h1>Humidity: {humidity}%</h1>
          <h1>Wind: {Math.floor(wind)} mph</h1>
        </div>
      );
    }

    return (
      <div className="heading">
        Weather Forecast!
        <Form
          weather={weather}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {forecastDisplay}
      </div>
    );
  }
}

export default Forecast;
