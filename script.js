function calcularTotal() {
    const preciosProductos = {
      tomate: 15,
      huevo: 40,
      queso: 20,
      mayonesa: 10,
      mostaza: 10,
      ketchup: 10,
      hamburguesa: 200,
    };
    
    const tomate = document.querySelector(".tomate").value;
    const huevo = document.querySelector(".huevo").value;
    const queso = document.querySelector(".queso").value;
    const hamburguesas = document.querySelector("[data-hamburguesas]").value;
    const mayonesa = document.querySelector(".mayonesa").checked;
    const ketchup = document.querySelector(".ketchup").checked;
    const mostaza = document.querySelector(".mostaza").checked;
  
    const totalTomate = preciosProductos.tomate * tomate;
    const totalHuevo = preciosProductos.huevo * huevo;
    const totalQueso = preciosProductos.queso * queso;
    const totalHamburguesa = preciosProductos.hamburguesa;
     
    let total = totalHamburguesa + totalTomate + totalHuevo + totalQueso;
    
    if (mayonesa) { 
      total += preciosProductos.mayonesa;
    }
    if (mostaza) {
      total += preciosProductos.mostaza;
    }
    if (ketchup) { 
      total += preciosProductos.ketchup;
    }
    const totalPedido = document.querySelector(".totalPedido");
    totalPedido.value = total * hamburguesas;
  }
  function agregarHamburguesa() {
    cantidadHamburguesas += 1;
    actualizarConteoHamburguesas();
    calcularTotal();
  }
  function quitarHamburguesa() {
    if (cantidadHamburguesas <= 1) {
      return;
    }
    cantidadHamburguesas -= 1;
    actualizarConteoHamburguesas();  
    calcularTotal();
  }
  function actualizarConteoHamburguesas() {
    const campoHamburguesas = document.querySelector("[data-hamburguesas]");
    campoHamburguesas.value = cantidadHamburguesas;  
  }
  let cantidadHamburguesas = 1;
  actualizarConteoHamburguesas();
  calcularTotal();
  const camposAfectaTotal = document.querySelectorAll("[data-afectatotal='true']");

  for (let campo = 0; campo < camposAfectaTotal.length; campo += 1) {
    camposAfectaTotal[campo].addEventListener("change", calcularTotal);
  }
  
  const botonAgregarHamburguesa = document.querySelector(".inc");
  const botonQuitarHamburguesa = document.querySelector(".dec");
  
  botonAgregarHamburguesa.addEventListener("click", agregarHamburguesa);
  botonQuitarHamburguesa.addEventListener("click", quitarHamburguesa);
  
  function ocultarSeccion(expresionCSS) {
    const seccion = document.querySelector(expresionCSS);
    seccion.style.display = "none";
  }
  
  function mostrarSeccion(expresionCSS) {
    const seccion = document.querySelector(expresionCSS);
    seccion.style.display = "flex";
  }
  
  const botonPasoADatosCliente = document.querySelector(".pedido-container .boton-siguiente");
  
  botonPasoADatosCliente.addEventListener("click", function () {
    ocultarSeccion(".pedido-container");
    mostrarSeccion(".datos-cliente");
  });
  
  const botonPasoADatosPago = document.querySelector(".datos-cliente .boton-siguiente");
  
  botonPasoADatosPago.addEventListener("click", function () {
    ocultarSeccion(".datos-cliente");
    mostrarSeccion(".pago-select");
  });