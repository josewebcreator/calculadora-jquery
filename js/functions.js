/*

EN

This archive include all the aritmetics functions of the calculator

ES

Este archivo inclulle todas las funciones aritmeticas de la calculadora

*/


    
    //VARIABLES


    //objets

    var calculator = {
        
        number1: 0,
        number2:0,
        temp: 0,
        operator: null, 


        //sum operation
        sum(a,b){

            var result = a + b;

            calculator.number1 = result;
            calculator.number2 = 0;

            return result;
        },

        //subtraction operation

        sub(a,b){

            var result = a - b;

            calculator.number1 = result;
            calculator.number2 = 0;

            return result;
        },

        //multiplication operation

        multi(a,b){

            var result = a * b;

            calculator.number1 = result;
            calculator.number2 = 0;

            return result;
        },

        //division operation

        div(a,b){
            
            //validation of 0

            if( b === 0){
                return 'div0';
            }else{
                var result = a / b;

                calculator.number1 = result;
                calculator.number2 = 0;

                return result;
            }
        }
    };

    


