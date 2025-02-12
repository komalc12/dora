# dora/todo_custom.py
import frappe

def on_insert(doc, method):
    # Print "Hi" when a new ToDo item is created
    print("Hi from server-side for new ToDo:", doc.name)