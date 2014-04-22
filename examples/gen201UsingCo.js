var co = require('co');
var thunkify = require('thunkify');
var request = require('request');
var get = thunkify(request.get);

co(function *(){
  var a = yield get('http://google.com');
  var b = yield get('http://yahoo.com');
  var c = yield get('http://cloudup.com');
  console.log(a[0].statusCode);
  console.log(b[0].statusCode);
  console.log(c[0].statusCode);
})()

co(function *(){
  var a = get('http://google.com');
  var b = get('http://yahoo.com');
  var c = get('http://cloudup.com');
  var res = yield [a, b, c];
  console.log(res);
})()

// Error handling

co(function *(){
  try {
    var res = yield get('http://badhost.invalid');
    console.log(res);
  } catch(e) {
    console.log(e.code) // ENOTFOUND
 }
})()
