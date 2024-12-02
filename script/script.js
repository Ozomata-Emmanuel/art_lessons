document.addEventListener("DOMContentLoaded", () => {
  let myForm = document.getElementById('myForm');
  let summary = document.getElementById('summary');
  let main_summary= document.getElementById('summaryDetails');
  let cost = document.getElementById('cost');
  let slots_full = document.getElementById('slots_full')
  slots_full.classList.add('full_slots')

  
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