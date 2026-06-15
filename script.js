
// Função para adoção
function adotar(nomeAnimal) {
    alert(
        "Obrigado pelo interesse em adotar " +
        nomeAnimal +
        "! Entre em contato com a AMAQI pelo WhatsApp para continuar o processo."
    );

    // Abre o WhatsApp da AMAQI
    window.open(
        "https://wa.me/5546999173407",
        "_blank"
    );
}

// Função para copiar PIX
function copiarPix() {
    const pix = "46999173407";

    navigator.clipboard.writeText(pix)
        .then(() => {
            alert("PIX copiado: " + pix);
        })
        .catch(() => {
            alert("Não foi possível copiar o PIX.");
        });
}

// Função para voluntário
function voluntario() {
    alert(
        "Obrigado por querer ser voluntário! Entre em contato conosco pelo WhatsApp."
    );

    window.open(
        "https://wa.me/5546999173407",
        "_blank"
    );
}