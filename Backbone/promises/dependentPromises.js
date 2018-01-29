//in following application one considering one task dependent on previous tasks 
//one waits for previous task completes
let defineTask = function() {//promise defined independently unlike  regular call-back functions
    return new Promise(function(resolve, reject) {
      resolve('Task is defined');//promise resolving 
    });
  };
  
  let completeTask = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + ' ,task completed');
    });
  };
  
  let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve( message + ', won Icecream');
    });
  };
 
  defineTask().then(function(result){//this method is fired when promise resolved 
      return completeTask(result);
  }).then(function(result){
      return winIcecream(result);
  }).then(function(result){
      console.log('Successfully ' + result);
  });



  // to execute all task 
//    Promise.all([defineTask1(),completeTask1(),winIcecream1()]).then(function(){
//     console.log("all finished")
// });
//    Promise.race([defineTask1(),completeTask1(),winIcecream1()]).then(function(){
//     console.log("one of them is  finished")
// });