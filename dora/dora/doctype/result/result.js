// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('result', {

	 refresh: function(frm) {
		const score = frm.doc.score;
		let total = 0;

		for(let subject_score of score){
			let marks = subject_score.marks;
			total += marks;
		}
		frm.set_value("percentage", total / score.length)
	}
});
