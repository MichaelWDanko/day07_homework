window.addEventListener('load', function () {

    //--Variables--
    var firstNumber = document.getElementById('firstnumber');
    var secondNumber = document.getElementById('secondnumber');
    var answer = document.getElementById("results");
    //Identfy the button to be clicked.
    var resultButton = document.getElementById('submit');
    resultButton.addEventListener('click', function () {

        //    
        var num1 = parseFloat(firstNumber.value);
        var num2 = parseFloat(secondNumber.value);

        //console.log(num1);
        //console.log(num2);
        //console.log(typeof (num1));
        //console.log(typeof (num2));

        //Addition
        var addition = document.getElementById("add");
        //console.log(addition);

        //Subtraction
        var subtraction = document.getElementById("subtract");
        //console.log(subtraction);

        //Multiplication
        var multiplication = document.getElementById("multiply");
        //console.log(multiplication);

        //Divide
        var division = document.getElementById("divide");
        //console.log(division);


        //Addition
        //console.log(addition.checked);
        if (addition.checked === true) {
            var total = (num1 + num2);
            answer.value = total;
            console.log(answer.value);

        }

        //Subtraction
        if (subtraction.checked === true) {
            var total = (num1 - num2);
            answer.value = total;
            console.log(answer.value);
        }

        //Multiplication
        if (multiplication.checked === true) {
            var total = (num1 * num2);
            answer.value = total;
            console.log(answer.value);
        }

        //Division
        if (division.checked === true) {
            var total = (num1 / num2);
            answer.value = total;
            console.log(answer.value);
        }
    });

    var clear = document.getElementById('clear');
    clear.addEventListener('click', function () {

        firstNumber.value = null;
        secondNumber.value = null;
        answer.value = null;
    });
});
