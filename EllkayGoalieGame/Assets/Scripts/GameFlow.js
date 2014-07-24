var Xcomponent= 0.0;
var Ycomponent= 0.0;
var Xspeed=0.0;
var Yspeed=0.0;
var startPosX = 0;
var startPosY = 1.6;
var startScaleX = 0.003;
var startScaleY = 0.003;
var speedBall = 0;
var difficulty = 0.0; 
var difficultyScale = 0.0;
var chooseQuadrant = 0;
var screenwidth = Screen.width;
var screenheight = Screen.height;
var ball : GameObject;
var sRenderer : SpriteRenderer;
var runAgain = false;
var saves : GUIText;
var score : int;
var ballAnim : Animator;
var ballManager : BallCollision;
var kicker : GameObject;
var kickerAnim : Animator;

function Start () {
	
	ballManager = ball.GetComponent(BallCollision);
	kickerAnim = kicker.GetComponent("Animator");
	ballAnim =  ball.GetComponent("Animator");
	
	runAgain = false;
	ball.collider2D.enabled = false;
	sRenderer = ball.GetComponent("SpriteRenderer");
	ChoosingQuadrant();
	
	Xspeed= Xcomponent/(100 * difficulty);
	Yspeed= Ycomponent/(100 * difficulty);
	Debug.Log(Xspeed);
}

function Update () {
	
	//move detection for if goal from gameflow to here
	if (ball.transform.localScale.x > (.021*difficultyScale ) && ball.transform.localScale.y > (.021*difficultyScale )) {
		GameOver();
	}
	else if (ball.transform.localScale.x > (.02*difficultyScale) && ball.transform.localScale.y > (.02* difficultyScale)) {
		sRenderer.color = Color.red;
		Debug.Log("Turned Red");
		ball.collider2D.enabled = false;
	} else if(ball.transform.localScale.x > (.0095*difficultyScale) && ball.transform.localScale.y > (.0095*difficultyScale)) 
	{
		ball.collider2D.enabled = true;
		sRenderer.color = Color.yellow;
		Debug.Log("Turned Yellow");
		
	} 
	kickerAnim.SetBool("Kick", true);
	ball.transform.position.y += Yspeed;
	ball.transform.position.x += Xspeed;
	ball.transform.localScale += Vector2(0.00009,0.00009);
	ballAnim.SetBool("Spin", true);
	kickerAnim.SetBool("Kick", false);
	
	
	if (runAgain) {
		newBall();
		runAgain = false;
	}

	
}

function ChoosingQuadrant()
{
	chooseQuadrant = Random.Range(0,3) ;
	speedBall = Random.Range(0,3);


	switch(speedBall)
	{
		case 0:
			difficulty = .5; // hard
			difficultyScale = .6;
			
		break;
		case 1:
			difficulty = .75; //normal
			difficultyScale = .75;
		break;
		case 2:
			difficulty = 1; //easy
			difficultyScale = 1;
		break;
	}

	switch(0)
	{
		case 0:
			Xcomponent = Random.Range (-1 , -.5);
 			Ycomponent = Random.Range (-.4, 1);
		break;
		case 1:
			Xcomponent = Random.Range (-.6,.6);
			Ycomponent = Random.Range (0, .1);
		break;
		case 2:
			Xcomponent = Random.Range (.7,1);
 			Ycomponent = Random.Range (0, 1);	
		break;
	}
}

function newBall() {
	ball.collider2D.enabled = false;
	kickerAnim.SetBool("Kick", true);
	Xspeed= Xcomponent/(100 * difficulty);
	Yspeed= Ycomponent/(100 * difficulty);
	sRenderer.color = Color.white;
	ball.transform.position.x = startPosX;
	ball.transform.position.y = startPosY;
	ball.transform.localScale.x = startScaleX;
	ball.transform.localScale.y = startScaleY;
	sRenderer.color.a = 1;
	yield WaitForSeconds(3);
	ChoosingQuadrant();
}

function OnGUI(){
	//GUI.skin = restartSkin;
		
		if(GUI.Button(Rect (Screen.width/2 - Screen.width/25,2,80,20), "Restart"))
		{
		
			runAgain = false;
			Application.LoadLevel(0);	
			//restartSkin.
		}
	
}

function Save() {
	   score+=1;
       saves.text = "" + score; 
       runAgain = true;
       Debug.Log("Saved");
}

function GameOver() {
	
	Debug.Log("You Lost");
}
