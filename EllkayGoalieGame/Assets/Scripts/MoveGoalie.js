#pragma strict

var anim : Animator;

function Start () {
	anim = GetComponent("Animator");
}

function Update () {
	
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended) 
		{
			// Get movement of the finger since last frame
			var touchPosition:Vector2 = Input.GetTouch(0).position;
			Debug.Log(touchPosition);
			
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/2 && touchPosition.y >= Screen.height/2 && touchPosition.y <= Screen.height) {
				anim.SetBool("TL", true);
			}
			if(touchPosition.x >= Screen.width/2 && touchPosition.x <= Screen.width && touchPosition.y >= Screen.height/2 && touchPosition.y <= Screen.height) {
				anim.SetBool("TR", true);
			}
			if(touchPosition.x >= Screen.width/2 && touchPosition.x <= Screen.width && touchPosition.y >= 0 && touchPosition.y <= Screen.height/2) {
				anim.SetBool("BR", true);
			}
			if(touchPosition.x >= 0 && touchPosition.x <= Screen.width/2 && touchPosition.y >= 0 && touchPosition.y <= Screen.height/2) {
				anim.SetBool("BL", true);
			}
		}

}

function OnTriggerEnter2D(other : Collider2D) {
	 if(other.tag == "triggerTL") {
	 	anim.SetBool("TL", false);
	 	Debug.Log("trigger worked");
	 }
	 if(other.tag == "triggerTR") {
	 	anim.SetBool("TR", false);
	 	Debug.Log("trigger worked");
	 }
	 if(other.tag == "triggerBR") {
	 	anim.SetBool("BR", false);
	 	Debug.Log("trigger worked");
	 }
	 if(other.tag == "triggerBL") {
	 	anim.SetBool("BL", false);
	 	Debug.Log("trigger worked");
	 }
}