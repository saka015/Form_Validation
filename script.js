function seterror(id ,error)
{
    //set error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML =error

}
//* Clear errors during typing
function clearErrors(){

    errors=document.getElementById('formerror').innerHTML
    for(let i=0;i<errors.length;i++)
    {
        i.innerHTML='';
    }
}

function validateForm()
{   
    var returnval=true

    //perform validation by using 'id' 
    var name = document.forms['myForm']["fname"].value

    if(name.length <5)
    {
        seterror("name" , "*Length is too short!");
        returnval =false;
    }

    if(name.length ==0)
    {
        seterror("name" , "*name cannot be blank!");
        returnval =false;
    }

    var email = document.forms['myForm']["femail"].value
    if(email.length > 25)
    {
        seterror("email" , "*Email is too long!");
        returnval =false;
    }

    var phone = document.forms['myForm']["fphone"].value
    if(phone.length !=10)
    {
        seterror("phone" , "*Phone number should be of 10 digits!");
        returnval =false;
    }

    var password = document.forms['myForm']["fpass"].value
    if(password.length < 8)
    {
        seterror("pass" , "*Password should be greater than 8 characters!");
        returnval =false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value
    if(cpassword != password)
    {
        seterror("cpass" , "*Password not matched!");
        returnval =false;
    }



    return returnval
}
