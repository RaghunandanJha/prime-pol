 let flag=false; 
   for(let i=2;i<a;++i){
       if(a%i==0){
           flag=true;
           break;
       }
   }
   let prime=false; 
   for(let j=2;j<b;++j){
       if(b%j==0){
           prime=true;
           break;
       }
   }
   if(flag==prime){console.log('Yes')}
   else{console.log('No')}
