


let promiseToCompleteTask = new Promise(function(resolve, reject) {
    
      //completing task
    
      let isClean = false;
    
      if (isClean) {
        resolve('Completed');
      } else {
        reject('not Completed');
      }
    
    });
    
    promiseToCompleteTask.then(function(fromResolve) {
      console.log('the task is' + fromResolve);
    }).catch(function(fromReject){
        console.log('the task is' + fromReject);
    })
//output: the task is not Completed
        
 //if   let isClean = true;  
 //output: the task is Completed      