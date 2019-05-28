
function Unselect_all()
{
	var items=document.getElementsByName('addition')
	
		for( var i=0;i<items.length;i++)
		{
			if(items[i].type=='checkbox')
			{
				items[i].checked=false;
			}
		}

}
function Select_all()
{
	var items=document.getElementsByName('addition')
	
		for( var i=0;i<items.length;i++)
		{
			if(items[i].type=='checkbox')
			{
				items[i].checked=true;
			}
		}

}
function result()
{
	var items=document.getElementsByName('addition');
				var sum=0;
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						sum=parseInt(items[i].value)+sum;
				}
				var show=document.write("Total sum "+sum);
				document.getElementById("demo").innerHTML=show;
			}

