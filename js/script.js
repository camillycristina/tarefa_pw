$(document).ready(function(){

     $.ajax({
         type: 'GET',
         dataType: 'JSON',
         data: {orderBy: "nome"},
         url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
         success:function(dados){
                
                 $.each(dados, function (indexInArray, valueOfElement) {
                var option = "<option>"+valueOfElement.sigla+"</option>"                
                $("#UF").append(option)               
         })
        }

      })
      $('#Local').hide()
      $('#UF').change(function(e){
        e.preventDefault();
        $('#Local').show()
        $("#Cidade").empty();
        var UF = $('#UF').val();


      $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,
        success:function(dados){
               
                $.each(dados, function (indexInArray, valueOfElement) {
               var option = "<option>"+valueOfElement.nome+"</option>"                
               $("#Cidade").append(option)               
        })
       }

     })
  })
})
