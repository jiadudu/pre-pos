'use strict';

function createUpdatedCollection(collectionA, objectB) {
   return collectionA.map(function (item){
    if(objectB.value.indexOf(item.key)>-1)
    {
        var num1=item.count%3;
        var num2=(item.count-num1)/3;
        item.count-=num2;
    }
    return item;
  });
}
