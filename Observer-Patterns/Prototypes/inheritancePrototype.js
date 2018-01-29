class PrintStuff {
    constructor(myDocuments) {
        this.documents = myDocuments;
        }

    // here we  adding methods using prototype property of another so that it can inherit all instances of it 

    print() {
    console.log(this.documents);
    }
}


const newObj = new PrintStuff ("New Object");// created new object with constructor  allows to inherit properties


newObj.print (); // here newObj inherits all properties and methods ,along with one defined with prototype  calls print() method directly

//******Prototype-based Inheritance*********//////////


class Laptop {
    constructor() {
        this.model="Apple";
        this.isElectronic = true;
    }

    showNameAndConfig() {
        console.log(`this  model is  ${this.model}and with configuration ${this.config}`);
    }

    electronic() {
        if(this.isElectronic)
        console.log("this is an electronic item");
    }
}

function Tablet(tabletName,tabletConfig){
    this.name=tabletName;
    this.config=tabletConfig;
}

Tablet.prototype=new Laptop();

const aIpad=new Tablet("Ipad","Air");
console.log(aIpad.name);
console.log(aIpad.showNameAndConfig);