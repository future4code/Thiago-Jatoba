

const postTitle = document.getElementById('titulo-post')
    console.log(postTitle)
const postAuthor = document.getElementById('autor-post')
    console.log(postAuthor)
const postQuote = document.getElementById
('conteudo-post')
    console.log(postQuote)/* RESOLUÇÃO DA PRIMEIRA PARTE DO EXERCÍCIO */
const webImage = document.getElementById/* DESAFIO NUMERO #1 */
('imagem-post')
    console.log(webImage)

const blogCollection = []

const postBlogClick = () => {

    let posted = document.getElementById('container-de-posts')

    postContent = {
        title: postTitle.value,
        author: postAuthor.value,
        quote: postQuote.value,
        photo: webImage.value/* DESAFIO NUMERO #1 */
    }

    if (postContent.title !== '' && postContent.author !== '' && postContent.quote !== '' && webImage.value !== ''){
        blogCollection.push(postContent)
        posted.innerHTML = posted.innerHTML += `
        <div>
            <h3>${postContent.title}</h3>
            <h4>${postContent.author}</h4>
            <p>${postContent.quote}</p>
            <img src=${postContent.photo}>
        </div> 
        `;
        
        postTitle.value = ''
        postAuthor.value = ''
        postQuote.value = ''
        webImage.value = '' /* DESAFIO NUMERO #1 */


    } else{
        alert('Preencha corretamente todos os campos em branco')
    }

    console.log(postContent)
}

const postBlogType = (event) => {
    console.log(event)
    if (event.key === 'Enter'){
        postBlogClick()
    }

} 

