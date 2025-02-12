// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('login', {
	
	// refresh:function(frm){
	// 	//frappe.msgprint("Hello Dora")
	// 	// frappe.throw("this is alert")
	// }

	//Onload
	// onload:function(frm){
	// 	frappe.msgprint("this is onload")
	// }

	// //Validation
	// validate:function(frm){
	// 	frappe.msgprint("this is validation ")
	// }

	// //Before save
	// before_save:function(frm){
	// 	frappe.msgprint("Before save")
	// }

	//After save
	// after_save:function(frm){
	// 	frappe.throw("After save")
	// }

	// //field 
	// enable:function(frm){
	// 	frappe.throw("field is enable")
	// }

	// age:function(frm){
	// 	frappe.msgprint("name field msg")
	// }

	//Submitable 
	// before_submit:function(frm){
	// 	frappe.thow("Before submit,,,,,,")
	// }

	// on_submit:function(frm){
	// 	frappe.throw("on_submit")
	// }

	//Cancel
	// before_cancel:function(frm){
	// frappe.msgprint("before_cancel")
	// }

	// after_cancel:function(frm){
	// 	frappe.throw("after cancel")
	// }

	//DOCFIELD PROPERTY
	// enable:function(frm){
	// 	frm.set_df_property('age','read',1)
	// }

	// enable:function(frm){
	// 	frm.set_df_property('age','read_only',1)
	// }

	// refresh:function(frm){
	// 	frm.toggle_reqd('age',true)
	// }

	//ADD BUTTON
	// refresh:function(frm){
	// 	frm.add_custom_button('Click me',()=>{
	// 		frappe.msgprint("Button Clicked!")
	// 	});
	// }

	// refresh: function(frm) {
	// 	frm.add_custom_button(__('dora1'), function() {
	// 		frappe.msgprint(frm.doc.name1);
	// 	}, __("dora"));

	// 	frm.add_custom_button(__('dora2'), function() {
	// 		frappe.msgprint(frm.doc.age);
	// 	}, __("dora"));
	// }
	
	enable:function(frm){
		if(frm.doc.enable){
			frappe.msgprint(frm.doc.name1);
		}
	}
})