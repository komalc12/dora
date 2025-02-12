frappe.ui.form.on('ToDo', {
    refresh: function(frm) {
        // Show a client-side message "Hello"
        frappe.msgprint("Hello from the ToDo DocType!");
    }
});
