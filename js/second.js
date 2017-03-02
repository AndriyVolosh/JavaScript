function calculate(){
    var form=document.getElementById('calculator');
    var op1=parseInt(form.first.value);
    var select=form.select.value;
    var op2=parseInt(form.second.value);
    if(isNaN(op1)||isNaN(op2)){
        alert('NaN');
    }else if(select==="+"){
        var res=op1+op2;
        form.result.value=res;
    }else if(select==="-"){
        var res=op1-op2;
        form.result.value=res;
    }else if(select==="*"){
        var res=op1*op2;
        form.result.value=res;
    }else{
        var res=op1/op2;
        form.result.value=res;
    }
}