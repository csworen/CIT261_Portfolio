var person = { //repeat of tutorial example, properly spaced
    name: "Joeseph Smith"
    , currentAge: 14
    , status: [ { age: 14, event: 'the first vision' }
        , { age: 18, event: 'the finding of the seer stone' }
        , { age: 19, event: 'the Angel Moroni visiting 3 times;<br>his brother Alvin dying' }
        , { age: 20, event: 'the family (except Joeseph Sr.) joining the Presbyterian church' }
        , { age: 21, event: 'being hired (with Joeseph Sr.) to search for buried treasure near Harmony, PA;<br>Joeseph meets Emma Hale' }
        , { age: 22, event: 'the state of New York: People vs. Joeseph Smith - "the Glass Looker"' }
        , { age: 23, event: 'eloping with Emma Hale;<br>receiving golden plates from the Angel Moroni;<br>reading about Jaredites;<br>hiding the plates in a barrel at the Hale farm' }
        , { age: 24, event: 'Martin Harris transcribing 116 pages - Lucy Harris hides or destroys pages;<br>the Smiths\' first child dies, leaving Emma near death;<br>Joeseph uses family to transcribe after Martin Harris admits to Lucy\'s deception' }
        , { age: 25, event: 'Oliver Cowdry taking over as scribe;<br>Joeseph and Oliver receive Aaronic priesthood from John the Baptist;<br>Joeseph and Oliver receive Melchizedek priesthood from Peter, James, and John;<br>Joeseph receives copyright for Book of Mormon from state of NY' }
        , { age: 26, event: '5,000 copies of Book of Mormon being printed;<br>Church of Christ is established in New York;<br>Joeseph begins revising the Bible' }
        , { age: 27, event: 'the church moving to Kirtland, OH;<br>Joeseph travels to Jackson County, MO;<br>Joeseph reveals Zion should be built in MO' }
        , { age: 28, event: 'the revelations of the 3 degrees of glory and we are all children of God;<br>tarred and feathered in OH;<br>temple to be built in Independence, MO' }
        , { age: 29, event: 'having his revelations published in Independence;<br>presses destroyed before printing complete;<br>Mormons driven from Jackson, MO' }
        , { age: 29, event: 'the church being renamed to the Church of the Latter Day Saints;<br>Zion\'s Camp fails to reclaim Independence;<br>first anti-Mormon expose published by E.D. Howe - "Mormonism Unvailed"'}
        , { age: 30, event: 'the organizing of the Quorums of the 12 Apostles and the Seventy;<br>church purchases Egyptian mummies and papyrus - translates as the Book of Abraham;<br>new edition of Joeseph\'s revelations published - Doctrine and Covenants' }
        , { age: 31, event: 'the dedication of the Kirtland temple' }
        , { age: 32, event: 'the new edition of the Book of Mormon being released with spelling and grammar corrections' }
        , { age: 33, event: 'the church being renamed to the Church of Jesus Christ of Latter Day Saints (current);<br>Rigdon preaches famous \'Salt Sermon\';<br>Civil War breaks out in MO - extermination order passed by Gov. of MO against Mormons;<br>Joeseph goes to Liberty Jail;<br>Mormons driven out of MO' }
        , { age: 34, event: 'escape while being transferred to another MO county - heads settlement of Nauvoo, IL' }
        , { age: 35, event: 'the Gov. of IL signing the Nauvoo charter giving Mormons extensive legal liberties' }
        , { age: 36, event: 'the establishment of the Nauvoo Legion - largest militia in the US at the time;<br>Joeseph is sealed to Louisa Beaman' }
        , { age: 37, event: 'the book of Abraham being published;<br>Joeseph becomes free mason;<br>Temple Endowments introduced;<br>Joeseph becomes mayor of Nauvoo' }
        , { age: 38, event: 'the revelation on plural marriage and reads it to the high council' }
        , { age: 39, event: 'his candidacy for president;<br>"King Follett" sermon;<br>Nauvoo placed under civil law;<br>Joeseph and Hyrum surrendered to civil authorities and brought to Carthage Jail;<br>Joeseph and Hyrum are martyred 3 days later' }
    ]
};

/*
 * - preloads person object
 */
function joesephInit() {
    // This is a DOM manipulation; adding text
    if(person.currentAge <= 39){
        for(var i = 0; i < person.status.length; i++) {
            if(person.status[i].age === person.currentAge){
                document.getElementById("joeseph").innerHTML = person.name + " experienced:<br>" + person.status[i].event + "<br>at age " + person.currentAge + ".";
                break;
            } else {
                document.getElementById("joeseph").innerHTML = person.name + " did not experience anything of note at age " + person.currentAge + ".";
            }
        }
    } else {
        document.getElementById("joeseph").innerHTML = person.name + " was martyred by age " + person.currentAge + ".";
    }
}

