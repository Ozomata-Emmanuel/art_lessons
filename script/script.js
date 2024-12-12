document.addEventListener("DOMContentLoaded", () => {
  let myForm = document.getElementById('myForm');
  let summary = document.getElementById('summary');
  let main_summary= document.getElementById('summaryDetails');
  let cost = document.getElementById('cost');
  // let slots_full = document.getElementById('slots_full')
  // slots_full.classList.add('full_slots')

  
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let f_name = document.getElementById('f_name').value
    let guardian_name = document.getElementById('guardian_name').value
    let p_num = document.getElementById('p_num').value
    let guardian_number = document.getElementById('guardian_number').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let class_type = document.getElementById('class_type').value
    let class_day = document.getElementById('class_day').value
    let class_time = document.getElementById('class_time').value

    let fullName_err = document.getElementById('fullName_err')
    let guardiansName_err = document.getElementById('guardiansName_err')
    let phoneNumber_err = document.getElementById('phoneNumber_err')
    let guardianPhoneNumber_err = document.getElementById('guardianPhoneNumber_err')
    let email_err = document.getElementById('email_err')
    let age_err = document.getElementById('age_err')
    let classType_err = document.getElementById('classType_err')
    let classDay_err = document.getElementById('classDay_err')
    let classTime_err = document.getElementById('classTime_err')
    let submit_err = document.getElementById('submit_err')
    let regEx = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    let isValid = true

    if (f_name === ""){
      fullName_err.textContent = 'Full name is required'
      isValid = false
    }else if(f_name.length <= 6){
      fullName_err.textContent = 'Please input full name'
      isValid = false
    }else{
      fullName_err.textContent = '' 
      isValid = true
    } 

    if (guardian_name === "" && age < 18){
      guardiansName_err.textContent = 'Full name of guardian is required'
      isValid = false
    }else if(f_name.length <= 6 && age < 18){
      guardiansName_err.textContent = 'Full name of guardian is required'
      isValid = false
    }else{
      guardiansName_err.textContent = '' 
      isValid = true
    } 

    if (p_num === ''){
      phoneNumber_err.textContent = 'Phone number is required'
      isValid = false
    }else if(p_num.length <= 6){
      phoneNumber_err.textContent = 'Enter a valid phone number'
      isValid = false
    }else{
      phoneNumber_err.textContent = ""
      isValid = true
    }

    if (guardian_number === '' && age < 18){
      guardianPhoneNumber_err.textContent = 'Phone number is required'
      isValid = false
    }else if(guardian_number.length <= 6 && age <18){
      guardianPhoneNumber_err.textContent = 'Enter a valid phone number'
      isValid = false
    }else{
      guardianPhoneNumber_err.textContent = ""
      isValid = true
    }

    if(email === ''){
      email_err.textContent = 'Email adress is repuired'
      isValid = false
    }else if(!regEx.test(email)){
      email_err.textContent = 'invalid email format'
      isValid = false
    }else{
      email_err.textContent = ''
      isValid = true
    }

    if (age === ''){
      age_err.textContent = 'Age is required'
      isValid = false
    }else {
      age_err.textContent = ''
      isValid = true
    }

    if(class_type === ''){
      classType_err.textContent = 'Choose class type'
      isValid = false
    }else{
      classType_err.textContent = ''
      isValid = true
    }

    if(class_day === ''){
      classDay_err.textContent = 'Pick available days'
      isValid = false
    }else{
      classDay_err.textContent = ''
      isValid = true
    }

    if(class_time === ''){
      classTime_err.textContent = 'Choose class time'
      isValid = false
    }else{
      classTime_err.textContent = ''
      isValid = true
    }

    if(isValid = true && f_name !=''&& age.length >= 18 && p_num !='' && email !='' && age !='' && class_time !='' && class_type !='' && class_day !=''){

    }else if(isValid = true && f_name !='' && guardian_name !='' && guardian_number !=''&& age.length < 18 && p_num !='' && email !='' && age !='' && class_time !='' && class_type !='' && class_day !=''){

    }else{
      submit_err.textContent = 'Unaible to register'
      return
    }
    
    
    
    myForm.classList.add("hidden");
    summary.classList.remove("hidden");
    main_summary.classList.add('sub')
    cost.classList.add('cost')
    main_summary.innerHTML = `
    <p><strong>Participant:</strong><br> ${f_name} (${age} years)<br></p>
    <p><strong>Guardian's name:</strong><br> ${guardian_name|| "N/A"}<br></p>
    <p><strong>Guardian's phone number:</strong><br> ${guardian_number || "N/A"}<br></p>
    <p><strong>Phone:</strong><br> ${p_num}<br></p>
    <p><strong>Email:</strong><br> ${email}<br></p>
    <p><strong>Class:</strong><br> ${class_type} on ${class_day} from ${class_time}<br></p>
    `;
    if(class_type === 'Painting'){
      cost.textContent = 'PRICE = $70.00'
    }else if(class_type === 'Potery'){
      cost.textContent = 'PRICE = $45.00'
    }else if(class_type === 'Sculpting'){
      cost.textContent = 'PRICE = $87.00'
    }else if(class_type === 'Drawing'){
      cost.textContent = 'PRICE = $60.00'
    }else if(class_type === 'Grafiti'){
      cost.textContent = 'PRICE = $30.00'
    }
  });
    
});