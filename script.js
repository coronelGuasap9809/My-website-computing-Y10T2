function searchFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("Links")
    li = ul.getElementsByTagName("li");
    for (i = 0; 1 < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"
        }
    }
}