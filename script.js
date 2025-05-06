function enviarParaWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    const numeroWhatsApp = "5579999438492";
    const mensagem = `Olá! Quero receber novidades da Petúnia Lingerie.%0ANome: ${encodeURIComponent(nome)}%0AMeu WhatsApp: ${encodeURIComponent(telefone)}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(url, '_blank');

    // Limpa os campos do formulário após o envio
    document.getElementById("formNewsletter").reset();
  }