function enviarSolicitacao(){
    var solicitacao = new Object();
    var pavimentacao = $(".form-check #pavimentacao").is(":checked");
    if(pavimentacao){
        solicitacao.tipo_servico = $("#pavimentacaoText").text()
    }   

    var recapeamento = $(".form-check #recapeamento").is(":checked");
    if(recapeamento){
        solicitacao.tipo_servico += ";" + $("#recapeamentoText").text()
    }  

    var tapaBuraco = $(".form-check #tapaBuraco").is(":checked");
    if(tapaBuraco){
        solicitacao.tipo_servico += ";" + $("#tapaBuracoText").text()
    }   

    solicitacao.endereco = $("#endereco").text();
    solicitacao.numero = $("#numero").text();
    solicitacao.cep = $("#cep").text();
    //solicitacao.cidade = $("#cidade").text();

    $.ajax({
        method: "POST",
        url: "http://localhost:3001/solicitar/enviar",
        data: solicitacao
    }).done(function(msg){
        document.location.href = "http://localhost:3001/solicitacao/concluido/" + msg.id;  
   })
}
 