var service = {}
// Local
if (window.location.href.startsWith('http://localhost')) {
    service.API_URL = "http://localhost:3002";
} else {
    service.API_URL = "https://api-blivclub.pyther.com/api"
}

export default service;
