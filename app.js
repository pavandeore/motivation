let dayDiv = document.querySelector('.day-div');
let remainingDiv = document.querySelector('.remaining');

const todayDate = new Date().toDateString();
const date1 = new Date('12/15/2010');
const date2 = new Date('6/15/2021');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

dayDiv.innerHTML = `Today is :<b> ${todayDate} </b><br/>`;
remainingDiv.innerHTML = `Remaining Days :<b> ${diffDays} <br/>`;


let saveFile = () => {
    	
   
    const name = document.getElementById('txtName').value;
    const date = document.getElementById('txtDate').value;
    const msg = document.getElementById('msg').value;
    
    let data = 
        '\r Name: ' + name + ' \r\n ' + 
        'Date: ' +date + ' \r\n ' + 
        'Message: ' + msg;
    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = `${todayDate}.txt`;	  

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}