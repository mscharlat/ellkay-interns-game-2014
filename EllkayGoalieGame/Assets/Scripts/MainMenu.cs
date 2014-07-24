/// <summary>
/// Main menu.
/// attach to main camera
/// </summary>
using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour
{
	public GUIStyle titleStyle;
	public Texture backgroundTexture;
	public GUIStyle titleStyle2;
	
	void Start(){
		//GUISkin titleStlye;
		titleStyle.normal.textColor = Color.black;
		titleStyle.fontSize = 32;
		titleStyle2.normal.textColor = Color.black;
		titleStyle2.fontSize = 20;
	}
	
	void OnGUI()
	{
		/// Display our background texture
		
		//GUI.DrawTexture (new Rect (0, 0, Screen.width, Screen.height), backgroundTexture);

		
		if (GUI.Button (new Rect (Screen.width * .25f, Screen.height * .25f, Screen.width * .5f, Screen.height * .1f), "Play Game"))
		{
			Debug.Log("Clicked Play Game");
			Application.LoadLevel("GamePlay") ;
		}
		
		if (GUI.Button (new Rect (Screen.width * .25f, Screen.height * .5f, Screen.width * .5f, Screen.height * .1f), "Options")) 
		{
			print("Clicked Options");
		}
		if (GUI.Button (new Rect (Screen.width * .25f, Screen.height * .75f, Screen.width * .5f, Screen.height * .1f), "High Scores")) 
		{
			print("Clicked High Scores");
		}
		
		GUI.Label (new Rect (Screen.width/2 - Screen.width/7,Screen.height/3 - Screen.height/4, 600, 100), "Super Goalkeeper!!!",titleStyle);
		GUI.Label (new Rect (Screen.width/2 - Screen.width/6,Screen.height/2 + Screen.height/2.5f,600, 100), "#ThingsThatTimHowardCouldSave",titleStyle2);
	} //Screen.height/2 - Screen.height/3
}
