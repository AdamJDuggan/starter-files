// Setup
var collection = {
   "2548": {
     "album": "Slippery When Wet",
     "artist": "Bon Jovi",
     "tracks": [
       "Let It Rock",
       "You Give Love a Bad Name"
     ]
   },
   "2468": {
     "album": "1999",
     "artist": "Prince",
     "tracks": [
       "1999",
       "Little Red Corvette"
     ]
   },
   "1245": {
     "artist": "Robert Palmer",
     "tracks": [ ]
   },
   "5439": {
     "album": "ABBA Gold"
   }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
//if no value (ie track title) is entered into the 3rd argument then delete it
//because it means that there are no tracks at all so we dont need this hasOwnProperty
//and can return the collection
 if(!value){
   delete collection[id][prop];
   return collection;
 }
 //however, if the entry for prop is not tracks and is true then
 //the prop entry becomes a new property
 if(prop !== "tracks" && value){
   collection[id][prop] = value;
  //otherwise
 }else{
   if(!collection[id].hasOwnProperty("tracks"))    collection[id].tracks=[];
 collection[id].tracks.push(value);
 }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
