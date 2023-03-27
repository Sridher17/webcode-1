
var container=document.createElement("div");
container.className="container-fluid";
document.body.append(container);
container.innerHTML=`<h1>Get The Nationality By Searching The Name</h1>
<input type="text" id="searchtext" placeholder="Enter the Name" size="40">
<input type="button" value="search" id="btn" class="btn-outline-primary">
<input type="button" value="reset" id="resetbtn" class="btn-outline-danger">
`

var container2=document.createElement("div");
container2.className="container-fluid result";
document.body.append(container2);
container2.innerHTML=`
<h4>Top Two Countries And Their Probabilities Are</h4>
<h4 id=result></h4>
`


let searchingtext=document.querySelector("#searchtext");
let resultdata=document.querySelector("#result");
let searchbtn=document.querySelector("#btn");
let resetbtn=document.querySelector("#resetbtn");

searchbtn.addEventListener("click",async()=>{
    let searchedtext=document.getElementById("searchtext").value;
    if (searchedtext.length==0 || searchedtext.includes(" ")){
        alert("please enter the valid name without any spaces");
    }
    else{
        try{
            let response=await fetch(`https://api.nationalize.io/?name=${searchedtext}`);
            let responseresult=await response.json();
            console.log(responseresult);
            for(var i=0;i<2;i++){
                resultdata.innerHTML+=
                `countrycode:${responseresult.country[i].country_id}<br>
                Probability :${responseresult.country[i].probability}<br><br>`
            }
        }
        catch(error){
            resultdata.innerHTML=error;

        }
    }
});

resetbtn.addEventListener("click",()=>{
    resultdata.innerHTML="";
    searchingtext.value="";
});