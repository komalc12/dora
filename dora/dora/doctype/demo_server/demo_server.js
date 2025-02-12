// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('demo_server', {
    enable: function(frm) {
        frappe.call({
            'method': 'dora.dora.doctype.demo_server.demo_server.frappe_call',  // Path to the server-side method
            'args': {
                'msg': "komal"  // Message to send to the server
            },
            'freeze': true,  // Show a loading message
            'freeze_message': __('Calling frm_call method'),  // Message to display while loading
            'callback': function(r) {
                if (r.message.error) {
                    frappe.msgprint(r.message.error);  // Display error message
                } else {
                    frappe.msgprint(r.message);  // Display success message
                }
            }
        });
    }
});
