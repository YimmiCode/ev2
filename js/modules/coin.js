export default {
    valores: {dolar:628.68, uf:26648.67, euro:740.67},
    data:`
            <h3>Autor: Yimmi Sandoval</h3>
            <div border="1" width="390">
                Valor en pesos CL
                <br>
                <input id="valor" type="number"/>
                <br>
                <input id="dolar" type="radio" name="coin" value="dolar"/> a Dolar
                <input id="uf" type="radio" name="coin" value="uf"/> a UF
                <input id="euro" type="radio" name="coin" value="euro"/> a Euro
                <br>
                <button onclick="calcular()">calcular</button>
                <p id="resp"></p>
            </div>
    `,
        calcular:function(){
        var valor = document.getElementById('valor').value;
        var radios = document.getElementsByName('coin');
        var coin = "";
        var resp = document.getElementById('resp');

        if(valor!=""){
            radios.forEach(item =>{
                if(item.checked){
                coin = item.value;
                }
            });

            var total ="";
           
            if(coin == "dolar"){
                total = valor/this.valores.dolar;
                resp.innerHTML = "Esto es equivalente a "+total.toFixed(0) + " dolares";
                resp.style.color = "blue";
            }else if(moneda == "uf"){
                total = valor/this.valores.uf;
                resp.innerHTML = "Esto es equivalente a "+total.toFixed(0)+" UF";
                resp.style.color = "blue";
            }else if(moneda == "euro"){
                total = valor/this.valores.euro;
                resp.innerHTML = "Esto es equivalente a "+total.toFixed(0)+" euros";
                resp.style.color = "blue";
            }else{
                resp.innerHTML="Elija conversion";
                resp.style.color ="red";
            }
                        
        }else{
            resp.style.color ="red";
            resp.innerHTML = "Por favor ingrese valor";
        }
    }
}