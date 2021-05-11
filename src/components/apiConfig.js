let apiUrl;
const apiUrls = {
  production: "https://openweathermap.org",
  development: "https://openweathermap.org",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
