var botao_CK = document.querySelector("#transf_CK")
var botao_KC = document.querySelector("#transf_KC")
var botao_CF = document.querySelector("#transf_CF")
var botao_FC = document.querySelector("#transf_FC")
var botao_ZR = document.querySelector("#botao_z")
var botao_FE = document.querySelector("#fechar")

var form = document.querySelector(".form_KC")
form.addEventListener("submit", function(e){
    e.preventDefault()
})

function KC() {
    var valoo = document.querySelector("#valor_KC")
    var resultado = document.querySelector("#result_KC")

    var kelvin = valoo.value
    var convercao = parseInt(kelvin) - 273
    resultado.innerText = `${convercao} °C`

    try {
        var val = resultado.innerText
        if(val == "NaN °C"){
            throw new Error("")
        }
    }catch(e) {
        resultado.innerText = e.message
    }
}

var form = document.querySelector(".form_CK")
form.addEventListener("submit", function(e){
    e.preventDefault()
})
function CK() {
    var valoo = document.querySelector("#valor_CK")
    var resultado = document.querySelector("#result_CK")

    var Celsius = valoo.value
    var convercao = parseInt(Celsius) + 273
    resultado.innerText = `${convercao} K`

    try {
        var val = resultado.innerText
        if(val == "NaN K"){
            throw new Error("")
        }
    }catch(e) {
        resultado.innerText = e.message
    }
}
var form = document.querySelector(".form_CF")
form.addEventListener("submit", function(e){
    e.preventDefault()
})
function CF() {
    var valoo = document.querySelector("#valor_CF")
    var resultado = document.querySelector("#result_CF")

    var Celsius = valoo.value
    var convercao = ((9/5) * parseInt(Celsius)) + 32
    resultado.innerText = `${convercao} °F`

    try {
        var val = resultado.innerText
        if(val == "NaN °F"){
            throw new Error("")
        }
    }catch(e) {
        resultado.innerText = e.message
    }
}
var form = document.querySelector(".form_FC")
form.addEventListener("submit", function(e){
    e.preventDefault()
})
function FC() {
    var valoo = document.querySelector("#valor_FC")
    var resultado = document.querySelector("#result_FC")

    var Fahre = valoo.value
    var convercao = (parseInt(Fahre) - 32) * 0.55
    resultado.innerText = `${Math.round(convercao) + 1} °C`

    try {
        var val = resultado.innerText
        if(val == "NaN °C"){
            throw new Error("")
        }
    }catch(e) {
        resultado.innerText = e.message
    }
}
function ZR(){
    var resultado01 = document.querySelector("#result_KC")
    var resultado02 = document.querySelector("#result_CK")
    var resultado03 = document.querySelector("#result_CF")
    var resultado04 = document.querySelector("#result_FC")

    resultado01.innerText = ""
    resultado02.innerText = ""
    resultado03.innerText = ""
    resultado04.innerText = ""
    
    var valoo01 = document.querySelector("#valor_KC")
    var V01 = valoo01.value
    var valoo02 = document.querySelector("#valor_CK")
    var V02 = valoo02.value
    var valoo03 = document.querySelector("#valor_CF")
    var V03 = valoo03.value
    var valoo04 = document.querySelector("#valor_FC")
    var V04 = valoo04.value
    
    ZV(valoo01, V01, valoo02, V02, valoo03, V03, valoo04, V04)
}
function ZV(objeto01, msg01, objeto02, msg02, objeto03, msg03, objeto04, msg04) {
    if(objeto01.value == msg01){
       objeto01.value = ""
    }
    if (objeto02.value == msg02){
       objeto02.value = ""
    }
    if (objeto03.value == msg03){
    objeto03.value = ""
    }
    if (objeto04.value == msg04){
        objeto04.value = ""
    }
}

botao_KC.onclick = KC
botao_CK.onclick = CK
botao_CF.onclick = CF
botao_FC.onclick = FC
botao_ZR.onclick = ZR





