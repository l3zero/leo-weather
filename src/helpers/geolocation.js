module.exports = {
    getCoordinates: () => {

        let geo_options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 3000
        }

        if (!navigator.geolocation) {
            return 'Geolocation is not supported by your browser';
        } else {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, geo_options);
            })
        }
    }
}