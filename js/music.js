<audio id="Mp3Me" autoplay autobuffer controls><source src="mooncake/images/moon.mp3"></audio><a href="javascript:GuitarTrack();">Guitar</a> 

function GuitarTrack(){
  var Mp3Me=document.getElementById('Mp3Me').getElementByTagName('source');
  if(Mp3Me.length>1){
      Mp3Me[0].src="Guitar.mp3";
	  Mp3Me[1].src="Guitar.ogg";
	}
  if(Mp3Me.length==1){
      Mp3Me[0].src="Guitar.mp3";
	  
	  var mode=document.getElementById('Mp3Me');
	  var newelem=document.createrElement('source');
	  node.appendChild(newelem);
	}
	Mp3Me.load();
}
