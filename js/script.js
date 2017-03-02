function calculate(){
    var form=document.getElementById('oil_calculator');
    var distance=parseInt(form.distance.value);
    var oil_value=parseInt(form.oil_value.value);
    var price=parseInt(form.price.value);
    if(isNaN(distance)||isNaN(oil_value)||isNaN(price)){
        alert('Введите число!');
    }else{
        var res=distance*oil_value/100*price;
        form.result.value=res;
    }
}