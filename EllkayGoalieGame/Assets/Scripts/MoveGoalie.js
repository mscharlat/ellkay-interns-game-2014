#pragma strict

var anim : Animator;
var doubleJump = false;


 
function Start() {
	anim = GetComponent("Animator");
	
}

function Update () {
		if(Input.GetKey(KeyCode.R)) {
			//run animation to jump top left
			anim.SetBool("TL", true);
			anim.SetBool("TL2", true);
			Debug.Log("Top Left");
			doubleJump = true;
		} else if(Input.GetKey(KeyCode.R) && doubleJump) {
			anim.SetBool("TL2", true);
			doubleJump = false;
		} else {
			anim.SetBool("TL", false);
			anim.SetBool("TL2", false);
		}	
			
		
	 if(Input.GetKey(KeyCode.T)) {
			//run animation to jump top left
			anim.SetBool("TR", true);
			anim.SetBool("TR2", true);
			Debug.Log("Top Right");
			doubleJump = true;
		} else if(Input.GetKey(KeyCode.T) && doubleJump) {
			anim.SetBool("TR2", true);
			doubleJump = false;
		} else {
			anim.SetBool("TR", false);
			anim.SetBool("TR2", false);
		}	
			
		if(Input.GetKey(KeyCode.F)) {
			//run animation to jump Bottom left
			anim.SetBool("BL", true);
			anim.SetBool("BL2", true);
			Debug.Log("Bottom Left");
			doubleJump = true;
		} else if(Input.GetKey(KeyCode.F) && doubleJump) {
			anim.SetBool("BL2", true);
			doubleJump = false;
		} else {
			anim.SetBool("BL", false);
			anim.SetBool("BL2", false);
		}	
		
		
		if (Input.GetKey(KeyCode.G)) {
				//run animation to jump Bottom right
			anim.SetBool("BR", true);
			anim.SetBool("BR2", true);
			Debug.Log("Bottom Right");
			doubleJump = true;
		} else if(Input.GetKey(KeyCode.G) && doubleJump) {
			anim.SetBool("BR2", true);
			doubleJump = false;
		} else {
			anim.SetBool("BR", false);
			anim.SetBool("BR2", false);
		}	
}