class NewCar {
    constructor(parametr) {
        this.brand = parametr.brand,
        this.model = parametr.model,
        this.color = parametr.color,
        this.doors = parametr.doors,
        this.transmission = parametr.transmission,
        this.fuel = parametr.fuel,
        this.fuelTank = parametr.fuelTank,
        this.range = parametr.range,
        this.maxSpeed = parametr.maxSpeed,
        this.price = parametr.price
    }     
        
        showInfo() {
            console.log(`Now you can buy ${this.brand} ${this.model}! It's available for a price: ${this.price}$ NOW!`)
            }
    
    
};

let carOpel = new NewCar ({
    brand: 'Opel',
    model: 'Insignia',
    price: 35000,
    range: 400,
    color: 'black',
    fuel: 'gasoline',
    transmission: 'automatic',
    doors: 4,
    fuelTank: 60,
    maxSpeed: 220,
});

console.log(carOpel);

carOpel.showInfo();

class CarElectric extends NewCar {
    constructor(parametr) {
        super(parametr);
        this.electric = parametr.electric;
        this.powerElectric = parametr.powerElectric;
        this.powerNeed = parametr.powerNeed;
        this.powerRecharge = parametr.powerRecharge;
        this.carRechargeTime = parametr.carRechargeTime;
        this.networkPhase = parametr.networkPhase,
        this.networkVoltage = parametr.networkVoltage,
        this.networkElectricity = parametr.networkElectricity
    };

    showInfo() {
        console.log('This is fully electric vehicle!');
        super.showInfo();
        
    };
        
    showElectrInfo = () => {
            if(this.electric == true) {
                 this.range = Math.floor(this.powerElectric / this.powerNeed)*100;
            console.log(`This is electrical car with ${this.powerElectric} kWh battery and imposible range for ${this.range} km!`);
            }
           else return
        
    };


    showElectrRecharge = () => {
        if(this.electric == true) {
            if (typeof this.powerRecharge == 'undefined' || this.powerRecharge == null) {
               this.powerRecharge = Math.floor(this.networkPhase*this.networkVoltage*this.networkElectricity)/1000;
            }
            this.carRechargeTime = Math.floor(this.powerElectric / this.powerRecharge);
        console.log(`The time to full recharge is ${this.carRechargeTime} hours from ${this.powerRecharge} kWh charging station`);
        result.value = `Полное время зарядки составляет ${this.carRechargeTime} часов от ${this.powerRecharge} кВт зарядной станции`
        }
        else return
    };
    
    get info() {
        return this.model + ' ' + this.price + '$' 
    }
};
    



let carTesla = new CarElectric({
    brand: 'Tesla',
    model: 'Model S',
    price: 80000,
    electric: true,
    powerElectric: 100,
    powerNeed: 15,
    
    
})

console.log(carTesla);
carTesla.showInfo();
carTesla.showElectrInfo();


let carTesla2 = new CarElectric ({
    brand: 'Tesla',
    model: 'Model 3',
    price: 66000,
    electric: true,
    powerElectric: 80,
    powerNeed: 15,
    powerRecharge: 10,
    networkPhase: 1,
    networkVoltage: 220,
    networkElectricity: 16
    
})

console.log(carTesla2);
carTesla2.showInfo()
//carTesla2.showElectrRecharge();
console.log(carTesla2.info);


let carForm = new CarElectric ({
    brand: 'Tesla',
    model: 'Model 3',
    price: 66000,
    
});


let result = document.querySelector('#result');
let button = document.querySelector('.agree');


console.log(carForm)


/*let obj = {
    a: 'Alex',
    b: 'Ivanov',
    ShowName: function() {
        console.log (`My name is ${this.a} ${this.b}`)
    }
}

let objNew = {
    age: '18',
    a: 'Alexander'
    
};

objNew.__proto__ = obj;
objNew.ShowName();
console.log(objNew)

console.log(obj);
obj.ShowName();


let Obj1 = function (a,b) {
    this.a = a;
    this.b = b;
    
}

let newObj = new Obj1(5,6);

let Obj3 = function() {
    this.__proto__ = newObj;
    this.name = 'Aleksei';
    this.ShowName = function() {
        console.log(`My name is ${this.name}`);
    }
}

let obj3 = new Obj3();
console.log(obj3);
obj3.ShowName();
console.log(newObj);*/