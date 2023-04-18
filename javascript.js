function conversor() {
    const decimal = document.getElementById('decimal').value
    const binario = document.getElementById('binario').value
    const hexadecimal = document.getElementById('hexadecimal').value

    if(decimal) {
        document.getElementById('binario').value = parseInt(decimal, 10).toString(2);
        document.getElementById('hexadecimal').value = parseInt(decimal, 10).toString(16).toUpperCase();
  
    }else if (binario) {
        document.getElementById('binario').value = parseInt(binario, 2).toString(10);
        document.getElementById('hexadecimal').value = parseInt(binario, 2).toString(16).toUpperCase();
   
    }else if(hexadecimal) {
        let hex = hexadecimal.replace(/^0x/, '');
        document.getElementById('decimal').value = parseInt(hex, 16).toString(10);
        document.getElementById('binario').value = parseInt(hex, 16).toString(2);
    }

} 

function limpaValores() {
    document.getElementById('decimal').value = "";
    document.getElementById('binario').value = "";
    document.getElementById('hexadecimal').value = "";
}