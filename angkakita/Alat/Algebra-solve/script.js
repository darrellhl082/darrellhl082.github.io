let x1Val, x2Val;
var Equation = algebra.Equation;


let solve = $('#solve').click(function (e) {
    e.preventDefault();
    x1Val = $('#x1').val()
    x2Val = $('#x2').val()
    var x1 = algebra.parse(x1Val);
    var x2 = algebra.parse(x2Val);
    var eq = new Equation(x1, x2);
    console.log(eq.toString());

    var answer = eq.solveFor("x");
    answerText = `${x1Val} = ${x2Val}<br>x = ${answer}`;
    $('#result').html(answerText);

    console.log("x = " + answer.toString());
});