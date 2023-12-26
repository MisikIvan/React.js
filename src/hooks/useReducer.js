import React, { useReducer } from 'react';

// Стартовий стан
const initialState = {
  submittedFormData: null,
  otherStateVariable: 'initialValue',
};

// Редуктор для зміни стану
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return { ...state, submittedFormData: action.payload };
    case 'UPDATE_OTHER_STATE':
      return { ...state, otherStateVariable: action.payload };
    default:
      return state;
  }
};

function Contact() {
  // Використання useReducer для керування станом
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (formData) => {
    // Використання dispatch для відправки дії редуктору
    dispatch({ type: 'SUBMIT_FORM', payload: formData });
  };

  return (
    <div className="Contact">
      <h1>Зворотній зв'язок</h1>
      <p>Залиште свої контактні дані та коментар, і ми з вами зв'яжемося.</p>
      {/* Використання підняття стану для передачі функції handleFormSubmit у компонент ContactForm */}
      <ContactForm onSubmit={handleFormSubmit} />

      {/* Виведення даних зі стану */}
      <div>
        <h2>Стан:</h2>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Contact;
