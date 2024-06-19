module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        res.send('Noticias')

    });
    app.get("/noticias/:id", function (req, res) {
        res.send('ola - noticias id'+req.params.id);
    });

    app.get("/noticias/:Indentificaçao/:NomeCompleto", function (req, res) {
        res.send('Noticias = Notificaçao:'+ req.params.Indentificaçao + "Nome Completo: "+ req.params.NomeCompleto);
    });

    app.post("/noticias/:titulo/:noticia", function(req, res){
        var  conexao = app.config.dbConnection();
        var querryNoticias = "INSERT INTO `portal_noticias`.`noticias`(`titulo`,`noticia`)VALUES(''"+req.params.titulo+
        ",''"+req.params.noticia+")";
        res.send("insert no banco: " +querryNoticias)})
}