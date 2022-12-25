// Constructor para el objeto coche
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  // Array con 4 coches
  const cars = [
    new Car('Ford', 'Fiesta', 2014),
    new Car('Toyota', 'Corolla', 2018),
    new Car('Chevrolet', 'Camaro', 2010),
    new Car('Hyundai', 'Elantra', 2020)
  ];
  
  // Función para mostrar una tabla con los elementos de los objetos de un array
  function showTable(array) {
    // Crear la tabla
    const table = document.createElement('table');
    // Crear la fila de encabezado
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Marca</th><th>Modelo</th><th>Año</th>';
    table.appendChild(headerRow);
    // Iterar sobre los objetos del array
    for (const item of array) {
      // Crear una fila para cada objeto
      const row = document.createElement('tr');
      // Añadir las celdas con los valores de las propiedades del objeto
      row.innerHTML = `<td>${item.brand}</td><td>${item.model}</td><td>${item.year}</td>`;
      table.appendChild(row);
    }
    // Añadir la tabla al documento
    document.body.appendChild(table);
  }
  
  // Mostrar la tabla con los coches del array
  showTable(cars);