$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault()
        let inp = $("input");
        for (i = 0; i < inp.length; i++) {
            if (inp[i].value === "") {
                inp[i].classList.add("error");
            } else {
                inp[i].classList.remove("error");
            }
        }
        
    })
});