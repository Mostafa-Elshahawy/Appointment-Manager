const CreateAppointment = document.getElementsByClassName('Create-appointment-btn')[0];

CreateAppointment.addEventListener('click', ()=>{
    let appointmentTable = document.getElementById('appointmentTable');
    let nRow = document.createElement('tr');
    appointmentTable.appendChild(nRow);
    for(let i=0;i<4;i++){
        x = document.createElement('td');
        x.textContent = prompt('typesomeinput','defaultValue');
        nRow.appendChild(x)
    }
    let cells = nRow.getElementsByTagName('td');

    let data = {
        Meeting_Time:cells[0].textContent,
        Client:cells[1].textContent,
        Description:cells[2].textContent,
        Manager_Name:cells[3].textContent
    };

    fetch('http://localhost:3000/auth/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.log('error creating appointment',error);
    })

})