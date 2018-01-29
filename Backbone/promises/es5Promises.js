// code is workable in ES5 environments (all major browsers
//      + NodeJs) if you include Bluebird or Q promise library.
//       It's because ES5 doesn't support promises out of the box.
/* ES5, using Bluebird */
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(//creating promise
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);


// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            //calling resolved promise
            console.log(fulfilled);
        })
        .catch(function (error) {
            //else/reject  block error message
            console.log(error.message);
        });
}

askMom();