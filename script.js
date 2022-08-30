
document.getElementById('Submit-Btn').addEventListener('click',function(){
    let FirstName=document.getElementById('FirstName').value;
    let LastName=document.getElementById('LastName').value;
    let Email=document.getElementById('Email').value;
    let PhoneNumber=document.getElementById('Phonenumber').value;
    let BatchNo=document.getElementById('Batchno').value;
    let CurrentModule=document.getElementById('Currentmodule').value;
    let tnc=document.getElementById('tnC').checked;
    let error=false;
if(FirstName && FirstName.length>=3){
    document.getElementById('firstName-valid').style.display='block';
    document.getElementById('firstName-invalid').style.display='none';
}else{
    document.getElementById('firstName-valid').style.display='none';
    document.getElementById('firstName-invalid').style.display='block';
   error=true;
}
if(LastName && LastName.length>=3){
    document.getElementById('lastName-valid').style.display='block';
    document.getElementById('lastName-invalid').style.display='none';
}else{
    document.getElementById('lastName-valid').style.display='none';
    document.getElementById('lastName-invalid').style.display='block';
   error=true;
}
if(Email && Email.includes('@') && Email.includes('.') && Email.indexOf('@')!==0 && Email.lastIndexOf('.')<=Email.length-3){
    document.getElementById('Email-valid').style.display='block';
    document.getElementById('Email-invalid').style.display='none';
}else{
    document.getElementById('Email-valid').style.display='none';
    document.getElementById('Email-invalid').style.display='block';
    error=true;
}
if(PhoneNumber && PhoneNumber.length===10 ){
    document.getElementById('Phone-valid').style.display='block';
    document.getElementById('Phone-invalid').style.display='none';
}else{
    document.getElementById('Phone-valid').style.display='none';
    document.getElementById('Phone-invalid').style.display='block';
    error=true;
}
if( BatchNo!=='Batch' ){
    document.getElementById('Batch-valid').style.display='block';
    document.getElementById('Batch-invalid').style.display='none';
}else{
    document.getElementById('Batch-valid').style.display='none';
    document.getElementById('Batch-invalid').style.display='block';
    error=true;
}
if( CurrentModule!=='CurrentModule' ){
    document.getElementById('Current-valid').style.display='block';
    document.getElementById('Current-Invalid').style.display='none';
}else{
    document.getElementById('Current-valid').style.display='none';
    document.getElementById('Current-Invalid').style.display='block';
    error=true;
}
if(tnc){
    document.getElementById('Tnc-invalid').style.display='none'
}else{
    document.getElementById('Tnc-invalid').style.display='block'
    error=true;
}
if(!error){
    alert('Your details have been saved successfully!')
    
    document.getElementById('FirstName').value='';
   document.getElementById('LastName').value='';
    document.getElementById('Email').value='';
   document.getElementById('Phonenumber').value='';
 document.getElementById('Batchno').value='Batch';
    document.getElementById('Currentmodule').value='CurrentModule';
    document.getElementById('tnC').checked=false;


    document.getElementById('firstName-valid').style.display='none';
    document.getElementById('lastName-valid').style.display='none';
    document.getElementById('Email-valid').style.display='none';
    document.getElementById('Phone-valid').style.display='none';
    document.getElementById('Batch-valid').style.display='none';
    document.getElementById('Current-valid').style.display='none';
}
})
    