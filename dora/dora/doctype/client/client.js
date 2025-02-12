// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('client', {
    onload: function(frm) {
        // Add custom styles
        const style = document.createElement('style');
        style.innerHTML = `
            .form-control {
                transition: border-color 0.3s ease;
            }
            .form-control:focus {
                border-color: #007bff; /* Change border color on focus */
                box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add shadow on focus */
            }
            .age-message {
                animation: fadeIn 0.5s ease-in-out; /* Animation for age message */
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    },
    age: function(frm) {
        const message = document.createElement('div');
        message.className = 'age-message';
        message.innerText = "Your age is: " + frm.doc.age;
        frappe.msgprint(message);
    }
});
