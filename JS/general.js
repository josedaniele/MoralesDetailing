//Cambio de modo diurno a nocturno

$(function () {
  $("#ligthMode").click(function () {
    $("body").css({ "background-color": "white" });
    $("h1").css({ color: "black" });
    $("#piePagina").css({ color: "black" });
    $("p").css({ color: "black" });
    $(".logos").css({ filter: "hue-rotate(0deg) brightness(0%)" });
    $("#ligthMode").fadeOut(10);
    $("#darkMode").fadeIn(1000);
  });

  $("#darkMode").click(function () {
    $("body").css({ "background-color": "black" });
    $("h1").css({ color: "white" });
    $("#piePagina").css({ color: "white" });
    $("p").css({ color: "white" });
    $(".logos").css({ filter: "hue-rotate(0deg) brightness(100%)" });
    $("#darkMode").fadeOut(10);
    $("#ligthMode").fadeIn(1000);
  });
});
