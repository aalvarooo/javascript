// Constructor para el objeto coche
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = null;  // Propiedad para el color del coche
  }
  
  // Array con 4 coches
  const cars = [
    new Car('Ford', 'Fiesta', 2014),
    new Car('Toyota', 'Corolla', 2018),
    new Car('Chevrolet', 'Camaro', 2010),
    new Car('Hyundai', 'Elantra', 2020)
  ];
  
  // Asignar color a un coche
  cars[2].color = 'red';
  
  // Mostrar los datos del array
  console.log(cars);
  
  // Resultado:
  // [
  //   Car { brand: 'Ford', model: 'Fiesta', year: 2014, color: null },
  //   Car { brand: 'Toyota', model: 'Corolla', year: 2018, color: null },
  //   Car { brand: 'Chevrolet', model: 'Camaro', year: 2010, color: 'red' },
  //   Car { brand: 'Hyundai', model: 'Elantra', year: 2020, color: null }
  // ]