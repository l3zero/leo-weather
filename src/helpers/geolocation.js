module.exports = {
    getCoordinates: () => {

        if (!navigator.geolocation) {
            return 'Geolocation is disabled';

        } else {
            return (navigator.geolocation.getCurrentPosition(success, error));
        }

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            return latitude;
        }

        function error() {
            console.log('There has been an error using geolocation');
        }
    }

}

// document.querySelector('#find-me').addEventListener('click', getCoordinates);