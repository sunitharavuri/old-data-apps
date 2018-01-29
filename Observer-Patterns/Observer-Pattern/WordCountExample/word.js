//implementing word count application with Observer pattern
//Every keystroke you enter as input will get synced by the observer design pattern. 
// EventObserver
// │ 
// ├── subscribe: adds new observable events
// │ 
// ├── unsubscribe: removes observable events
// |
// └── broadcast: executes all events with bound data

// Start with an empty list of observed events, and do this for every new instance. 
// From now on, let’s add more methods inside EventObserver to flesh out the design pattern.
class EventObserver {//
    constructor() {
      this.observers = [];
    }
  
    subscribe(fn) {// It grabs the list of observed events and push a new item to the array (i,e)  list of callback functions.
      this.observers.push(fn);//adds new event 
    }
  

    // Filter out from the list whatever matches the callback function. If there is no match, 
    // the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
   
   
    unsubscribe(fn) {//removes observable events
      this.observers = this.observers.filter((subscriber) => subscriber !== fn);
    }


  
    broadcast(data) {//This iterates through the list of observed events and executes all callbacks
      this.observers.forEach((subscriber) => subscriber(data));
    }
  }
  //The word count component will take this observer and bring it all together.
  const getWordCount = (text) => text ? text.trim().split(/\s+/).length : 0;
  
  const wordCountElement = document.createElement('p');
  
  wordCountElement.className = 'wordCount';
  wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';
  document.body.appendChild(wordCountElement);//to add new element
  
  const blogObserver = new EventObserver();//event listener
  
  blogObserver.subscribe((text) => {//passes in the latest changes to the text area right into the callback function.
    const blogCount = document.getElementById('blogWordCount');
  
    blogCount.textContent = getWordCount(text);
  });
  
  const blogPost = document.getElementById('blogPost');
  
  blogPost.addEventListener('keyup', () => blogObserver.broadcast(blogPost.value));