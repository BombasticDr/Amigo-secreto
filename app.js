let listaAmigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim();

    // Si el campo no está vacío
    if (amigoNombre !== '') {
        
        const li = document.createElement('li');
        li.textContent = amigoNombre;

        // Obtener la lista de amigos y agregar el nuevo amigo
        const listaAmigosElemento = document.getElementById('listaAmigos');
        listaAmigosElemento.appendChild(li);
        listaAmigos.push(amigoNombre);

        // Limpiar el campo de entrada
        amigoInput.value = '';
    }
}

function sortearAmigo() {
    // Si hay amigos en la lista
    if (listaAmigos.length > 0) {
        // Generar un índice aleatorio entre 0 y la longitud de la lista de amigos menos 1
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        
        // Crear un nuevo elemento li para mostrar el resultado
        const liResultado = document.createElement('li');
        liResultado.textContent = "Tu amigo secreto es: " + amigoSorteado;

        // Mostrar el amigo sorteado en el contenedor de resultados
        let resultado = document.getElementById("resultado");
        resultado.appendChild(liResultado);
    } else {
        alert("No hay amigos para sortear.");
    }
};
