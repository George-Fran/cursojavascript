class ElementoHtml{
    constructor(texto){
        this.texto = texto;
    }
    renderizarElemento(){
        return '';
    }
}

class Parrafo extends ElementoHtml{
    constructor(texto){
        super(texto);
    }
    renderizarElemento(){
        return `<p>${this.texto}</p>`;
    }
}
class Encabezado extends ElementoHtml{
    constructor(texto, nivel){
        super(texto);
        this.nivel = nivel;
    }
    renderizarElemento(){
        return `<h${this.nivel}>${this.texto}</h${this.nivel}>`;
    }
}
function mostrar(tipo){
    console.log(tipo.renderizarElemento());
}

let parrafo1 = new Parrafo('Hola amigos de youtube');
let encabezado1 = new Encabezado('Titulo propiedad', 1);

mostrar(parrafo1);
mostrar(encabezado1);