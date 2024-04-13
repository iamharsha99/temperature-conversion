document.getElementById("convert").onclick = () => {
    let inNum = Number(document.getElementById("inNum").value);
    let result = document.getElementById("result");
    let c = document.getElementById("toFahrenheit");
    let f = document.getElementById("toCelcius");

    if (c.checked) {
        result.innerText = ((inNum * 9/5) + 32) + "°F";
    } else if (f.checked) {
        result.innerText = Math.round(((inNum - 32) * 5/9) )+ "°C";
    } else {
        result.innerText = "Please select a unit";
    }
}
