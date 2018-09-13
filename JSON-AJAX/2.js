//now looking to add multiple linked in animals from diff web pages...
var pageCounter = 0;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest(); 
    //Go to this URL but have pageCounter instead of jsut 1 which is first 3 pets only. Move down to line 18...
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    //says what happens to data..
    ourRequest.onload = function(){
        //this: (var ourData = ourRequest.responseText;)wont work because computer does not know to turn it into JSON data. Instead to make it JSON...
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
        };
    //final step is to actually send the request...
    ourRequest.send();
    pageCounter ++;
    });

function renderHTML(data){
    var htmlString = '';
    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>" 
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}





