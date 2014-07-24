#pragma strict
var gameManager : GameFlow;
var goalieManager : MoveGoalie;
var sRendererBall : SpriteRenderer;

function Start () {
	 sRendererBall = this.GetComponent("SpriteRenderer");
	 gameManager = GameObject.Find("_GameManager").GetComponent(GameFlow);
	 goalieManager = GameObject.Find("Goalie").GetComponent(MoveGoalie);
}

function Update () {

}

function OnCollisionEnter2D(collision : Collision2D) {
   if (collision.gameObject.tag == "Player") {
       //play sound, add save point, and generate new shot
       gameManager.Save();
       this.sRendererBall.color.a = 0;
       
       
       
       
   }
}
