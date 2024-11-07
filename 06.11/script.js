let welcome = alert("Жарысқа қош келдіңіз! ")
let name = prompt("Aтың кім? ")
let introduce = alert( name +" Алтын медаль алу үшін сіз сынақтардан өтудің ең жылдам жолын таңдауыңыз керек. ")

let question1 = prompt(" Алдыңызда өте үлкен өзен бар, одан тез өту үшін не істер едіңіз?  \n  \n  A.Қайық қолдану     В. Жүзу ")
if (question1 == "A" || question1 == "a"){
    alert("Керемет таңдау!")
}else if(question1 == "B" || question1 == "b"){
    alert("Жақсы таңдау!")
}

let question2 = prompt("Алдыңызда үлкен тау бар, одан тез өту үшін не істер едіңіз? \n  \n  A.Өрмелеу     В.Тікұшақты пайдалану  ")
if (question2 == "A" || question2 == "a"){
    alert("Жақсы таңдау!")
}else if(question2 == "B" || question2 == "b"){
    alert("Керемет таңдау!")
}

let question3 = prompt("Сіздің алдыңызда үлкен құбыжық бар, оны өлтіру үшін не қолданар едіңіз? \n  \n  A.Қылыш     В.Қару ")
if (question3 == "A" || question3 == "a"){
    var question = prompt("Әттең, қылышпен өлтірмедің, не істейсің? \n  \n  A.Қашу     В.Kүресуді жалғастырy");
    if (question == "A" || question == "a"){
        alert("Өкінішке орай, ол тым жылдам, сені жеді!")
    }else if(question == "B" || question == "b"){
        alert("Өкінішке орай, сіз оны жеңе алмадыңыз. Сіз алтын медаль алмадыңыз!")
    }
}
if (question3 == "B" || question3 == "b"){
    alert("Жарайсың, өлтірдің, алтын медаль сенікі!!")
}


