import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані відправлено:', formData);
    // Додайте тут логіку для відправлення даних на сервер або обробки їх локально
  };

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <label>
        Ім'я:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Електронна пошта:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Коментар:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default ContactForm;
