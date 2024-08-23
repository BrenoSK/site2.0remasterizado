// Função para filtrar os cursos e atualizar o contador de cursos visíveis
function filterCourses() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const courseList = document.getElementById("course-list");
    const courseItems = courseList.getElementsByTagName("li");

    let visibleCount = 0;

    for (let i = 0; i < courseItems.length; i++) {
        const courseName = courseItems[i].innerText.toLowerCase();
        if (courseName.includes(searchInput)) {
            courseItems[i].style.display = "";
            visibleCount++;
        } else {
            courseItems[i].style.display = "none";
        }
    }

    // Atualiza o contador de cursos visíveis
    document.getElementById("total-courses").innerText = "Total de Cursos: " + visibleCount;
}

// Função para contar o total de cursos na inicialização
function updateTotalCourses() {
    const totalCourses = document.getElementById("course-list").getElementsByTagName("li").length;
    document.getElementById("total-courses").innerText = "Total de Cursos: " + totalCourses;
}

// Chama a função para contar o total de cursos ao carregar a página
updateTotalCourses();
