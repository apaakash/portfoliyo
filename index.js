function validate()
{
    var Username = document.getElementById("E1");
    if(Username.value.trim() == "")
    {
        alert("Blank Email");
        return false;
    }
    else
    {
        true;
    }

}