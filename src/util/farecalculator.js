const calculateFare = (baseFare, timeRate, time,  distanceRate, distance, surge)=>{
	const distanceInKm = distance;
	const timeInMin = time;
	const pricePerKm = timeRate * timeInMin;
	const pricePerMinute = distanceRate * distanceInKm;
	const totalFare = (baseFare + pricePerKm + pricePerMinute) * surge;
	return Math.round(totalFare);
};

export default calculateFare;