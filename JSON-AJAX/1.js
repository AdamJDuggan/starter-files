var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest(); 
    //say what we want to do. Go to this URL and get the data...
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    //says what happens to data..
    ourRequest.onload = function(){
        //this error is not connection but on the server side...
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            //this: (var ourData = ourRequest.responseText;)wont work because computer does not know to turn it into JSON data. Instead to make it JSON...
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)    
        }else{
            console.log("We connected to server but it returned an error")
        }
                
        };
    //say what will happen if connection error and cant pull data...
    ourRequest.onerror = function(){
        console.log("Connection error")
    }
    
    //final step is to actually send the request...
    ourRequest.send();
    });

function renderHTML(data){
    var htmlString = '';
    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat </p>" 
    for(ii = 0; ii < data[i].foods.likes.length; ii++){
        //if its the first fave food in string jsut output...
        if(ii == 0){
            htmlString += data[i].foods.likes[ii];
        //if 2nd or later add 'and' inbetween words...
        }else{
            htmlString += ' and ' + data[i].foods.likes[ii];

        }
    }
    
    htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}





