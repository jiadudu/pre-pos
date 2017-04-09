'use strict';
var result=new Array();
var arr=new Array();
var k=0;
var simbol=['-',':','['];
function countSameElements(collection) 
{
  for(var i=0;i<collection.length;i++)
  {
   if(judgeSimbol('-',collection[i]))
   {
     continue;
   }
   else if(judgeSimbol(':',collection[i]))
   {
     continue;
   }
   else if(judgeSimbol('[',collection[i]))
   {
     continue;
   }
   else
   {
     if (arr.indexOf(collection[i]) >= 0) 
     {
      result[arr.indexOf(collection[i])].summary+=1;
     }
     else
     {
      let obj = {};
      obj.name= collection[i];
      obj. summary= 1;
      result.push(obj);
      arr.push(collection[i]);
    }
   }
  }
  return result;
}
function judgeSimbol(simbol,item)
{
   if(item.indexOf(simbol)>-1)
   {
    let num=item.indexOf(simbol)-1;
     var str=item.split(simbol);
     if(arr.indexOf(str[0])>-1)
     {
       result[arr.indexOf(str[0])].summary+=parseInt(str[1]);
     }
     else
     {
     let obj={};
     obj.name=str[0];
     obj.summary=parseInt(str[1]);
     result.push(obj);
     arr.push(item);
     }
     return true;
   }
   else
   {
     return false;
   }
}
