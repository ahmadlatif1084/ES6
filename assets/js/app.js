//AppJs

const name={
    'name':'ahmad'
};
name.name="salman";
console.log(name);

let name2="ahmad";
let name3=`hello ${name2}`
console.log(name3);
let number=6;
let number2=8;
let number3=`${number2}+${number}`;
console.log(number3);

let title=function () {
    return "123";
}

let newtitle=`hello ${title()}`;
console.log(newtitle);

let newarray=['ahmad','salman'];
let newarray2=['turab','nauman'];
newarray.push(...newarray2);
console.log(...newarray);

let cars=[
    {brand:"Honda",doors:2},
    {brand:"Porsche",doors:4}
    ];
let newCars=[
    {brand:"Toyota",doors:2},
    {brand:"Mercedes",doors:4},
];
cars.push(...newCars);
console.log(...cars);
console.log(...newCars);
function functiondefaultparameters_cars(car1="BMW",car2="GMC") {
    console.log(car1, car2);
}
functiondefaultparameters_cars();
var arrowfunction=(number1,number2)=>number1*number2;
console.log(arrowfunction(10,2));

var persons={
    name:"ahmad",
    runs:function () {
        console.log("i am running")

    }
};

var persons2={};
persons2.name='Sultan';
persons2.runs=function () {
    console.log("Sulman is walking");
};
persons2.runs();

var name4="Mukhtar";
var runs=()=>{
    console.log("Mukhtar is running");
};
var persons3={name4,runs};
persons3.runs();

var name5="muneed butt";
var name6="kashmali tariq";
var person6= {
    name5, name6,
    runs() {
        console.log("Muneeb is running");
    },
    walks() {
        console.log("Kashmala is walking");
    }
};
    person6.walks();

    var persons8={
        name:"Ahmad",
        moves:["walking","eating","running"],
        displayMoves() {
            var This=this;
            this.moves.forEach(move=>{
                var string=This.name + " is " + move;
                console.log(string);
            })
        }
    };
    persons8.displayMoves();

    var [bmw,,,mercedes,civic]=['bmw','mercedes','jaguar','honda','civic'];

    var PersonData= {
        namePerson: "ahmad",
        carier: "Software Developer"
    };
    // console.log(carier);
    let displaydata=({namePerson,carier})=>{
      return `${namePerson} ${carier}`;
    };
    console.log(displaydata(PersonData));
    console.log(bmw,mercedes,civic);
    class Person {
        constructor(name,title){
            this.name=name;
            this.title=title;
        }
        displayData() {
            console.log(`${this.name} is a great ${this.title}`);
        }
    }
    let object=new Person("Ahmad","Person");
    object.displayData();

    class Students extends Person{
        constructor(){
            super("Salman","Lawyer");
        }

    }
    let student = new Students();
student.displayData();
for (let i=0;i<10;i++){
console.log(i);
var box=document.createElement("div");
box.onclick=function () {
    console.log("Hey i am number "+i);
}
document.getElementsByTagName('article')[0].appendChild(box);

}