module.exports = function(app){
    app.get('/cursos', function(req,res){
        res.render("secao/cursos");
    }) 
}