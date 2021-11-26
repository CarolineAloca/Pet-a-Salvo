const express = require('express')
const doQuery = require('./models/DBConfig')

const app = express()

function convertBanco(dado) {
  if (dado == "on") {
    return dado = 1
  } else {
    return dado = 0
  }
}

app.use(express.static('assets/'))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.set('view engine', 'ejs')

app.set('views', './view')

app.post('/cadastro', function (req, res) {

  console.log(req.body)
  let d = req.body
  d.atualizacoes = convertBanco(d.atualizacoes)
  console.log(d)

  let query = `INSERT INTO doacoes values ('${d.nomesobrenome}','${d.cpf}','${d.email}', '${d.telefone}','${d.celular}','${d.cep}','${d.endereco}','${d.item1}','${d.item2}','${d.item3}','${d.item4}','${d.item5}','${d.item6}','${d.dataColeta}','${d.horarioAtendimento}','${d.nossoContato}',${d.atualizacoes})`




  doQuery(query, function (result) {
    res.render('doacao', { sucesso: "Sucesso!" })

  })

  // res.sendFile('C:/projetos de programação/Site-Teste-Ivo/index.html')

})





app.get('/', function (req, res) {
  res.render('index')
})

app.get('/doacao', function (req, res) {
  res.render('doacao', { sucesso: "Inicial" })
})

app.get('/contribuicao', function (req, res) {

  let querySel = `SELECT SUM(arroz) as arroz, SUM(feijao) as feijao, SUM(agua) as agua, SUM(oleo) as oleo, SUM(macarrao) as macarrao, SUM(molhoDeTomate) as molhoDeTomate FROM doacoes`

  doQuery(querySel, function (result) {
    console.log(result)
    res.render('contribuicao', { dados: result })
  })



})


app.listen(12345)