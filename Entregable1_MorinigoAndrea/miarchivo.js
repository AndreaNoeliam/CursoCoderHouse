// Declaración de datos iniciales
const destinos = [
    { nombre: "Arrecife Coral", nivelRequerido: "Principiante" },
    { nombre: "Naufragio del Tesoro", nivelRequerido: "Intermedio" },
    { nombre: "Caverna Profunda", nivelRequerido: "Avanzado" }
  ];
  
  // Función 1: Mostrar destinos disponibles utilizando un bucle for
  function mostrarDestinos() {
    console.log("Lista de destinos de buceo:");
    for (let i = 0; i < destinos.length; i++) {
      console.log(`${i + 1}. ${destinos[i].nombre} (Nivel: ${destinos[i].nivelRequerido})`);
    }
  }
  
  // Función 2: Registrar usuario
  function registrarUsuario() {
    const nombre = prompt("Ingrese su nombre:");
    const nivel = prompt("Ingrese su nivel de buceo (Principiante, Intermedio, Avanzado):");
    return { nombre, nivel };
  }
  
  // Función 3: Recomendar destino utilizando un bucle for
  function recomendarDestino(usuario) {
    let destinosRecomendados = [];
    
    for (let i = 0; i < destinos.length; i++) {
      if (destinos[i].nivelRequerido === usuario.nivel) {
        destinosRecomendados.push(destinos[i].nombre);
      }
    }
  
    if (destinosRecomendados.length > 0) {
      alert(`Hola ${usuario.nombre}, estos destinos son ideales para tu nivel:\n` +
            destinosRecomendados.join("\n"));
    } else {
      alert(`Hola ${usuario.nombre}, no hay destinos disponibles para tu nivel de buceo.`);
    }
  }
  
  // Función principal
  function simuladorBuceo() {
    mostrarDestinos();
    const usuario = registrarUsuario();
    recomendarDestino(usuario);
  }
  
  // Inicio del simulador
  alert("¡Bienvenido al simulador de buceo!");
  simuladorBuceo();
  