/*
 * - stores person object in local storage
 */
function joesephStore() {
    var newPerson = JSON.stringify(person);
    localStorage.setItem('person', newPerson);
}

/*
 * - retrieves person object from local storage and updates display features
 */
function joesephGet() {
    var newPerson = localStorage.getItem('person');
    person = JSON.parse(newPerson);
    joesephInit();
}

/*
 * - increments person object's age by 1 and updates display features
 */
function joesephAddAge() {
    ++person.currentAge;
    joesephInit();
}

/*
 * - resets person object's age to 14 and updates display features
 */
function joesephResetAge() {
    person.currentAge = 14;
    joesephInit();
}

/*
 * - brings the local storage example(s) into view
 */
function local() {
    document.getElementById('local').className = 'fadeIn';
    document.getElementById('ajax').className = 'fadeOut';
    document.getElementById('css').className = 'fadeOut';
    document.getElementById('blend').className = 'fadeOut';
    document.getElementById('dynamic').className = 'fadeOut';
}
  
/*
 * - brings the AJAX/JSON example(s) into view
 */
function ajax() {
    document.getElementById('ajax').className = 'fadeIn';
    document.getElementById('local').className = 'fadeOut';
    document.getElementById('css').className = 'fadeOut';
    document.getElementById('blend').className = 'fadeOut';
    document.getElementById('dynamic').className = 'fadeOut';
}

/*
 * - brings the CSS transitions, transformations, and animations examples into view
 */
function css() {
    document.getElementById('css').className = 'fadeIn';
    document.getElementById('local').className = 'fadeOut';
    document.getElementById('ajax').className = 'fadeOut';
    document.getElementById('blend').className = 'fadeOut';
    document.getElementById('dynamic').className = 'fadeOut';
}

/*
 * - brings the JS ojects example(s) into view
 */
function blend() {
    document.getElementById('blend').className = 'fadeIn';
    document.getElementById('ajax').className = 'fadeOut';
    document.getElementById('css').className = 'fadeOut';
    document.getElementById('local').className = 'fadeOut';
    document.getElementById('dynamic').className = 'fadeOut';
}

/*
 * - brings the dynamic calendar into view
 */
function dynamic() {
    document.getElementById('dynamic').className = 'fadeIn';
    document.getElementById('ajax').className = 'fadeOut';
    document.getElementById('css').className = 'fadeOut';
    document.getElementById('local').className = 'fadeOut';
    document.getElementById('blend').className = 'fadeOut';
}

/*
 * - This starts the AJAX/JSON example(s)
 */
var jsonObj;

function getTasks() {
    var data_file = "js/todoList.json";
    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        // http_request = new XMLHttpRequest();
       }catch (e){
            // Internet Explorer Browsers
            try{
              http_request = new ActiveXObject("Msxml2.XMLHTTP");
          }catch (e) {
                try{
                  http_request = new ActiveXObject("Microsoft.XMLHTTP");
              }catch (e){
                  // Something went wrong
                  alert("Your browser broke!");
                  return false;
              }					
          }
      }
      http_request.onreadystatechange = function(){
          if (http_request.readyState === 4){
              // Javascript function JSON.parse to parse JSON data
              jsonObj = JSON.parse(http_request.responseText);
			  showTasks();
          }
      }
      http_request.open("GET", data_file, true);
      http_request.send();
  }
  
  function addTask() {
	
	var newTask = document.getElementById("newTask").value;
	if(newTask !== '') {
		jsonObj.tasks.push({"name": newTask, "done": 0});
	}
	  
	//next you would initiate a XMLHTTPRequest as following (could be more advanced):
	var url = "json.php?json=";//your url to the server side file that will receive the data.
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			console.log(http.responseText);//check if the data was received successfully.
		}
	}
	http.open("GET", url + JSON.stringify(jsonObj), true);
	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
	http.send();

	document.getElementById("newTask").value = '';
	
	showTasks();
  }
  
  function removeDone() {
	  for(var i = jsonObj.tasks.length - 1; i >= 0 ; i--) {
		  if (jsonObj.tasks[i].done == 1) {
			  jsonObj.tasks.splice(i, 1);
		  }
	  }
	  
	  addTask();
  }
  
  function checkAll() {
	  for(var i = 0; i < jsonObj.tasks.length; i++) {
		  jsonObj.tasks[i].done = 1;
  	  }
	
	addTask();
  }
  
  function uncheckAll() {
	  for(var i = 0; i < jsonObj.tasks.length; i++) {
		  jsonObj.tasks[i].done = 0;
  	  }
	
	addTask();
  }

  function updateList() {
	  for(var i = 0; i < jsonObj.tasks.length; i++) {
		if(document.getElementById("task" + i).checked == true) {
			jsonObj.tasks[i].done = 1;
		} else {
			jsonObj.tasks[i].done = 0;
		}
	  }
	  
	  addTask();
  }
  
  function showTasks() {
	
	console.log(jsonObj);
	var list = "<ul>";
    for(var i = 0; i < jsonObj.tasks.length; i++){
		list += "<li>" + jsonObj.tasks[i].name + " <input id=\"task" + i + "\" type=\"checkbox\"";
        if(jsonObj.tasks[i].done === 1){
			list += " checked>Done</input></li>";
        } else {
			list += ">Not Done</input></li>";
        }
    }
	list += "</ul>";
    document.getElementById("todo").innerHTML = list;
  }
  
  /*
   * This begins the Blended section
   * - A simple "Rock, Paper, Scissors" game
   */
