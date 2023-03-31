// function hey(){
//     //color = black;
//     document.body.style.backgroundColor = "#B22222";
// }
// setTimeout(hey,1000);

// const text ="I love NYC";
// console.log(text.charAt(5));

let textt = "I am a web developer...";
console.log(textt.length);// длина элемента textt все символы и пробелы
let i=0;
let speed = 100;

function type(){
    if (i < textt.length  ){ // проверяем длину со строкой, если больше не выполнять
        document.querySelector("#par").textContent += textt.charAt(i);//выбираем тип абзац вставить текст и charAt доступ к порядковым номерам,  добавляем еще буквы из фразы textt.
        i++; //textt.charAt(i) - показывать каждую букву, + соединяет новые буквы со старыми
        setTimeout(type,speed);// вызов функции со срокостью speed
    }
}
type();