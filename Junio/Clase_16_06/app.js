var tasks = [
  {
    name: "Write for Envato Tuts+",

    duration: 120,
  },

  {
    name: "Work out",

    duration: 60,
  },

  {
    name: "Procrastinate on Duolingo",

    duration: 240,
  },
];

let tasks_names = [];

for (let index = 0; index < tasks.length; index++) {
    const ELEMENT = tasks[index].name;
    //tengo una constante para mantener la cuenta por las dudas, buena practica
    
    tasks_names.push(ELEMENT); 
}

console.log(tasks_names);

//segunda manera

let tasks_names1 = [];

tasks.forEach(function(tasks){
    tasks_names1.push(tasks.name);
});

console.log(tasks_names1);

//tercer manera con map

let tasks_names2 = tasks.map(function(tasks){ //el index y el array estan en desuso
    return tasks.name;
});

console.log(tasks_names2);

//cuarta con arrow function

let tasks_names3 = tasks.map((tasks) => tasks.name);

console.log(tasks_names3);

//filter

//let difficult_task = tasks.filter((tasks) => tasks.duration >= 120);
//seleccionando todos los elementos con duracion mayor o igual a 120

let difficult_task = tasks.filter(function(tasks){
    return tasks.duration >= 120;
});

//reduce

let number = [1, 2, 3, 4, 5];
let total = 0;

total = number.reduce((previous, current) => previous+current);

console.log(total);