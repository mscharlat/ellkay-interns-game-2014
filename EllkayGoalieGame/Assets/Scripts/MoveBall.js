#pragma strict

//The ball is starting @ position [0, 1.71]

var Xcomponent= 0.0;
var Ycomponent= 0.0;
var Xspeed=0.0;
var Yspeed=0.0;
var UpDown = 0;
var chooseQuadrant = 0;
var screenwidth = Screen.width;
var screenhiehgt = Screen.height;
var speedBall = 0;
var difficulty = 0.0;
var saves : GUIText;
var score : int;
//var spriteRenderer : SpriteRenderer;



function ChoosingQuadrant()
{

chooseQuadrant = Random.Range(0,3) ;
speedBall = Random.Range(0,3);


switch(0){
case 0:
difficulty = .5; // hard
break;
case 1:
difficulty = 1; //normal
break;
case 2:
difficulty = 20; //easy
break;
}

switch(chooseQuadrant){
	case 0:
	Xcomponent = Random.Range (-1.7 , -.9);
 	Ycomponent = Random.Range (0, .3);
	break;
	case 1:
	Xcomponent = Random.Range (-.6,.6);
	Ycomponent = Random.Range (0, .1);
	break;
	case 2:
	Xcomponent = Random.Range (.9,1.6);
 	Ycomponent = Random.Range (0, 1.9);	
	break;
	}
}

function Start () {
	score = 0;
	this.collider2D.enabled = false;
	ChoosingQuadrant();

	Xspeed= Xcomponent/(100 * difficulty);
	Yspeed= Ycomponent/(100 * difficulty);
}

function Update () {
	this.transform.position.y -= Yspeed;
	this.transform.position.x += Xspeed;
	this.transform.localScale += Vector2(0.00009,0.00009);

	if(this.transform.localScale.x > .005 && this.transform.localScale.y > .005) {
		this.collider2D.enabled = true;
		//this.spriteRenderer.color = Color.yellow;
		Debug.Log("Turned Yellow");

	}
//if(this.transform.localScale == Vector2(0.,0.00009);)
}

function OnTriggerEnter2D(trigger : Collider2D) {
   if (trigger.gameObject.tag == "goalDetector" && trigger.gameObject.tag != "Player") {
//spin false
       GameOver();
   }
}

function OnCollisionEnter2D(collision : Collision2D) {
   if (collision.gameObject.tag == "Player" && collision.gameObject.tag != "goalDetector") {
       //play sound, add save point, and generate new shot
       score+=1;
       saves.text = "" + score;
       Debug.Log("Collided");
       ChoosingQuadrant();
       
       
   }
}
function GameOver() {
Debug.Log("GameOver");
}