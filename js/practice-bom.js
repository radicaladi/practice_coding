// BOM – BROWSER OBJECT MODEL Intro


let sirius = { // <-- sirius is the object.
    numStudents: 30,
    classroom: "remote",
//    methods – are functions stored inside an object; method follows,

    takeAttendeance: function () {
        prompt("how many students?");
        return this.numStudents
    },
    prompt: function (){
        //    returns prompt window;
    }
}

sirius.takeAttendeance(); // <--- this is how you would call that method; need to call object with its method.