var weather;
var wea="";
var clock;
var button =0;
var temp;
var butt = "+3 HRS";
function preload() {
  // Get the most recent earthquake in the database
let apiKey = 'f8058d380a416701bba86ce105de8fc9';
let city = 'newyork';
let url = `https://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&APPID=${apiKey}`;
  weather = loadJSON(url);
}
	

function setup() {
  //noLoop();
  createCanvas(800, 800);

  console.log(weather);
  
}

function draw() {
 	// background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
 	background(159, 177, 188);
  	getWeather(button);
  	textFont('Verdana');
  	textSize(48); 
    textAlign(CENTER, CENTER);
    text("NEW YORK CITY", width/2, height/2 - 160);
    textSize(38); 
    text(clock, width/2, height/2 - 100);
  	text(wea, width/2, height/2 - 40);
  	text(temp, width/2, height/2 + 20);
  	rect(width/2-100, height/2 + 140-25,200,50);
  	text(butt, width/2, height/2 + 140);
  	textSize(butt, 28);


}

function getWeather(i){
	wea = weather.list[i].weather[0].main;
	clock = weather.list[i].dt_txt;
	temp = weather.list[i].main.temp;
	//console.log(weather);
}

function mouseClicked(){
	var d = dist(mouseX, mouseY, width/2, height/2 + 140);
  if (d < 30) {
		if(button<39){
			button++;
		}
	}
}
