#pragma strict
//The ball is starting @ position [0, 1.71]
var Xcomponent= 0.0;
var Ycomponent= 0.0;
var Xspeed=0.0;
var Yspeed=0.0;


function Start () {
	moveBall();
}	
 Xspeed= Xcomponent;
 Yspeed= Ycomponent;

function Update () {
	this.transform.position.y -= Yspeed*10;
	this.transform.position.x += Xspeed*10;
}

function moveBall() {
// if (score< some level) 
Xcomponent= Random.Range (1.0, 1.574);
Ycomponent= Random.Range (0.0, 0.5) ;
var UpDown= Random.Range (0, 2);
if (UpDown <= 1) 
	Ycomponent -= 1.71;
	//If Y coordinate position of starting point for ball changes, change this number to equal the new starting point y coordinate.
else 
	Ycomponent += -.21;
	//If Y coordinate pos of starting point for ball changes, change num to (new Y - 1.5).
var RightLeft= Random.Range (0,2);
if (RightLeft <= 1)
	Xcomponent *= -1;
	//Ball will go left
else 
	Xcomponent *= 1;
	//Ball will go right
}
