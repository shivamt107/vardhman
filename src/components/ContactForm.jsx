import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onBack }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    city: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for now just log the form; in a real app we'd POST to an API
    // eslint-disable-next-line no-console
    console.log('Contact form submitted', form);
    alert('Thank you! Your message has been submitted.');
    if (onBack) onBack();
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <button className="back-btn" onClick={onBack}>&larr; Back</button>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              First Name
              <input name="firstName" value={form.firstName} onChange={handleChange} required />
            </label>
            <label>
              Last Name
              <input name="lastName" value={form.lastName} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Mobile Number
            <input name="mobile" value={form.mobile} onChange={handleChange} required />
          </label>

          <label>
            City
            <input name="city" value={form.city} onChange={handleChange} />
          </label>

          <label>
            Description
            <textarea name="description" value={form.description} onChange={handleChange} rows="4" />
          </label>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
