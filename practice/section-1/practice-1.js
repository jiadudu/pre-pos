'use strict';

var result=new Array();  //[]  let可变  const
function collectSameElements(collectionA, collectionB) {
  for (var i = 0; i <collectionA.length;i++)
  {
    for(var j = 0;j<collectionB.length;j++)
    {
      if(collectionA[i]===collectionB[j])
      {
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}