 // first getting every field input  and putting in  click submit button funtion
 // so form valid only when submit button is clicked
document.getElementById('Submit-Btn').addEventListener('click',function(){
    let FirstName=document.getElementById('FirstName').value;
    let LastName=document.getElementById('LastName').value;
    let Email=document.getElementById('Email').value;
    let PhoneNumber=document.getElementById('Phonenumber').value;
    let BatchNo=document.getElementById('Batchno').value;
    let CurrentModule=document.getElementById('Currentmodule').value;
    let tnc=document.getElementById('tnC').checked;
    let error=false;

    // now we are appling a condition on first and last name input field
    // that alest 3 character should be in first and last name

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

// now we are applying contions in email field that
// 1. @ should not be the first character
// 2. after . there should be atleast 2 characters
//  3. email should not be blank

if(Email && Email.includes('@') && Email.includes('.') && Email.indexOf('@')!==0 && Email.lastIndexOf('.')<=Email.length-3){
    document.getElementById('Email-valid').style.display='block';
    document.getElementById('Email-invalid').style.display='none';
}else{
    document.getElementById('Email-valid').style.display='none';
    document.getElementById('Email-invalid').style.display='block';
    error=true;
}
  // In phone number will only valid if number count is == 10

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
  
// if all the details are filled are then this alert msg pop up

if(!error){
    alert('Your details have been saved successfully!')
    
    document.getElementById('FirstName').value='';
   document.getElementById('LastName').value='';
    document.getElementById('Email').value='';
   document.getElementById('Phonenumber').value='';
 document.getElementById('Batchno').value='Batch';
    document.getElementById('Currentmodule').value='CurrentModule';
    document.getElementById('tnC').checked=false;

  //  and all fields will left empty after clicking submit button

    document.getElementById('firstName-valid').style.display='none';
    document.getElementById('lastName-valid').style.display='none';
    document.getElementById('Email-valid').style.display='none';
    document.getElementById('Phone-valid').style.display='none';
    document.getElementById('Batch-valid').style.display='none';
    document.getElementById('Current-valid').style.display='none';
}
})
    