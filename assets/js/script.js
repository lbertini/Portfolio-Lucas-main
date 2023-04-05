
document.querySelector("#paginas").addEventListener("change", calcularOrcamento); //# pois é um ID / Manipulação do DOM (Document Object Module)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento(){
    let qtde = document.querySelector("#paginas").value;
    let preco = qtde * 100
    let js = document.querySelector("#js").checked
    let layout = document.querySelector("#layout_sim").checked
    let prazo = document.querySelector("#prazo").value
    if (js) preco *= 1.1        //Mesmo que colocar if (js = True) { preco = preco * 1.1}
    if (layout) preco += 500
    preco += preco*(1.1 - 0.1*prazo)

    
    console.log(qtde, preco)


    document.querySelector("#label_prazo").innerHTML = `Prazo (${prazo} semanas)`

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)

}