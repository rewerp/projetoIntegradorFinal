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
        //closePerfil();
        document.location.href = "http://localhost:3001/solicitacao/concluido";  
   })
}


function editarPerfil(){
    $("#modal-perfil").show();
    $("#modal-perfil #nomeAtual").val($("#nome").text());
}

function closePerfil(){
    $("#modal-perfil").hide();
}

function editarDadosPessoais(){
    $("#modal-dados-pessoais").show();
    $("#modal-dados-pessoais #idadeAtual").val($("#idade").text());
    $("#modal-dados-pessoais #cpfAtual").val($("#cpf").text());
    $("#modal-dados-pessoais #celularAtual").val($("#celular").text());
    $("#modal-dados-pessoais #emailAtual").val($("#email").text());            
}

function closeDadosPessoais(){
    $("#modal-dados-pessoais").hide();
}

function editarEndereco(){
    $("#modal-endereco").show();
    $("#modal-endereco #enderecoAtual").val($("#rua").text());
    $("#modal-endereco #numeroAtual").val($("#numero").text());
    $("#modal-endereco #cepAtual").val($("#cep").text());
    $("#modal-endereco #cidadeAtual").val($("#cidade").text());
}

function closeEndereco(){
    $("#modal-endereco").hide();
}

function alterarPerfil(){
    var usuario = new Object();
    usuario.id = $("#perfil #id").val();
    usuario.nome = $("#modal-perfil #nome").val();

    usuario.dataNascimento = $("#idade").text();
    usuario.cpf = $("#cpf").text();
    usuario.celular = $("#celular").text();
    usuario.ddd = $("#ddd").text();
    usuario.email = $("#email").text();  

    usuario.endereco = $("#rua").text();
    usuario.numero = $("#numero").text();
    usuario.cep = $("#cep").text();
    usuario.cidade = $("#cidade").text();

    $.ajax({
        method: "POST",
        url: "http://localhost:3001/usuarios/" + usuario.id + "/atualizar",
        data: usuario
    }).done(function(msg){
        closePerfil();
        document.location.href = "http://localhost:3001/usuarios";        
   })
}

function alterarDadosPessoais(){
    var usuario = new Object();
    usuario.id = $("#perfil #id").val();
    usuario.nome = $("#nome").text();

    var data = $("#modal-dados-pessoais #idade").val();    

    usuario.dataNascimento = FormataStringData(data);
    usuario.cpf = $("#modal-dados-pessoais #cpf").val();
    usuario.celular = $("#modal-dados-pessoais #celular").val();
    usuario.ddd = $("#modal-dados-pessoais #ddd").val();
    usuario.email = $("#modal-dados-pessoais #email").val(); 

    usuario.endereco = $("#rua").text();
    usuario.numero = $("#numero").text();
    usuario.cep = $("#cep").text();
    usuario.cidade = $("#cidade").text();

    $.ajax({
        method: "POST",
        url: "http://localhost:3001/usuarios/" + usuario.id + "/atualizar",
        data: usuario
    }).done(function(msg){
        closeDadosPessoais();
        document.location.href = "http://localhost:3001/usuarios";        
   })
    
}

function alterarEndereco(){
    var usuario = new Object();
    usuario.id = $("#perfil #id").val();
    usuario.nome = $("#nome").text();

    usuario.dataNascimento = $("#idade").text();
    usuario.cpf = $("#cpf").text();
    usuario.celular = $("#celular").text();    
    usuario.ddd = $("#ddd").text();
    usuario.email = $("#email").text();    

    usuario.endereco = $("#modal-endereco #rua").val();
    usuario.numero = $("#modal-endereco #numero").val();
    usuario.cep = $("#modal-endereco #cep").val();
    usuario.cidade = $("#modal-endereco #cidade").val();

    $.ajax({
        method: "POST",
        url: "http://localhost:3001/usuarios/" + usuario.id + "/atualizar",
        data: usuario
    }).done(function(msg){
        closeEndereco();
        document.location.href = "http://localhost:3001/usuarios";        
   })
}

function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

