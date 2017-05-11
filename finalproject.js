<!--Alex Spruce -->
var questions = ["Do you like to be scared?", "Do you like overpowered heroes?", "Do you like romance?", "Do you like action?", "Do you like mysteries?"];
var questNumber = 0;
var cookieNames = ["Q1", "Q2", "Q3", "Q4", "Q5"];
var User = {
  questionsAnswered:0,  question1Answer:-1,  question2Answer:-1,  question3Answer:-1,  question4Answer:-1,question5Answer:-1,
}
function loadQuestion()
{
  document.getElementById("Quest").innerHTML = questions[0];
  //alert(questions[parseInt(rand)]);
}

function loadAnswer()
{
  var q1Answer = getCookie("Q1");
  var q2Answer = getCookie("Q2");
  var q3Answer = getCookie("Q3");
  var q4Answer = getCookie("Q4");
  var q5Answer = getCookie("Q5");
  q2Answer = '1';
  if(q1Answer == '1')
  {
    document.getElementById("Q1R").innerHTML = "You answered question 1 as being true";
  }
  else {
    document.getElementById("Q1R").innerHTML = "You answered question 1 as being false";
  }
  if(q1Answer == '1')
  {
    document.getElementById("Q2R").innerHTML = "You answered question 2 as being true";
  }
  else {
    document.getElementById("Q2R").innerHTML = "You answered question 2 as being false";
  }
  if(q1Answer == '1')
  {
    document.getElementById("Q3R").innerHTML = "You answered question 3 as being true";
  }
  else {
    document.getElementById("Q3R").innerHTML = "You answered question 3 as being false";
  }
  if(q1Answer == '1')
  {
    document.getElementById("Q4R").innerHTML = "You answered question 4 as being true";
  }
  else {
    document.getElementById("Q4R").innerHTML = "You answered question 4 as being false";
  }
  if(q1Answer == '1')
  {
    document.getElementById("Q5R").innerHTML = "You answered question 5 as being true";
  }
  else {
    document.getElementById("Q5R").innerHTML = "You answered question 5 as being false";
  }
  if(q3Answer == '2')
  {
    document.getElementById("Resultss").innerHTML = "You should watch Overlord.";
    document.getElementById("picture").src = "https://vignette4.wikia.nocookie.net/overlordmaruyama/images/d/d5/Overlord_Characters.png/revision/latest/scale-to-width-down/670?cb=20160619122954";
    document.getElementById('Summary').innerHTML = "In the year 2138, virtual reality gaming is booming. Yggdrasil, a popular online game is quietly shut down one day. However, one player named Momonga decides to not log out. Momonga is then transformed into the image of a skeleton as "the most powerful wizard." The world continues to change, with non-player characters (NPCs) beginning to feel emotion. Having no parents, friends, or place in society, this ordinary young man Momonga then strivesto take over the new world the game has become.";
    document.getElementById('Copyright').innerHTML = "Courtesy of Anime Planet http://www.anime-planet.com/anime/overlord Picture from http://overlordmaruyama.wikia.com/wiki/Overlord_Wiki";
  }
  if(q3Answer == '1')
  {
    document.getElementById("Resultss").innerHTML = "You should watch Suzuka.";
    document.getElementById("picture").src = "http://vignette1.wikia.nocookie.net/suzuka/images/7/7d/B35.jpg/revision/latest?cb=20101110112250";
    document.getElementById('Summary').innerHTML = "Yamato Akitsuki has recently moved to Tokyo, and in order to maintain his less than wealthy lifestyle, he currently works at his aunt's bathhouse. While walking by the school one evening he sees a girl by the name of Suzuka practicing the high jump, and is instantly in love. Even better is the realization that Suzuka lives next door! Determined to prove himself worthy of her affections, Yamato decides to join the school's track team and show her what he’s got, but things won’t be so easy; for Suzuka has a love interest of her own, and it isn’t Yamato...";
    document.getElementById('Copyright').innerHTML = "Courtesy of Anime Planet http://www.anime-planet.com/anime/suzuka Picture from http://suzuka.wikia.com/wiki/Suzuka_Asahina";
  }

}

function newQuestion()
{
  var temp;
  User[questNumber + 1] = document.getElementById("Q").value;

  if(questNumber == 5)
  {
    document.getElementById('link').innerHTML = "Results";
  }
  else {
    temp = document.getElementById("Q").value;
    setCookie(cookieNames[questNumber], temp, 5)
    document.getElementById('Q').value = "";
    questNumber++;
    User.questionsAnswered = questNumber;
    loadQuestion();
  }

}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cvalue);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
