// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     // if things go well...
//     resolve(79);
//     // if things didn't go well...
//     reject('City not found');
//   });
// }
//
// // Call Promise and wait for data with success & error cases
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'string' && typeof b === 'string'){
      resolve(a + b);
    }else {
      reject('Not a number dummy!');
    }
  });
}

addPromise(2, 3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
