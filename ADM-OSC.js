/* ADMix Player OSC module
Receive datas and parse them to Values
Want to know more and a ADM OSC free player please visit https://forum.ircam.fr/projects/detail/admix/
Supported parameter : track/channel/ x y z
*/

// Scripts parameters
var TrackX = script.addPoint2DParameter("Track #,X","Object number and X position");
var TrackY = script.addPoint2DParameter("Track #,Y","Object number and Y position");
var TrackZ = script.addPoint2DParameter("Track #,Z","Object number and Z position");

function init()
{
}

/**
 * Called when an OSC message is received
 * Parse received values 
 * @param {string} address 
 * @param {array} args 
 */
function oscEvent(address, args)
{
	var AD="/track/";
	var IDstr=address.substring(AD.length, address.length);
	ID=parseInt(IDstr.substring(0, IDstr.indexOf("/")));

	if(ID<=64)
	{	
		if(local.match(address, AD+"*/x")) // This is a sound object positioning X
		{
			TrackX.set(ID, args[0]);
		}
		else if(local.match(address, AD+"*/y")) // This is a sound object positioning Y
		{
			TrackY.set(ID, args[0]);
		}
		else if(local.match(address, AD+"*/z")) // This is a sound object positioning Z
		{
			TrackZ.set(ID, args[0]);
		}
		else script.logWarning("OSC Event parser received useless OSC messages: " + address + " " + args);
	}
	else script.logWarning("Received more than 64 objects, dismissed #" + ID);
}
