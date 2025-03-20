const accountId=9305;
let accountEmail="rajvish@gmail.com";
var accountPassword="12345";
/*   
   prefer not to use var
   because of issue in block scope and functional scope.
*/
accountCity="varanasi";

accountEmail="amanSoni@gmail.com";
accountPassword="4378";
accountCity="chandauli";  
//  accountId=2;   // not allowed.. because we can change the value of constant.git commit -m "first commit"

 console.table([accountId,accountEmail,accountPassword,accountCity]);
 
 
 
 