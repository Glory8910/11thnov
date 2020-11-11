var inp= new XMLHttpRequest();
inp.open('GET','https://restcountries.eu/rest/v2/all', true);
inp.send();


  //  var tas=JSON.parse(this.reponse);
  inp.onload=function(){
    var Jesus=JSON.parse(this.response);
    console.log(Jesus);


    let arrayform=Jesus;
  
//extracton of asian countries and its population
 let asian=arrayform.filter(ele=>ele.region==="Asia")
console.log(asian)

let popasia=asian.reduce((acl,val)=>acl=acl+val.population,0);
console.log(popasia);

//population less then 2 lacks

let lessthan2l=arrayform.filter(ele=>ele.population<200000);
console.log(lessthan2l);

// display name,capital,flag

let diplay=arrayform.forEach(element => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag);
});

// total population
let total=arrayform.reduce((acc,ele)=>{
    acc=acc+ele.population
    return acc;
},0);
console.log(total);
//US dollar currecy
let uscurr=arrayform.filter(ele=>ele.currencies[0].code=="USD");
console.log(uscurr);



  }