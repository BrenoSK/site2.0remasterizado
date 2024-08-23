<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $group_link = htmlspecialchars($_POST['group-link']);
    $group_name = htmlspecialchars($_POST['group-name']);
    $group_photo = htmlspecialchars($_POST['group-photo']);
    $group_description = htmlspecialchars($_POST['group-description']);
    $group_category = htmlspecialchars($_POST['group-category']);

    // Aqui você pode salvar os dados em um banco de dados ou enviar por e-mail
    // Exemplo simples de exibição dos dados (não recomendado para produção)

    echo "<h1>Grupo Adicionado</h1>";
    echo "<p><strong>Nome:</strong> $group_name</p>";
    echo "<p><strong>Link:</strong> <a href=\"$group_link\" target=\"_blank\">$group_link</a></p>";
    echo "<p><strong>Foto:</strong> <img src=\"$group_photo\" alt=\"$group_name\" style=\"max-width: 100px; max-height: 100px;\"></p>";
    echo "<p><strong>Descrição:</strong> $group_description</p>";
    echo "<p><strong>Categoria:</strong> $group_category</p>";

    // Aqui você pode adicionar código para salvar os dados no banco de dados
} else {
    echo "Método de solicitação inválido.";
}
?>
