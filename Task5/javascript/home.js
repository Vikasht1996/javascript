var a="India Bangladeshes America SouthAfrica";
var str=a.split(' ');

var longest = 0;
var word = 0;
    for (var i = 0; i < str.length; i++) 
    {
        if (longest < str[i].length) 
        {
            longest =str[i].length;
            word = str[i];
        }
    }
    document.write(word);
  
