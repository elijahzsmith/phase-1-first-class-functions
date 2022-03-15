function receivesAFunction(callback) {
    callback();
} receivesAFunction(callback);

function returnsANamedFunction() {
    const namedFunction = function(){}
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {}
}

//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function Tuesday() {
//     exerciseRoutine(swimFortyLaps);
//   }
  
//   function Wednesday() {
//     exerciseRoutine();
//   }
  
//   function Thursday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function Friday() {
//     runFiveMiles();
//     exerciseRoutine(swimFortyLaps);
//   }

//   function runFiveMiles() {
//       console.log("Go for a five-mile run");
//   }

//   function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }




//   exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });
  
//   // "Go for a five-mile run"
//   // "Stretch! Work that core!"

//   //rewritten with an arrow function
//   exerciseRoutine(() => {
//     console.log("Stretch! Work that core!");
//   });
  
//   // Or even shorter:
//   exerciseRoutine(() => console.log("Stretch! Work that core!"));