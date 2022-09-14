$(document).ready(function(){

    $('.btn') .click(function(e){
     e.preventDefault()

     let uf = $('#UF').val()

     let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`

     $.ajax({
         type: 'GET',
         dataType: 'JSON',
         url: url,
         success:function(dados){
             $('#UF').val(dados.uf)
         }
      })
    })
})