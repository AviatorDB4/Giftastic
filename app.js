//topics array
var topics = ["Airplanes", "Cars", "Motorcycles", "Lizards", "Dogs"];
console.log(topics);

//function to create buttons from topics array
function printBtn()
{
    for(var i =  0; i < topics.length; i++)
    {
        var btn = document.createElement("button");
        var t = document.createTextNode(topics[i]);
        btn.setAttribute("id", "btn")
        btn.appendChild(t);
        document.body.appendChild(btn);
    }
};
function button()
{
    $("btn").click(function()
    {
        alert("Test");
    })
}
//ajax queryURL and APIKey variables
//var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIKey;
//var APIKey = "yy3KWqFwiLuom6zNVCIC6gVaxl0OMO69";

//ajax calls
//$.ajax({
//    url: queryURL,
//    method: "GET"
//})