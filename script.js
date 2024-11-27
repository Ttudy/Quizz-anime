function vérif()
{
    document.querySelectorAll(".nul").forEach(function(element) {
        element.style.textDecoration="line-through";
        element.style.color="red";
    });
    document.querySelectorAll(".gg").forEach(function(element) {
        element.style.color="green";
    });
}