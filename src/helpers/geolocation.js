let getCoordinates = () => {
    let geo_options = {
        enableHighAccuracy: false,
        maximumAge: 30000,
        timeout: 27000
    }

    if (!navigator.geolocation) {
        console.log('Geolocation is disabled');
    } else {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, geo_options);
        })
    }
}

export default getCoordinates;