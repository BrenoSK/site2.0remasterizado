// Função para filtrar os PDFs e atualizar o contador de PDFs visíveis
function filterPDFs() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const pdfList = document.getElementById("pdf-list");
    const pdfItems = pdfList.getElementsByTagName("li");

    let visibleCount = 0;

    for (let i = 0; i < pdfItems.length; i++) {
        const pdfName = pdfItems[i].innerText.toLowerCase();
        if (pdfName.includes(searchInput)) {
            pdfItems[i].style.display = "";
            visibleCount++;
        } else {
            pdfItems[i].style.display = "none";
        }
    }

    // Atualiza o contador de PDFs visíveis
    document.getElementById("total-pdfs").innerText = "Total de PDFs: " + visibleCount;
}

// Função para contar o total de PDFs na inicialização
function updateTotalPDFs() {
    const totalPDFs = document.getElementById("pdf-list").getElementsByTagName("li").length;
    document.getElementById("total-pdfs").innerText = "Total de PDFs: " + totalPDFs;
}

// Chama a função para contar o total de PDFs ao carregar a página
updateTotalPDFs();
