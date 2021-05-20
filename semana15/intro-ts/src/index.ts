//EXERCÍCIO 1
/* a)

let minhaString: string 
minhaString = 'Sou uma String!'

minhaString = 4 - Type 'number' is not assignable to type 'string'.

*/

/* b) 
//let meuNumero: number
// meuNumero = 6

let meuNumero: number | string

meuNumero = 4
meuNumero = '4'
*/

/*c)

enum CORES_DO_ARCOIRIS{
    VERMELHO = "Vermelho",
    AZUL = "Azul",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    LARANJA = "Laranja",
    VIOLETA = "Violeta"
}

type person = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCOIRIS
}

const person1 = {
    nome: 'Flora',
    idade: 23,
    corFavorita: CORES_DO_ARCOIRIS.AZUL
}

const person2 = {
    nome: 'Thiago',
    idade: 40,
    corFavorita: CORES_DO_ARCOIRIS.VERDE
}

const person3 = {
    nome: 'Elaine',
    idade: 63,
    corFavorita: CORES_DO_ARCOIRIS.VIOLETA
}

const persons: person[] = [person1,person2,person3]

console.table(persons);
*/

// EXERCÍCIO 2

/*a) A entrada é um array com números e a saida é um objeto
function obterEstatisticas(numeros: number[]): {
    maior: number;
    menor: number;
    media: number;
*/


/*b) 
As variaveis são numerosOrdenados, soma e estatisticas
*/

/* c)
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeIdades = {
    numeros: number[], 
    function : (numeros: number[]) => object
}

const test: amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18], 
    function: obterEstatisticas
}
console.table(test.function(test.numeros))
*/

// EXERCÍCIO 3

/*a)
type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]
*/
/* b)
function buscarPostsPorAutor (posts: post[], autorInformado: string): post[]{
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}
console.table(buscarPostsPorAutor(posts, 'Dobby'))
*/

//EXERCÍCIO 4


