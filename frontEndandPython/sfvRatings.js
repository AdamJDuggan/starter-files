students = [
{name: "Ryu", power: "4", health: "3", mobility: "3", techniques: "2", range: "4"},
{name: "Chun-Li", power: "2", health: "2", mobility: "4", techniques: "4", range: "3"},
{name: "Cammy", power: "3", health: "2", mobility: "5", techniques: "2", range: "3"},
{name: "Akuma", power: "5", health: "3", mobility: "4", techniques: "5", range: "3"},
{name: "Karin", power: "3", health: "2", mobility: "4", techniques: "5", range: "2"},
{name: "Nash", power: "3", health: "3", mobility: "4", techniques: "3", range: "3"}
];

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '';
var student;
var search;

function getStudentReport(student){
  var report = "<h2>Fighter: " + student.name + "</h2>";
  report += "<p>Power: " + student.power + "</p>";
  report += "<p>Health: " + student.health + "</p>";
  report += "<p>Mobility: " + student.mobility + "</p>";
  report += "<p>Techniques: " + student.techniques + "</p>";
  report += "<p>Range: " + student.range + "</p>";
  return report;
}

while (true){
  search = prompt("Enter the name of the fighter you wish to find out about. Or type 'quit' to exit");
  if (search === null || search.toLowerCase() === 'quit'){
    break;
  }

  for (var i = 0; i < students.length; i += 1){
    student = students[i];
    if (student.name === search){
      message = getStudentReport(student);
    }
  }
  if (message === '') {
     alert('Student not found.');
    }
  else {
    print(message);
  }
}
