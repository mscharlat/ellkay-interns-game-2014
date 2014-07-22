#pragma strict
//The ball is starting @ position [0, 1.71]

//Step 1: Which Quadrant?
//Step 2: Where in Quadrant?
//Step 3: Which Type of Shot? - different probability using level number
//Step 4: Add movement
//Step 5: Implement Threshhold

//Quadrant 1 Limitations -> x:90 - 400, y:0 - 420
//Quadrant 2 Limitations -> x:401 - 400, y:421 - 
//Quadrant 3 Limitations -> x: - , y:  - 


//variables
var quadrantChoice : int;
var xPosition : int;
var yPosition : int;
var shotType;
var level : int;
var xSpeed : float;
var ySpeed : float;
var anim : Animator;
var spriteRenderer : SpriteRenderer;
var ball : GameObject; 
var targetPosition;
var saves : GUIText;
var score : int;
var startingPositionX : int;
var startingPositionY : int;
var newPositionX : int;
var newPositionY : int;

function Start() {
	level = 1;
	startingPositionX = ball.transform.position.x;
	startingPositionY = ball.transform.position.y;
	anim = ball.GetComponent("Animator");
	spriteRenderer = ball.GetComponent("SpriteRenderer");
	//ball.GetComponent("CircleCollider2D").gameObject.active = false;
	saves.text = "0";
	score = 0;
	moveBall();
	
}

function Update () {
 	ball.transform.position.x += xPosition/xSpeed;
 	ball.transform.position.y += yPosition/ySpeed;
 	
 	if (ball.transform.localScale == Vector2(1,1)) 
 	{
				//ball.GetComponent("CircleCollider2D").gameObject.active = true;
				spriteRenderer.color = Color.yellow;
				//maybe disable rigidbody2d as well
	}
}


function OnTriggerEnter2D(trigger : Collider2D) {
	if (trigger.gameObject.tag == "goalDetector" && trigger.gameObject.tag != "Player") {
		anim.SetBool("spin", false);
		GameOver();
	}
}

function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "Player" && collision.gameObject.tag != "goalDetector") {
		//play sound, add save point, and generate new shot
		anim.SetBool("spin", false);
		score+=1;
		saves.text = "" + score;
		yield(3000);
		moveBall();
		
		
	}
}

function moveBall() {
	//randomly generated elements
	quadrantChoice = Mathf.Round(Random.Range(0.5,3)); //Step 1
	shotType = Mathf.Round(Random.Range(level, 10)); //Step 3 FIX HERE
	
		//Step 2
		if (quadrantChoice == 1) //quadrant is Left	
		{
			xPosition = Mathf.Round(Random.Range(90, 400)); //higher number (400) goes farther left
			yPosition = Mathf.Round(Random.Range(0, 400));
			
			Debug.Log(newPositionX);
			Debug.Log(newPositionY);
			
 			anim.SetBool("spin", true);
 			ball.transform.localScale += Vector2(0.00002,0.000002);
			
			Debug.Log(shotType);
			
			
		} else if (quadrantChoice == 2) //quadrant is Top
		{
			xPosition = Mathf.Round(Random.Range(345, 550));
			yPosition = Mathf.Round(Random.Range(315, 410));
			
			
			Debug.Log(newPositionX);
			Debug.Log(newPositionY);
			
 			anim.SetBool("spin", true);
 			ball.transform.localScale += Vector2(0.00002,0.000002);
		
			Debug.Log(shotType);
		
		} else //quadrant is Right
		{
			xPosition = Random.Range(551, 780);
			yPosition = Random.Range(0, 400);
			
			
			Debug.Log(newPositionX);
			Debug.Log(newPositionY);
 			
 			anim.SetBool("spin", true);
 			ball.transform.localScale += Vector2(0.00002,0.000002);
 
			Debug.Log(shotType);
		
		}
	
}



function GameOver() {
	Debug.Log("Game Over");
}
