import React from 'react';

function Contact({data}) {
  
  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <article className="contact" data-testid='contact'>
      <span className="contact__avatar">
        <img src={data.avatar} alt={`${data.name}`}/>
      </span>
      <span data-testid="contact-name" className="contact__data">{data.name}</span>
      <span data-testid="contact-phone" className="contact__data">{data.phone}</span>
      <span data-testid="contact-country" className="contact__data">{data.country}</span>
      <span data-testid="contact-date" className="contact__data">{formatDate(data.admissionDate)}</span>
      <span data-testid="contact-company" className="contact__data">{data.company}</span>
      <span data-testid="contact-phone" className="contact__data">{data.department}</span> 
    </article>
  );
}

export default Contact;
