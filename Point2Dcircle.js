/*
MD 28/06/2022 
This function takes Point2D as center and add to its position (X,Y) a distance/angle offset
*/
var Distance = script.addFloatParameter("Distance", "Distance from center",0.5,0,1);
var Azimuth = script.addFloatParameter("Azimuth", "Azimuth angle from center in degrees",0);

function filter(inputs, minValues, maxValues, multiplexIndex)
{
	var result = [];
    var AzimRad = Azimuth.get()/180*Math.PI; 
	result[0] = [inputs[0][0]+(Distance.get()*Math.sin(AzimRad)) , inputs[0][1]+(Distance.get()*Math.cos(AzimRad))];
	return result;
}