import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';

function Contact() {
  // Використання кастомного хука для модального вікна
  const { isOpen, openModal, closeModal } = useModal();

  // Додавання стейту на рівні компоненту
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const handleFormSubmit = (formData) => {
    // Оновлення стану компоненту при відправці форми
    setSubmittedFormData(formData);
    // Відкриття модального вікна після відправки форми
    openModal();
  };

  return (
    <div className="Contact">
      <h1>Зворотній зв'язок</h1>
      <p>Залиште свої контактні дані та коментар, і ми з вами зв'яжемося.</p>
      <ContactForm onSubmit={handleFormSubmit} />
      <button onClick={openModal}>Відкрити модальне вікно</button>

      {/* Використання порталу для модального вікна */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Дякуємо за ваш відгук!</h2>
        <p>Ваші дані були відправлені успішно:</p>
        {submittedFormData && (
          <ul>
            <li>Ім'я: {submittedFormData.name}</li>
            <li>Електронна пошта: {submittedFormData.email}</li>
            <li>Коментар: {submittedFormData.comment}</li>
          </ul>
        )}
      </Modal>
    </div>
  );
}

export default Contact;
