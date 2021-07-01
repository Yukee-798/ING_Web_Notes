function log(base, truth) {
   return Math.log(truth) / Math.log(base)
}


function getDeepth(indexOfNode) {
   return Math.floor(log(2, indexOfNode + 1));
}

console.log(getDeepth(0));




// console.log(getMaxDeepth(2));