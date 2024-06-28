module.exports = function (app) {
    app.get("/formulario_inclusao_noticias", function (req, res) {
        res.render("admin/form_add_news");
    });

    app.post("/formulario_inclusao_noticias", function (req, res) {
        res.end("ola"+req.body);
    }); 
}