let estado = "aprovada"

switch (estado) {
    case "aprovada":
        console.log("Parabens voce foi aprovado!");
       break;

    case "lista":
    console.log("Você está na nossa lista de espera");
    break;

    case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

    default:
        console.log("Não se aplica");
}
