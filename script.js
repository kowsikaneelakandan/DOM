function publishToTable() {
    const name = document.getElementById('name').value;
    const last= document.getElementById('last').value;
    const email = document.getElementById('email').value; 
    const add= document.getElementById('Add').value;  
    const Pcode= document.getElementById('P.code').value;
    const gender = document.getElementById('gender').value;
    const state =document.getElementById('state').value;
    const country =document.getElementById('Country').value;
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const lastEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const addEle= document.createElement('td');
        const PcodeEle = document.createElement('td');
        const genderEle = document.createElement('td');
        const stateEle = document.createElement('td');
        const countryEle = document.createElement('td');
        nameEle.innerText = name;
        lastEle.innerText =last;
        emailEle.innerText = email;
        addEle.innerText = add;
        PcodeEle.innerText = Pcode;
        genderEle.innerText = gender;
        stateEle.innerText = state;
        countryEle.innerText = country;
        trElement.appendChild(nameEle);
        trElement.appendChild(lastEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(addEle);
        trElement.appendChild(PcodeEle);
        trElement.appendChild(genderEle);
        trElement.appendChild(stateEle);
        trElement.appendChild(countryEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
        const foodform= document.getElementById('foodform');
        const checkboxes= foodform.querySelectorAll('input[type=checkbox]');
        checkboxes.forEach((checkboxes)=>{
            checkboxes.addEventListener('change', () => {
                const selected =Array.from(checkboxes).filter(cb => cb.checked);

            })
        })
        foodform.addEventListener('submit',(e) => {
            e.preventDefault();
            const selectedFoods=Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        })
    }
