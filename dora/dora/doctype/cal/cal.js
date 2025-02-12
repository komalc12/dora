// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('cal', {

	refresh: function (frm) {
        frm.add_custom_button(__('Calculate'), function () {
            task(frm);
        });
		
    },
});

function task(frm){
	const a=frm.doc.value1;
	const b=frm.doc.value2;
	const op=frm.doc.opration;

	
	let result=0


	if(op=='+'){
		result=a+b;
	} 
	else if(op=='-'){
		result=a-b;
	}
	else if(op=='*'){
		result=a*b;
	}
	else if(op=='/'){
		if(b!=0){
			result=a/b;
		}
		else{
			frappe.msgprint("can't divided by zero");
		}
	}
	
	frm.set_value('result',result)
	frappe.msgprint(__('Result: {0} {1} {2} = {3}', [a, op, b, result]));
}
