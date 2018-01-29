var Observable = {
    observers: []
  , addObserver: function(observer) {
      this.observers.push(observer)
    }
  , removeObserver: function(observer) {
      var index = this.observers.indexOf(observer)

      if (~index) {
        this.observers.splice(index, 1)
      }
    }
  , notifyObservers: function(message) {
      for (var i = this.observers.length - 1; i >= 0; i--) {
        this.observers[i](message)
      };
    }
  }

Observable.addObserver(function(message){
  console.log("First observer message:" + message)
})

var observer = function(message){
  console.log("Second observer message:" + message)
}

Observable.addObserver(observer)

Observable.notifyObservers('test 1')
// Second observer message:test 1
// First observer message:test 1

Observable.removeObserver(observer)

Observable.notifyObservers('test 2')
// First observer message:test 2


/// if we want to remove observers using some sort of ID instead of passing callback 


var Observable = {
    observers: []
  , lastId: -1
  , addObserver: function(observer) {
      this.observers.push({
        callback: observer
      , id: ++this.lastId
      })

      return this.lastId
    }
  , removeObserver: function(id) {
      for (var i = this.observers.length - 1; i >= 0; i--) {
        this.observers[i]
        if (this.observers[i].id == id) {
          this.observers.splice(i, 1)
          return true
        }
      }

      return false
    }
  , notifyObservers: function(message) {
      for (var i = this.observers.length - 1; i >= 0; i--) {
        this.observers[i].callback(message)
      };
    }
  }

var id_1 = Observable.addObserver(function(message){
  console.log("First observer message:" + message)
})

var observer = function(message){
  console.log("Second observer message:" + message)
}

var id_2 = Observable.addObserver(observer)

Observable.notifyObservers('test 1')
Observable.removeObserver(id_2)
Observable.notifyObservers('test 2')