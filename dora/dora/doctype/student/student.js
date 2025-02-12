// Copyright (c) 2025, komal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student', {
    calculate_percentage: function(frm) {
        let total = 0;
        let count = 0;

        frm.doc.marks.forEach(row => {
            if (row.marks_obtained) {
                row.percentage = (row.marks_obtained / 100) * 100; 
                total += row.percentage;
                count++;
            }
        });

        frm.set_value('average_percentage', count ? total / count : 0);
        frm.refresh_field("marks");
    }
});

frappe.ui.form.on('Marks', {
    marks_obtained: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (row.marks_obtained) {
            row.percentage = (row.marks_obtained / 100) * 100;
        }
        frm.refresh_field("marks");
        frm.trigger('calculate_percentage');
    }
});
