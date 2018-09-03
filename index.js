var btn = document.getElementById("btn");

btn.addEventListener("click", getResult);

function getResult(event){
    event.preventDefault();

    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;

    var sumResult = 0;

    if (q1 === "b") {
        sumResult++;
    }

    if (q2 === "b") {
        sumResult++;
    }

    if (q3 === "a") {
        sumResult++;
    }

    var result = document.getElementById("result");
    result.removeAttribute("hidden");

    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");

    a1.innerHTML = q1.toUpperCase();
    a2.innerHTML = q2.toUpperCase();
    a3.innerHTML = q3.toUpperCase();

    var showResult = document.getElementById("sumResult");

    if(sumResult === 1){
        showResult.innerHTML = "Você acertou " + sumResult + " questão!";    
    }else {
        showResult.innerHTML = "Você acertou " + sumResult + " questões!";
    }
}