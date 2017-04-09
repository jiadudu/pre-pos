'use strict';
var result=new Array();
 const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
 const collectionB = [['a', 'd', 'e', 'f']];
function collectSameElements(collectionA, collectionB) {
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0; j<collectionB[0].length;j++)
    {
      if(collectionA[i]===collectionB[0][j])
      {
        result.push(collectionA[i]);
      }
    }
  }
  
  return result;
}
