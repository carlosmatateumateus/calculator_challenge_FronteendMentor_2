
var textInput = document.querySelector('#textinput')
var body = document.querySelector('#body')
var bottom = document.querySelector('#bottom')

var top_ = document.getElementById('top')
var buttons = document.getElementsByClassName('button')

var important_buttons = [
                        document.getElementById('del'), 
                        document.getElementById('equal'), 
                        document.getElementById('reset')
                    ]

/*Switchs*/

var first_theme = document.getElementById('first-theme')
var second_theme = document.getElementById('second-theme')
var third_theme = document.getElementById('third-theme')

var switching = document.getElementById('switch')

first_theme.checked = true

/*Theme styles*/

function switchTheme(theme){
    console.log(`Switch for ${theme}`)

    if (theme == 'first-theme'){
        top_.style.color = 'white'

        second_theme.checked = false
        third_theme.checked = false
        third_theme.checked = false
        switching.style.backgroundColor = '#252D44'

        textInput.style.color = 'white'
        body.style.backgroundColor = '#3B4664'
        textInput.style.backgroundColor = '#181F32'
        bottom.style.backgroundColor = '#262C46'
        for (tag in  buttons){
            buttons[tag].style.backgroundColor = '#EAE3DB'
            buttons[tag].style.color = '#41485A'
            buttons[tag].style.borderColor = '#B4A69B'
            if (tag == 3){
                buttons[tag].style.backgroundColor = '#647299'
                buttons[tag].style.color = 'white'
                buttons[tag].style.borderColor = '#414F76'
            }

            if (tag == 16){
                buttons[tag].style.backgroundColor = '#647299'
                buttons[tag].style.color = 'white'
                buttons[tag].style.borderColor = '#424E74'
            }

            if (tag == 17){
                buttons[tag].style.backgroundColor = '#D13F30'
                buttons[tag].style.borderColor = '#96271C'
                buttons[tag].style.color = 'white'
            }
        }
    }
    else if(theme == 'second-theme'){
        top_.style.color = '#34362B'

        first_theme.checked = false
        third_theme.checked = false

        switching.style.backgroundColor = '#C75403'

        textInput.style.color = 'black'
        body.style.backgroundColor = '#E6E6E6'
        textInput.style.backgroundColor = '#EEEEEE'
        bottom.style.backgroundColor = '#D3CDCD'
        for (tag in  buttons){
            buttons[tag].style.backgroundColor = '#EAE3DB'
            buttons[tag].style.color = '#34362B'
            buttons[tag].style.borderColor = '#B4A69B'
            if (tag == 3){
                buttons[tag].style.backgroundColor = '#3B8087'
                buttons[tag].style.color = 'white'
                buttons[tag].style.borderColor = '#1A5F66'
            }

            if (tag == 16){
                buttons[tag].style.backgroundColor = '#388187'
                buttons[tag].style.color = 'white'
                buttons[tag].style.borderColor = '#1C6166'
            }

            if (tag == 17){
                buttons[tag].style.backgroundColor = '#C85401'
                buttons[tag].style.borderColor = '#863700'
                buttons[tag].style.color = 'white'
            }
        }
    }
    else if(theme == 'third-theme'){
        top_.style.color = '#FCE43C'

        first_theme.checked = false
        second_theme.checked = false

        switching.style.backgroundColor = '#1E0837'

        textInput.style.color = '#FCE43C'
        body.style.backgroundColor = '#17062A'
        textInput.style.backgroundColor = '#331B4D'
        bottom.style.backgroundColor = '#1E0836'
        for (tag in  buttons){
            buttons[tag].style.backgroundColor = '#331B4D'
            buttons[tag].style.color = '#FCE43C'
            buttons[tag].style.borderColor = '#812296'
            if (tag == 3){
                buttons[tag].style.backgroundColor = '#56077C'
                buttons[tag].style.color = 'white'
            }

            if (tag == 16){
                buttons[tag].style.backgroundColor = '#56077C'
                buttons[tag].style.color = 'white'
            }

            if (tag == 17){
                buttons[tag].style.backgroundColor = '#00DECF'
                buttons[tag].style.borderColor = '#6CF8EF'
                buttons[tag].style.color = 'black'
            }
        }
    }
}
