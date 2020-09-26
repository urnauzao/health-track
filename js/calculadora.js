$(document).ready(function(){
    if($('#inputPeso')){
        peso = $('#inputPeso');
        altura = $('#inputAltura');
        resultado = $('#resultIMC');
        frase = $('#frase');
        keyPeso = false;
        keyAltura = false;
        btnSalvar = $('#btnSalvarIMC');
        table = $("#tableIMC");
        imc = 0;

        
        
        function calcular(){
            if(peso.val() > 0 && altura.val() > 0 && peso.val() <= 500 && altura.val() <= 3.5){
                x = peso.val()/(altura.val()*altura.val());
                resultado.text(x.toFixed(2).toString().replace(".", ","));
                frase.removeClass('d-none');
                imc = x;
                btnSalvar.prop('disabled', false);
            }else{
                btnSalvar.prop('disabled', true);
                if(peso.val() < 0){
                    resultado.text('Peso deve ser superior a zero.');
                    peso.addClass('is-invalid');
                }else if(peso.val() >= 500){
                    resultado.text('Peso não deve superar 500 kg.');
                    peso.addClass('is-invalid');
                }else if(altura.val() < 0){
                    resultado.text('Altura deve ser maior que zero.');
                    altura.addClass('is-invalid');
                }else if(altura.val() >= 3.5){
                    resultado.text('Altura não deve superar 3,50m.');
                    altura.addClass('is-invalid');
                }else{
                    resultado.text(' Digite valores válidos!');
                }
            } 
        }
        function checaForms(){
            if(keyPeso && keyAltura){
                calcular();
            }
        }
        peso.keyup(function () {
            keyPeso = true;
            checaForms();
        });
        altura.keyup(function () {
            keyAltura = true;
            checaForms();
        });

        peso.focus(function(){
            peso.removeClass('is-invalid');
        });
        altura.focus(function(){
            altura.removeClass('is-invalid');
        });


        function salvarItem() {
            d = new Date();
            var row = table.append('<tr><th scope="row">'+1+'</th>'+
            '<td>'+d.getDay()+'/'+d.getMonth()+'/'+d.getFullYear()+'</td>'+
            '<td>'+imc+'</td>'+
            '<td>'+Math.floor((Math.random() * 100) + 1)+'%</td>'+
            '<td>Sobrepeso</td></tr>');
            peso.val('0,00');
            altura.val('0,00');
          }

          btnSalvar.click(function(){
              salvarItem();
          });






            
    }
});
