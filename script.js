function tempconvertor()
{
    var c=document.getElementById("celsius").value;
    var f=c*9/5+32;
    document.getElementById("fahrenheit").value=f;
}
function weightconvertor()
{
    var kg=document.getElementById("kilo").value;
    var lb=kg*2.20462;
    document.getElementById("pounds").value=lb;
}
function distanceconvertor()
{
    var kms=document.getElementById("km").value;
    var mile=kms/1.609;
    document.getElementById("miles").value=mile;
}