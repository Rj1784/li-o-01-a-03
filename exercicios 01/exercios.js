const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('<h1>Sistema de passagens (Monolito)</h1>')
        res.write('<h1>Catalogo</h1>')
        res.write('<a href=http://localhost:8080/pagamento>passagem para Dubai</a>'+ "       " + '' + '<a href=http://localhost:8080/pagamento>passagem para Finlandia' )
    }

    if(req.url == '/pagamento'){
        res.write('<h1>microservico da sessao de pagamento')
res.end('<h1>insira os dados do seu cartao haha</h1>')
    }

})

server.listen(8080, 'localhost', () =>{
    console.log("test")
})