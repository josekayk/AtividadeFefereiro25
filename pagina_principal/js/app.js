/*function aplicarCores() {
    
    const cores = {
        "Alta": "#CF3F3F",  // Vermelho
        "Média": "#FFBD3D", // Amarelo
        "Baixa": "#72C240"  // Verde
    };

   
    const elementos = document.querySelectorAll('.etiqueta__prioridade');

   
    elementos.forEach(elemento => {
        const prioridade = elemento.textContent.trim(); 
        if (cores[prioridade]) {
            elemento.style.backgroundColor = cores[prioridade]; 
            elemento.style.color = "#fff"; 
            elemento.style.padding = "5px 10px"; 
            elemento.style.borderRadius = "5px"; 
            elemento.style.fontWeight = "bold"; 
        }
    });
}
*/













//Forma do professor:

 const etiquetasPrioridade = document.querySelectorAll('.etiqueta__prioridade');

etiquetasPrioridade.forEach(prioridade => {
    if(prioridade.textContent === 'Alta') {
        prioridade.classList.add('etiqueta--alta')
        
    } else if(prioridade.textContent === 'Média') {
        prioridade.classList.add('etiqueta--media')

    } else if(prioridade.textContent === 'Baixa') {
        prioridade.classList.add('etiqueta--baixa')
    }

})

console.log(etiquetasPrioridade)
