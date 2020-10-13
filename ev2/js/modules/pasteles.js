export default{
    factura:
    {   cliente:'INFORMATICA INACAP',  
        domicilio:'AV.SAN MIGUEL 445',  
        ciudad:'Talca',  
        telefono:'223344',  
        detalle:[  
            {codigo:1,cantidad:3,descripcion:'PASTEL MIL HOJAS', PrecioUnitario:10000},      
            {codigo:2,cantidad:4,descripcion:'GALLETAS FINAS', PrecioUnitario:8000},  
            {codigo:3,cantidad:2,descripcion:'BERLIN', PrecioUnitario:500},  
            {codigo:4,cantidad:1,descripcion:'PIE DE LIMON', PrecioUnitario:10000}, 
            {codigo:5,cantidad:5,descripcion:'PASTEL MANJAR', PrecioUnitario:12000},  
            {codigo:6,cantidad:3,descripcion:'PASTEL CREMA', PrecioUnitario:13000}   
                ] 
    },
    cargar:function(){
        var result = document.getElementById('result');
        var table = document.getElementById('table');
        var tabla="";
        result.innerHTML = `
        CLIENTE: ${this.factura.cliente}<br>
        DOMICILIO: ${this.factura.domicilio}<br>
        CIUDAD: ${this.factura.ciudad}<br>
        TELEFONO: ${this.factura.telefono}`;
        result.style.border="thin solid black";
        result.style.padding="10px";
        result.style.marginBottom="10px";
        result.style.width="390px";
        var subtotal = 0;
    data:`
        <h4>Autor:Yimmi Sandoval</h4>
        <button onclick="cargar()">Cargar factura</button><br><br>
        <div id="result"></div>
        <div id="table"></div>`,

        tabla =`
            <table border='1' width='410'>
                <tr>
                    <th>codigo</th>
                    <th>cantidad</th>
                    <th>descripcion</th>
                    <th>precio unitario</th>
                    <th>total</th>
                </tr>`;

        this.factura.detalle.forEach(item=>{
            var total =item.cantidad*item.PrecioUnitario;
            tabla += `
            <tr>
                <td>${item.codigo}</td>
                <td>${item.cantidad}</td>
                <td>${item.descripcion}</td>
                <td>${item.precioUnitario}</td>
                <td>${total}</td>
            </tr>`;  
            subtotal+=total;
        });

        tabla +=`<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>SubTotal:</td><td>${subtotal}</td>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>IVA(19%):</td><td>${subtotal * 0.19}</td>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>TOTAL:</td><td>${subtotal+(subtotal * 0.19)}</td>
                <tr>`;

        tabla += '</table>';
        table.innerHTML = tabla;
    }
}