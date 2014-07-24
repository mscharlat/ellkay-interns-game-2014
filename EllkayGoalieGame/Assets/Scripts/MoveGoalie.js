#pragma strict
var startPosX =-0.002835695;
var startPosY = 0.9366317;
var anim : Animator;
static var whichBool : String;
var sRendererGoalie : SpriteRenderer;
var goalie : GameObject;

function Start () {
	anim = GetComponent("Animator");	
	whichBool = "";
	sRendererGoalie = GetComponent("SpriteRenderer");
}
function Update () 
{
	
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began) 
		{
			// Get movement of the finger since last frame
			var touchPosition:Vector2 = Input.GetTouch(0).position;
			Debug.Log(touchPosition);
			
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				anim.SetBool("TL", true);
				whichBool += "TL";
				
			}
			if (touchPosition.x >= Screen.width/3 && touchPosition.x <= Screen.width/3*2 && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				anim.SetTrigger("TM");
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				anim.SetTrigger("TR");
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= 0 && touchPosition.y <= Screen.height/3) {
				anim.SetTrigger("BR");
				
			}
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= 0 && touchPosition.y <= Screen.height/3) {
				anim.SetTrigger("BL");
				
			}
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= Screen.height/3 && touchPosition.y <= Screen.height/3*2) {
				anim.SetTrigger("LM");
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= Screen.height/3 && touchPosition.y <= Screen.height/3*2) {
				anim.SetTrigger("RM");	
			}
		}

		// Button Inputs
			if(Input.GetKey(KeyCode.Q)) 
			{
				anim.SetBool("TL", true);
				whichBool += "TL";
				//iTween.FadeTo(this,{"a":0, "onComplete":"Destroy", "time":"velocity"});
			}
			if (Input.GetKey(KeyCode.W)) 
			{
				anim.SetTrigger("TM");
			
			}
			if(Input.GetKey(KeyCode.E)) 
			{
				anim.SetTrigger("TR");
			}
			if(Input.GetKey(KeyCode.D)) 
			{
				anim.SetTrigger("BR");
			}
			if(Input.GetKey(KeyCode.A)) 
			{
				anim.SetTrigger("BL");
			}
			if(Input.GetKey(KeyCode.K)) 
			{
				anim.SetTrigger("LM");
			}
			if(Input.GetKey(KeyCode.L)) 
			{
				anim.SetTrigger("RM");
			}
				
}

function OnCollisionEnter2D(collision : Collision2D) {
   if (collision.gameObject.tag == "ball") {
       
      fade();
       
   }
}

function fade() {
 	iTween.FadeTo(goalie,{"alpha":0, "time":1});
}

function Reset () {
	Debug.Log("Reset");
	iTween.FadeTo(goalie,{"alpha":1, "time":1});
}