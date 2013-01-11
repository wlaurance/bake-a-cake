var spawn = require('child_process').spawn;

var init = function(cb){
  var npm = spawn('npm', ['init'], {stdio: 'inherit'});
  npm.on('exit', cb);
};

var install = function(cb){
  var npm = spawn('npm', ["install", "mocha", "should", "coffee-script", "colors", "-D"], {stdio: 'inherit'});
  npm.on('exit', cb);
};

var copy = function(cb){
  var cp = spawn('cp', [__dirname + '/../lib/Cakefile', process.cwd()], {stdio: 'inherit'});
  cp.on('exit', cb);
};

var mkd = function(){
  var mkdir = spawn('mkdir', ["lib", "src", "test"], {stdio: 'inherit'});
  mkdir.on('exit', process.exit);
};

module.exports = init(function(){
  install(function(){
    copy(function(){
      mkd();
    });
  });
});
