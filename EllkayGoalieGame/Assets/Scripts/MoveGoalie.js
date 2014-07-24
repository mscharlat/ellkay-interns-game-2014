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
				if (whichBool != "TL") {
					whichBool += "TL";
				}	
				
			}
			if (touchPosition.x >= Screen.width/3 && touchPosition.x <= Screen.width/3*2 && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				if (whichBool != "TM") {
				anim.SetBool("TM", true);
				}
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				anim.SetBool("TR", true);
				if (whichBool != "TR") {
					whichBool += "TR";
				}
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= 0 && touchPosition.y <= Screen.height/3) {
				if (whichBool != "BR") {
				anim.SetBool("BR", true);
				}
			}
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= 0 && touchPosition.y <= Screen.height/3) {
				if (whichBool != "BL") {
				anim.SetBool("BL", true);
				}
			}
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= Screen.height/3 && touchPosition.y <= Screen.height/3*2) {
				if (whichBool != "LM") {
				anim.SetBool("LM", true);
				}
			}
			if(touchPosition.x >= Screen.width/3*2 && touchPosition.x <= Screen.width && touchPosition.y >= Screen.height/3 && touchPosition.y <= Screen.height/3*2) {
				if (whichBool != "RM") {
				anim.SetBool("RM", true);	
				}
			}
		}

		// Button Inputs
			if(Input.GetKey(KeyCode.Q)) 
			{
				anim.SetBool("TL", true);
				if (whichBool != "TL") {
					whichBool += "TL";
				}
				//iTween.FadeTo(this,{"a":0, "onComplete":"Destroy", "time":"velocity"});
			}
			if (Input.GetKey(KeyCode.W)) 
			{
				anim.SetBool("TM", true);
				if (whichBool != "TM") {
					whichBool += "TM";
				}	
			
			}
			if(Input.GetKey(KeyCode.E)) 
			{
				anim.SetBool("TR", true);
				if (whichBool != "TR") {
					whichBool += "TR";
				}
			}
			if(Input.GetKey(KeyCode.D)) 
			{
				anim.SetBool("BR", true);
				if (whichBool != "BR") {
					whichBool += "BR";
				}	
			}
			if(Input.GetKey(KeyCode.A)) 
			{
				anim.SetBool("BL", true);
				if (whichBool != "BL") {
					whichBool += "BL";
				}	
			}
			if(Input.GetKey(KeyCode.K)) 
			{
				anim.SetBool("LM", true);
				if (whichBool != "LM") {
					whichBool += "LM";
				}	
			}
			if(Input.GetKey(KeyCode.L)) 
			{
				anim.SetBool("RM", true);
				if (whichBool != "RM") {
					whichBool += "RM";
				}	
			}
				
}

function OnCollisionEnter2D(collision : Collision2D) {
   if (collision.gameObject.tag == "ball") {
      goalie.collider2D.enabled = false;
      fade();
       
   }
}

function fade() {
 	iTween.FadeTo(goalie,{"alpha":0, "time":1});
}

function Reset () {
	anim.SetBool(whichBool, false);
	Debug.Log(whichBool);
	Debug.Log("Reset");
	iTween.FadeTo(goalie,{"alpha":1, "time":.5});
	resetWhichBool();
}

function resetWhichBool() {
	whichBool = "";
}