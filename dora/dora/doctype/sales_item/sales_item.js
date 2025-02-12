// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales item', {
// 	qty: function(frm) {
//         if (!frm.doc.qty || frm.doc.qty == 0) {
//             frm.set_value('rate', '');  
//         }
//     }

	// rate: function(frm) {
    //     let rate = frm.doc.rate;  
    //     if (rate < 5) {
    //         frappe.msgprint(__('Warning: The rate is below 5.'));
    //     }
    // }

	// qty: function(frm) {
    //     let qty = frm.doc.qty;  
    //     if (qty > 100) {
    //         frm.fields_dict['rate'].$input.css('background-color', 'lightgreen');
	// 	} 
    //     else {
    //         frm.fields_dict['rate'].$input.css('background-color', 'lightcoral');
    //     }
    // }

	enable: function(frm) {
        let is_enabled = frm.doc.enable;  
        if (is_enabled) {
            frm.fields_dict['qty'].$input.css('background-color', 'lightcoral');
            frm.fields_dict['rate'].$input.css('background-color', 'lightcoral');
        } 
        else {
            frm.fields_dict['qty'].$input.css('background-color', 'lightgreen');
            frm.fields_dict['rate'].$input.css('background-color', 'lightgreen');
        }
    }

});
