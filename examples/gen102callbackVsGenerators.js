
var fs = require('fs');
var request = fs.readFile

// Create a Thunk
var requestThunk = function(callback){
  request('myservice','utf-8', callback);
}

// Library
function co(generator) {
  var gen = generator();
  function nextItem(err, result) {
    var item = gen.next(result);
    if (!item.done) {
      item.value(nextItem);
    }
  }
  nextItem();
}

//Use
co(function* () {
  var file = yield requestThunk;
  console.log(file);
});


// The callback way
request('myservice','utf-8', function(error, result){
  console.log(result);
});

console.log('This will happend first');
