(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()





//dark 

document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.getElementById('drk-mode-btn');
  const darkModeIcon = document.getElementById('dark-mode-icon');

  // Check the saved preference and apply it
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      darkModeIcon.classList.remove('fa-regular', 'fa-eye');
      darkModeIcon.classList.add('fa-solid', 'fa-eye');
  }

  // Event listener to toggle dark mode
  darkModeButton.addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
          document.documentElement.setAttribute('data-bs-theme', 'light');
          localStorage.removeItem('darkMode');
          darkModeIcon.classList.remove('fa-solid', 'fa-eye');
          darkModeIcon.classList.add('fa-regular', 'fa-eye');
      } else {
          document.documentElement.setAttribute('data-bs-theme', 'dark');
          localStorage.setItem('darkMode', 'enabled');
          darkModeIcon.classList.remove('fa-regular', 'fa-eye');
          darkModeIcon.classList.add('fa-solid', 'fa-eye');
      }
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('drk-mode-btn');

//   // Check the saved preference and apply it
//   if (localStorage.getItem('darkMode') === 'enabled') {
//       document.documentElement.setAttribute('data-bs-theme', 'dark');
//   }

//   // Event listener to toggle dark mode
//   toggleButton.addEventListener('click', () => {
//       if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
//           document.documentElement.setAttribute('data-bs-theme', 'light');
//           localStorage.removeItem('darkMode');
//       } else {
//           document.documentElement.setAttribute('data-bs-theme', 'dark');
//           localStorage.setItem('darkMode', 'enabled');
//       }
//   });
// });



// document.addEventListener('DOMContentLoaded', (event) => {
//   const toggleButton = document.getElementById('drk-mode-btn');

//   // Check the saved preference and apply it
//   if (localStorage.getItem('darkMode') === 'enabled') {
//       document.body.classList.add('dark-mode');
//   }

//   // Event listener to toggle dark mode
//   toggleButton.addEventListener('click', () => {
//       document.body.classList.toggle('dark-mode');
      
//       // Save the preference
//       if (document.body.classList.contains('dark-mode')) {
//           localStorage.setItem('darkMode', 'enabled');
//       } else {
//           localStorage.removeItem('darkMode');
//       }
//   });
// });



// document.getElementById('drk-mode-btn').addEventListener('click',()=>{
//   if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
//       document.documentElement.setAttribute('data-bs-theme','light')
//   }
//   else {
//       document.documentElement.setAttribute('data-bs-theme','dark')
//   }
// })