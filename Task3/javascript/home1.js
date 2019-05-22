var year=2016;
var month=2;
switch(month)
{
	case 6:
	case 9:
	case 5:
	case 11:console.log('31 days');
	break;
	case 1:
	case 4:
	case 3:
	case 7:
	case 8:
	case 10:
	case 12:console.log('30 days');
	break;
	case 2:if(((year % 4 == 0) && (year % 100 != 0)) || (year%400 == 0))
	console.log(' leap year 29 days');
	break;
	default:console.log('28 days');

}