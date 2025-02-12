# Copyright (c) 2025, komal and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class demo_server(Document):
    def enable(self, frappe):
        # Commenting out the existing frm.call method
        # frm.call({
        #     'doc': frm.doc,
        #     'method': 'frm_call',
        #     'args': {
        #         'msg': "Dora"  # Updated message
        #     },
        #     'freeze': True,
        #     'freeze_message': __('calling frm method'),
        #     'callback': lambda r: frappe.msgprint(r.message)
        # })

        # Implementing frappe.call method
        frappe.call({
            'method': 'dora.dora.doctype.demo_server.demo_server.frappe_call',
            'args': {
                'msg': "komal"  # Ensure the message is set to "komal"
            },
            'freeze': True,
            'freeze_message': __('calling frm method'),
            'callback': lambda r: frappe.msgprint(f"Response from server: {r.message}")  # Updated to print message
        })

    def toggle_enable(self, enable):
        if enable:
            frappe.msgprint("Checkbox is enabled.")
        else:
            frappe.msgprint("Checkbox is disabled.")

    @frappe.whitelist()
    def frappe_call(self, msg):
        # Check for access permissions
        if not self.has_permission('read'):
            return {"error": "You are not permitted to access this resource."}
        
        # Logic to handle the message received from the client
        frappe.msgprint(f"Message from client: {msg}")  # This should now print "komal"
        return {"message": "Server received the message!"}
    @frappe.whitelist(allow_guest=True)
    def frappe_call(msg):
        demo_server = frappe.get_doc('Demo Server')
        return demo_server.frappe_call(msg)