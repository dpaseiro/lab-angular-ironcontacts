import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name, email, phone, image){
    this.contacts.push({
      name: name.value,
      email: email.value,
      phone: phone.value,
      image: image.vale,
    })
    
    name.value="",
    email.value="",
    phone.value="",
    image.value=""



    console.log("Add contact has been called");
    // add contact to contacts list
    // clear inputs
  }
}