var choices = [{ choice: 'ROCK', count: 0 }, { choice: 'PAPER', count: 0 }, { choice: 'SCISSORS', count: 0 }];
var results = [{ result: 'COMPUTER wins', count: 0 }, { result: 'PLAYER wins', count: 0 }, { result: 'TIE game', count: 0 }];
var player = '';
var computer = '';

function reload() {
    document.getElementById('computer').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('scores').style.display = 'none';
    document.getElementById('noResult').style.display = 'block';
    document.getElementById("rock").className = "";
    document.getElementById("paper").className = "";
    document.getElementById("scissors").className = "";
    for (var i = 0; i < 3; i++) {
        choices[i].count = 0;
        results[i].count = 0;
    }
    document.getElementById("rock").innerHTML = 'ROCK (' + choices[0].count + ')';
    document.getElementById("paper").innerHTML = 'PAPER (' + choices[1].count + ')';
    document.getElementById("scissors").innerHTML = 'SCISSORS (' + choices[2].count + ')';
    player = '';
    computer = '';
}

function rock() {
    player = choices[0].choice;
    ++choices[0].count;
    document.getElementById("rock").innerHTML = 'ROCK (' + choices[0].count + ')';
    document.getElementById("rock").className = "chosen";
    document.getElementById("paper").className = "";
    document.getElementById("scissors").className = "";
    computer = choose();
}

function paper() {
    player = choices[1].choice;
    ++choices[1].count;
    document.getElementById("paper").innerHTML = 'PAPER (' + choices[1].count + ')';
    document.getElementById("paper").className = "chosen";
    document.getElementById("rock").className = "";
    document.getElementById("scissors").className = "";
    computer = choose();
}

function scissors() {
    player = choices[2].choice;
    ++choices[2].count;
    document.getElementById("scissors").innerHTML = 'SCISSORS (' + choices[2].count + ')';
    document.getElementById("scissors").className = "chosen";
    document.getElementById("rock").className = "";
    document.getElementById("paper").className = "";
    computer = choose();
}

function qualify() {
    var choice = '';
    if (player !== computer) {
        switch (player) {
            case choices[0].choice:
                switch (computer) {
                    case choices[1].choice:
                        choice = results[0].result;
                        ++results[0].count;
                        break;
                    case choices[2].choice:
                        choice = results[1].result;
                        ++results[1].count;
                        break;
                }
                break;
            case choices[1].choice:
                switch (computer) {
                    case choices[0].choice:
                        choice = results[1].result;
                        ++results[1].count;
                        break;
                    case choices[2].choice:
                        choice = results[0].result;
                        ++results[0].count;
                        break;
                }
                break;
            case choices[2].choice:
                switch (computer) {
                    case choices[0].choice:
                        choice = results[0].result;
                        ++results[0].count;
                        break;
                    case choices[1].choice:
                        choice = results[1].result;
                        ++results[1].count;
                        break;
                }
                break;
        }
    } else {
        choice = results[2].result;
        ++results[2].count;
    }
    return choice;
}

function choose() {
    var choice = Math.floor(Math.random() * (3 - 0) + 0);
    computer = choices[choice].choice;
    var result = qualify();
    document.getElementById('choice').innerHTML = computer + '.';
    document.getElementById('result').innerHTML = result;
    switch (result) {
        case results[0].result:
            document.getElementById('result').style.color = '#F00';
            break;
        case results[1].result:
            document.getElementById('result').style.color = '#0F0';
            break;
        case results[2].result:
            document.getElementById('result').style.color = '#00F';
            break;
    }
    document.getElementById('computer').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    document.getElementById('losses').innerHTML = 'Losses: ' + results[0].count;
    document.getElementById('wins').innerHTML = 'Wins: ' + results[1].count;
    document.getElementById('ties').innerHTML = 'Ties: ' + results[2].count;
    document.getElementById('scores').style.display = 'block';
    document.getElementById('noResult').style.display = 'none';
}