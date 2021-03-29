function chop_chunk(s,x){
  var count = 0;
  var res = [];
  for(var i = 0; i < s.length; i++)
    {
     count = count + 1
     var tmp = tmp + s[i];
     if((count === x) && (s.length > x)){
        res.push(tmp);
        tmp = "";
        count = 0;
     }
    }// fin for
    if(s.length - i < x){
        res.push(tmp);
     }
   
 return res;
}// fin function
chop_chunk("Motsebo",2);
