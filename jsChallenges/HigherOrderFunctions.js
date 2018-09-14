//forEach: does not return anything back and loop 
for( let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}
companies.forEach(x => {console.log(x)};

//filter                   
const canDrink = agesArray.filter(x => x => 18);
CanDrink(10) //false 

//filter retail companies
return companies.filter(x => x.category == 'retail'); 

//get companies started in 1980s 
return companies.filter(x => x.began < 1990 && x.began > 1979);

//create new Arrays with Map

//create array of just company names
return companies.map(x => x.names);

//return multiple elements of object 
return companies.map(x => '${x.name} [${x.start} - ${x.end}]');

//sort takes 2 values 

//sort companies by start year 
return companies.sort(function(c1, c2){
    if(c1.start > c2.start){return 1;}
    else{return -1}
});

//or... 
return companies.sort((a, b) => (a.start > b.start ? return 1 : return -1))

//sort ages in asending order
return ages.sort((a, b) => a -b); 

//reduce
//add ages together. Total = 0 passed in.   
ages.reduce((total, age) => total + age, 0)

//total years for all companies (from start to end)
return companies.reduce((total, company) => total + (company.end - company.start), 0);
 
//combine  
ages.map(x => x*2);