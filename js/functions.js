/*

EN

This archive include all the aritmetics functions of the calculator

ES

Este archivo inclulle todas las funciones aritmeticas de la calculadora

*/

$(document).ready(function () {
    
    //VARIABLES

    //numbers

    var a;
    var b;

    //objets

    var calculator = {
        
        //sum operation
        sum(a,b){

            var result = a + b;

            calculator.a = result;
            calculator.b = 0;

            return result;
        },

        //subtraction operation

        sub(a,b){

            var result = a - b;

            calculator.a = result;
            calculator.b = 0;

            return result;
        },

        //multiplication operation

        multi(a,b){

            var result = a * b;

            calculator.a = result;
            calculator.b = 0;

            return result;
        },

        //division operation

        div(a,b){
            
            //validation of 0

            if( b === 0){
                return '0 cannot divide';
            }else{
                var result = a / b;

                calculator.a = result;
                calculator.b = 0;

                return result;
            }
        }
    };




});