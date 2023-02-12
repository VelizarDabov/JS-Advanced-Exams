class CarDealership {
  constructor(name) {
    this.name = name;
    this.totalIncome = 0;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    let carObj = {
      model,
      horsepower,
      price,
      mileage,
    };
    if (
      carObj.model == "" ||
      carObj.horsepower < 0 ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    } else {
      this.availableCars.push(carObj);
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$`;
    }
  }
  sellCar(model, desiredMileage) {
    let currentcar = this.availableCars.find((x) => x.model === model);
    if (!currentcar) {
      throw new Error(`${model} was not found!`);
    } else {
      let soldCar = {
        model: currentcar.model,
        horsepower: currentcar.horsepower,
      };
      if (currentcar.mileage <= desiredMileage) {
        const index = this.availableCars.indexOf(currentcar);
        this.availableCars.splice(index, 1);
        this.soldCars.push(soldCar);
        soldCar.price = currentcar.price;
        this.totalIncome += currentcar.price;
        return `${model} was sold for ${currentcar.price.toFixed(2)}$`;
      } else if (currentcar.mileage - desiredMileage <= 40000) {
        const index = this.availableCars.indexOf(currentcar);
        this.availableCars.splice(index, 1);
        this.soldCars.push(soldCar);
        soldCar.price = currentcar.price * 0.95;
        this.totalIncome += currentcar.price * 0.95;
        return `${model} was sold for ${(currentcar.price * 0.95).toFixed(2)}$`;
      } else if (currentcar.mileage - desiredMileage > 40000) {
        const index = this.availableCars.indexOf(currentcar);
        this.availableCars.splice(index, 1);
        this.soldCars.push(soldCar);
        soldCar.price = currentcar.price * 0.9;
        this.totalIncome += currentcar.price * 0.9;
        return `${model} was sold for ${(currentcar.price * 0.9).toFixed(2)}$`;
      }
    }
  }
  currentCar() {
    if (!this.availableCars) {
      return `There are no available cars`;
    } else {
      let buff = "-Available cars:";
      for (const car of this.availableCars) {
        buff += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
          2
        )} km - ${car.price.toFixed(2)}$\n`;
      }
      return buff;
    }
  }
  salesReport(criteria) {
    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new TypeError("Invalid criteria!");
    }
    //         let buff = `-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$\n`
    //         buff += `-${this.soldCars.length} cars sold:\n`
    // for (const x of this.soldCars) {
    //     buff += `---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$\n`
    // }

    const result = this.soldCars.map(
      (c) => `---${c.model} - ${c.horsepower} HP - ${c.price}$`
    );
    result.unshift(`-${this.soldCars.length} cars sold:`);
    result.unshift(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    return result.join('\n')
  }
}

let dealership = new CarDealership("SoftAuto");

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'))





`-Available cars:
---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
---Audi A3 - 120 HP - 240000.00 km - 4900.00$`