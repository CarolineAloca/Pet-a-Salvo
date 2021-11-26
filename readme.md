Para iniciar o projeto em Node/express

OBS: o arquivo "package.json" já possui as dependencias necessárias para o projeto. Basta digitar "npm install" que todas já vão ser instaladas.

No terminal:

.npm init -> Ir confirmando com "Enter", no final "yes"
.npm install -> Instala as dependencias
.npm intall express
.npm install dotenv
.npm install mssql
.npm install nodemon

Na pasta "package.json, adicionar o "start":

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon app"
}

No arquivo app.js:

app.get('/',function(req,res) {
res.sendFile('C:/Users/Danilo Dantas/Desktop/Desktop again/Projetos de Programação/site_teste_danilo/index.html')

} )
