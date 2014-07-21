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
			
			if(touchPosition.x >= 0 && touchPosition.x <= 500 && touchPosition.y >= 0 && touchPosition.y <= 500) {
				anim.SetBool("TL", true);
			}
		}

}

function OnTriggerEnter2D(other: Collider2D) {
	 if(other.tag == "triggerTL") {
	 	//anim.SetBool("TL", false);
	 	Debug.Log("worked");
	 }
}