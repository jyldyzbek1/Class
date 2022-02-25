class Restaurant {
    constructor(name, cusineType, served=0) {
        this.name = name;
        this.cusineType = cusineType;
        this.served = served;
    }
  
    showInfo() {
        document.write(`
        Ресторан: ${this.name}<br>
        Тип кухни: ${this.cusineType}<br>
        `);
    }
    setStatus(status) {
        this.isOpen = status;
    }

    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
       document.write(`Всего обслужено: ${this.served += numberOfServed} <br>`);
    }

    isOpen() {
        let currentHour = new Date().getHours();
        if (currentHour > 9 && currentHour < 22) {
            document.write(`Ресторан ${this.name} oткрыто <br>` );
        } else {
            document.write(`Ресторан ${this.name} закрыто <br>`);
        }
    }

    showTotalServed(){
        document.write(`
        Посетителей: ${this.served}<br>
        `);
    }
}

const muras = new Restaurant('Muras', 'kyrgyz');
muras.showInfo();
muras.isOpen();
muras.setStatus(false);
muras.serve();
muras.showTotalServed();
muras.setServed(15);

document.write("======================<br>")












class Cars {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + "kW";
      this.color = color;
    }

  
    showInfo() {
        document.write(`
            Модель: ${this.model}<br>
            Год выпуска: ${this.year}<br>
            Мощность: ${this.power}<br>
            Цвет: ${this.color}<br>
        `)
    }
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        document.write(`
            Батарея: ${this.battery}<br>   
        `);
    }

    promote() {
        document.write(`
            Покупай  ${this.model} и воплоти свою мечту в реальность!
        `)
    }

  }
  
const jiguli = new Cars('Jiguli', 1990, 75, 'Зелёный <br> ======================');
jiguli.showInfo();

const modelX = new ElectroCars("Tesla X", 2020, 150, 'Чёрный', 2000);
modelX.showInfo();
modelX.promote();