function update()
{
    var input= document.getElementById('123')
    console.log(input.value);
    var output = document.getElementById('456')
    output.innerHTML=input.value;
}