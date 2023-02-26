function calculateTip() {

    let billamount = document.querySelector('#billamount').value;
    let peoples = document.querySelector('#peoples').value;
    let services = document.querySelector('#services').value;
 
    console.log(services);

    if (billamount === '' && peoples != '0') {
        alert("Invalid values ! Please enter valid values.");
        return ;
    }
 
    if (peoples === '1'){
        document.querySelector('#each').style.display = 'none';
    } else{
        document.querySelector('#each').style.display = 'block';
    }
 

    let total = (billamount * services) / peoples;
    total = total.toFixed(2);
 
    document.querySelector('#totaltip').style.display = 'block';
    document.querySelector('#tip').innerHTML = total;
}

document.querySelector('#calculat').onclick = calculateTip;
