// Library for creating a zone for GPS coordinates.
const earthRadiusKm = 6371;

function toDegrees(radians){
    return radians / (Math.PI / 180);
}

function toRadians(degrees) {
    return Math.PI / 180 * degrees;
}

function calcDistance(lat1, lng1, lat2, lng2){
    const rlat1 = toRadians(lat1);
    const rlat2 = toRadians(lat2); 
    const rHalfDeltaLat = toRadians( (lat2 - lat1) / 2);
    const rHalfDeltaLng = toRadians( (lng2 - lng1) / 2);

    return 2 * earthRadiusKm * Math.asin(Math.sqrt(Math.pow(Math.sin(rHalfDeltaLat), 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(rHalfDeltaLng), 2)));
}

function GeoPoint(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}

function findPoint(lat, lng, bearing, distance) {
    const rlat = toRadians(lat);
    const rLng = toRadians(lng);
    const rBearing = toRadians(bearing);
    const AngleDistance = distance/earthRadiusKm;

    const rlat2 = Math.asin(Math.sin(rlat) * Math.cos(AngleDistance) + Math.cos(rlat) * Math.sin(AngleDistance) * Math.cos(rBearing));
    const rlng2 = rLng + Math.atan2(Math.sin(rBearing) * Math.sin(AngleDistance) * Math.cos(rlat), Math.cos(AngleDistance) - Math.sin(rlat) * Math.sin(rlat2));
    
    const plat = toDegrees(rlat2);
    const plng = toDegrees(rlng2);
    
    return new GeoPoint(plat, plng)
}
function calcArea(lat, lng, distanceKm) {
    var northPoint = findPoint(lat, lng, 0, distanceKm);
    var eastPoint = findPoint(lat, lng, 90, distanceKm);
    var southPoint = findPoint(lat, lng, 180, distanceKm);
    var westPoint = findPoint(lat, lng, 270, distanceKm);
    return new GeoArea(lat, lng, distanceKm, northPoint, southPoint, eastPoint, westPoint);
}
function GeoArea(centerLat, centerLng, distanceKm, northPoint, southPoint, eastPoint, westPoint) {
        this.northPoint = northPoint;
        this.southPoint = southPoint;
        this.eastPoint = eastPoint;
        this.westPoint = westPoint;
        this.inArea = function (lat, lng) {
            const inBox = southPoint.lat <= lat && lat <= northPoint.lat && westPoint.lng <= lng && lng <= eastPoint.lng;
            if (inBox) {
                const distanceFromCenterKm = calcDistance(centerLat, centerLng, lat, lng);
                return distanceFromCenterKm <= distanceKm;
            } else {
                return false;
            }
        }
}

export {calcArea}