import './Game.css';
import {useEffect, useState } from "react";
    
function Game({onQuery, onLastCategory}){
    
    const animales = ['Alce', 'Ardilla', 'Aguila', 'Abeja', 'Avispa',
    'Bufalo', 'Ballena', 'Burro', 'Buho', 'Buitre',
    'Caballito de mar', 'Camaleon', 'Cebra', 'Caballo', 'Cangrejo', 'Cisne', 'Cerdo', 'Cocodrilo', 'Conejo',
    'Delfin',
    'Erizo', 'Elefante', 'Escarabajo', 'Escorpion',
    'Foca', 'Flamenco', 
    'Gato', 'Gorila', 'Gallina', 'Ganso', 'Golondrina', 'Gorrion', 'Ganso',
    'Hamster', 'Hipopotamo', 'Hormiga', 'Halcon', 'Huron',
    'Iguana',
    'Jirafa', 'Jabali', 
    'Leopardo', 'Llama', 'Lobo', 'Leon', 'Lechuza', 'Loro', 'Lombriz',
    'Morsa', 'Mamut', 'Mapache', 'Marmota', 'Mosca', 'Mono',
    'Nutria',
    'Orca', 'Oso pardo', 'Oso polar', 'Oso panda',
    'Perro', 'Puma', 'Pantera', 'Pato', 'Paloma', 'Pulpo',
    'Rata', 'Reno', 'Raton', 'Rinoceronte', 'Rana',
    'Serpiente', 'Sapo',
    'Tiburon', 'Tigre', 'Tortuga', 'Tucan', 'Toro', 'Topo',
    'Urraca',
    'Vaca', 'Vicuña', 'Vivora',
    'Yaguarete', 'Yacare', 'Yegua', 'Koala'

];
const objetos = ['Anteojos', 'Abrigo', 'Aguja', 'Almohada', 'Ambulancia', 'Alarma', 'Agua', 'Auto', 'Armario',
                 'Balde', 'Banco', 'Bandera', 'Barco', 'Baston', 'Basura', 'Bata', 'Bicicleta', 'Botella',
                 'Cuchara', 'Caja', 'Cepillo', 'Cortauñas', 'Cajon', 'Cama', 'Camion', 'Camisa','Computadora', 'Camison', 'Cuadro', 'Bidet',
                 'Diario', 'Diccionario', 'Documento (DNI)', 
                 'Esponja', 'Espejo', 'Edificio', 'Escritorio', 'Escalera', 'Estrella', 'Extintor', 'Exprimidor', 
                 'Foto', 'Faro', 'Foco', 'Frasco', 'Flor', 'Fosforo', 'Ferrocarril', 'Flauta',  
                 'Gancho', 'Garrafa', 'Goma', 'Gorra', 'Guante', 'Granizo', 'Gota', 'Guitarra', 'Gorro',
                 'Hacha', 'Hoja', 'Hilo', 'Herramienta', 'Hueso',
                 'Iman', 'Inodoro', 'Impresora', 'Imagen',
                 'Jarra', 'Jarron', 'Jeringa', 'Juego de mesa', 'Juguete', 'Jabon', 'Jaula',
                 'Karaoke', 'Kayak', 
                 'Llave', 'Lapiz', 'Lentes', 'Lampara', 'Lana', 'Lata', 'Linterna', 'Lavarropas', 'Llavero', 'Lima de uñas',
                 'Mesa',
                 'N',
                 'O',
                 'P',
                 'Q',
                 'R',
                 'S',
                 'Tren',
                 'U',
                 'V',
                 'Y',
                 'Z',

];
const comida = ['Anana', 'Albondiga', 'Arroz', 'Alcaucil', 'Azucar', 'Alfajor', 'Anchoas', 'Arandanos', 'Atun', 'Ajo',
                'Banana', 'Berenjena', 'Brocoli', 'Bacalao', 'Buñuelos', 'Bolas de fraile', 'Budin', 'Batata', 'Bizcochuelo', 'Bife',
                'Carne', 'Chocolate', 'Compota', 'Canelones', 'Cazuela', 'Camaron', 'Calabaza', 'Ciruela', 'Cereza', 'Cafe',
                'Durazno', 'Dulce de leche', 'Durazno en lata', 'Datiles', 'Damasco', 'Dulce de batata', 'Dulce de Membrillo',
                'Empanadas', 'Ensalada', 'Escabeche', 'Esparragos', 'Espinaca', 'Estofado',
                'Fruta', 'Frambuesa', 'Frutilla', 'Fideos', 'Flan', 'Facturas',
                'Gelatina', 'Galletitas', 'Guiso', 'Garbanzos', 'Garrapiñada', 
                'Helado','Huevo', 'Hamburguesa', 
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'Y',
                'Z'
];
const colection = [animales, objetos, comida];
const [letter, setLetter] = useState();
let words = [];
const category = {
    number: 0,
    name: 'Animales'
}

/*Functionality */
function setUpper(colection){
    for(let posColection in colection){
        let element = colection[posColection]
        for(let posElements in element){
            element[posElements] = element[posElements].toUpperCase();
        }
        element.sort();
    }
}
function getRandom(min, max) {
    let answer = Math.trunc(Math.random() * (max+1 - min) + min);
    while (answer===87 || answer === 88){
        answer = Math.trunc(Math.random() * (max+1 - min) + min);
    }
    return answer;
  }
  
function getWords(letter){
    let posWords = [];
    let answerWords = [];
    for (let posColection in colection){
        posWords.push(findFirstAndLast(colection[posColection], letter));
    }
    for(let words in posWords){
        let appears = posWords[words];
        let category = colection[words];
        if(appears[0] === -1){
            answerWords.push ('No hay');
        }else{
            answerWords.push(category[getRandom(appears[0], appears[1])]);
        }
    }
    return answerWords;
}
function getRandomB(min, max) {
    let answer = [];
    for(let i=0; i<max; i++){
        let number = getRandom(min, max-1);
        while(repeated(answer, number)){
            number = getRandom(min, max-1);
        }
        answer.push(number);
    }
    return answer;
  }
function repeated(arr, number){
    let answer = false, i=0;
    while (i<arr.length && answer === false){
        if(number === arr[i]){
            answer = true;
        }
        i++;
    }
    return answer;
}
function findFirstAndLast(arr,x){
    let n = arr.length;
    let first = -1, last = -1;
    let answer = [first, last];
    for (let i = 0; i < n; i++) {
        let word = arr[i];
        if (x !== word[0])
            continue;
        if (first === -1)
            first = i;
            last = i;
        }
        if (first !== -1) {
            answer = [first, last];
        }
    return answer
}
function createButtons(options){
    let answer = [];
    for(let option in options){
      answer.push(<div><input type='submit' key={options[option]} value={options[option]} style={{marginBottom: 1.5 + 'em'}} id={'option'+option} onClick={buttonClicked}></input><br /></div>);
    }
    return answer;
}
function buttonClicked(event){
    event.preventDefault();
  let sourceId = (event.target || event.srcElement).id;
  chequear(category, sourceId);
}
const [respuestas, setRespuestas] = useState([]);
function addAnswer(answer){
    
    //let prevAnsw = [];
    let prevAnsw = respuestas;
    prevAnsw.push(answer);
    setRespuestas(prevAnsw);
    
    registro();
}
function registro() {
    console.log(respuestas);
}
function chequear (category, elementId){
    let elementIdN = parseInt(elementId.split('option')[1]);
    if(elementIdN === category.number){
        alert("Felicitaciones");
        console.log(category.number);
        CatHandler();
        //console.log(category.number);
        addAnswer({letra: document.getElementById(elementId).value.charAt(0), respuesta: document.getElementById(elementId).value, categoria:category.name});
        
        if(category.number ===2){
            onLastCategory(category.number);
            console.log("si");
            handleQuery();
        }
    }
    else{
        alert("Intenta de nuevo");
    }
    
}
function StartLetter(){
    useEffect(() => {
        setLetter(String.fromCharCode(getRandom(65,89)));
     }, []);
}


const [cat, setCat] = useState(0);
function CatHandler(){
    setCat(category.number+1);
}

function decodeCategory(){
    switch(category.number){
        case 0:
            category.name = 'Animales'; 
            break;
        case 1: 
            category.name = 'Objetos';
            break;
        case 2:
            category.name = 'Comida';
            break;
    }
}

/*Printing*/

function printOptions(options, category){
    let buttons = createButtons(options);
    let pattern = getRandomB(0, buttons.length);
    let answer = [];
    for (let i=0; i<buttons.length; i++){
        let pos = pattern[i];
        answer.push(buttons[pos]);
    }
    return(answer);
    
}

/*Components */

function FormPrinted(){
    return (
        <form>
            {printOptions(words, category)}
        </form>
    );
}

function CategoryPrinted (){   
    category.number = cat;
    decodeCategory();
   return (<div><h3>Categoria: {category.name}</h3></div>);
}
function handleQuery(e){
    if(respuestas !== undefined){
        onQuery(<div>
            {respuestas.map((item, index) => (
                <table key={index} className='Center'>
                    <thead>
                        <th><span className='Destacado'>{item.categoria}</span> con la letra <span className='Destacado'>{item.letra}</span></th>
                    </thead>
                    <tbody>
                        <td>{item.respuesta}</td>
                    </tbody>
                </table>
                
        ))}
        
        </div>);

    }
 
    
}


    StartLetter();
    setUpper(colection);
    words = getWords(letter);
    return(
    <div id="game">
        <h1>Juego</h1>
        <h2>Letra: {letter}</h2>
        <CategoryPrinted />
        <FormPrinted />
    </div>
    );
}export default Game;