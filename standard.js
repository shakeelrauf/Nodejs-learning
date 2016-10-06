/*
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
  process.stdout.write('chunk:' + chunk.toString());
});

process.stdin.on('end',function(){
  process.stdout.write('end\n');
});*/
var trans= require('stream').Transform();

trans._transform= function(chunk,enc,done){
  this.push(chunk.toString().split('').map(function(char){
    return String.fromCharCode(char.charCodeAt(0)+1);
  }).join(''));
  done();
};


process.stdin.pipe(trans).pipe(process.stdout);