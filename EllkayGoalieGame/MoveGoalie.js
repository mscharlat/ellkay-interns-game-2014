#pragma strict

var anim : Animator;


function Start () {
	anim = GetComponent("Animator");
}
function Update () {
	
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began) 
		{
			// Get movement of the finger since last frame
			var touchPosition:Vector2 = Input.GetTouch(0).position;
			Debug.Log(touchPosition);
			
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/3 && touchPosition.y >= Screen.height/3*2 && touchPosition.y <= Screen.height) {
				anim.SetTrigger("TL");
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
		
}
