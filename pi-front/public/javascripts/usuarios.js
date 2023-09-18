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

    $.ajax({
        method: "POST",
        url: "http://localhost:3001/usuarios/" + usuario.id + "/atualizar",
        data: usuario
    })
}

function alterarDadosPessoais(){
    var usuario = new Object();
    usuario.id = $("#modal-dados-pessoais #id").val();
    usuario.nome = $("#nome").text();

    usuario.dataNascimento = $("#modal-dados-pessoais #idade").val();
    usuario.cpf = $("#modal-dados-pessoais #cpf").val();
    usuario.celular = $("#modal-dados-pessoais #celular").val();
    usuario.ddd = $("#modal-dados-pessoais #ddd").val();
    usuario.email = $("#modal-dados-pessoais #email").val(); 

    usuario.endereco = $("#rua").text();
    usuario.numero = $("#numero").text();
    usuario.cep = $("#cep").text();
    
}

function alterarEndereco(){
    var usuario = new Object();
    usuario.id = $("#modal-endereco #id").val();
    usuario.nome = $("#nome").text();

    usuario.dataNascimento = $("#idade").text();
    usuario.cpf = $("#cpf").text();
    usuario.celular = $("#celular").text();    
    usuario.ddd = $("#ddd").text();
    usuario.email = $("#email").text();    

    usuario.endereco = $("#modal-endereco #rua").val();
    usuario.numero = $("#modal-endereco #numero").val();
    usuario.cep = $("#modal-endereco #cep").val();
}

