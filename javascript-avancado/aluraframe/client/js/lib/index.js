var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

tBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo, index){
        var td = document.createElement('td');
        td.textContent = campo.value;
        
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[2].value * campos[1].value;

    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    campos[0].val = "";
    campos[1].val = 1;
    campos[2].val = 2;

    campos[0].focus();
});