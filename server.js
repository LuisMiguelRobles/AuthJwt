var routes = require("./routes/routes");


function iniciar(app) {
  var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
  routes(app);
 	
  });
}

exports.iniciar = iniciar;