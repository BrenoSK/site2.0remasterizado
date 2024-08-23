document.addEventListener("DOMContentLoaded", function() {
    const validateButton = document.getElementById('validate-link');
    const linkInput = document.getElementById('group-link');
    const errorMessage = document.getElementById('error-message');

    validateButton.addEventListener('click', function() {
        const link = linkInput.value;

        // Exemplo de validação (você pode substituir por uma chamada real para verificar o link)
        if (link.includes('whatsapp.com')) {
            // Redireciona para a próxima página com o link do grupo
            window.location.href = `proxima-etapa.html?link=${encodeURIComponent(link)}`;
        } else {
            errorMessage.classList.remove('hidden');
        }
    });

    // Recuperar link da URL e preencher o campo oculto na próxima etapa
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        const groupLink = urlParams.get('link');
        if (groupLink) {
            document.getElementById('group-link').value = groupLink;
        }
    }
});
