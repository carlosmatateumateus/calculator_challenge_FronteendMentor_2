var textInput = document.querySelector('#textinput')

function set_a_number(num){
    value_write = textInput.value += num

    if (num == 'reset' || num == 'del'){
        textInput.value = ""
    }
 }

 function calc(){
    Result = eval(value_write)
    textInput.value = Result
 }
