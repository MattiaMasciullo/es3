var display = document.querySelector("#display");


function prendiPrevisioni()
{
    var richiesta = new XMLHttpRequest();
    richiesta.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Vimercate&appid=00c07e0126d63bd4cd9247ce6f9d2b6b&units=metric",true);
    
    richiesta.addEventListener("load", function()
    {
        var risp = JSON.parse(richiesta.responseText);
        console.log(risp);
        display.innerHTML = "Previsioni: "+risp.weather[0].main;
    });
    richiesta.send();
}


prendiPrevisioni();