var x=0;
var array=Array();
function add()
{
array[x]=document.getElementById("text").value;
x++;
document.getElementById("text").value=" ";
}
function display()
{
	for(var i=0;i<array.length;i++)
	{
		alert("a = "+array[i]+" "+i+ " Index ");
	}
}