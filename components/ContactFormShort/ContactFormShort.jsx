'use client'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactFormShort.module.scss';

const initialValues = {
  name: '',
  country: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email adress').required('Required'),
});

export const ContactFormShort = ({ onSubmitSuccess, buttonText, onMessageVisibility, subject }) => {

  const [values, setValues] = useState(initialValues);

  const [fieldStates, setFieldStates] = useState({
    name: false,
    country: false,
    email: false,
  });

  // Handle autofill event
  useEffect(() => {
    const checkAutofill = () => {
      // Check input values for changes after a short delay
      const timeoutId = setTimeout(() => {
        const inputs = document.querySelectorAll('input');
        inputs.forEach((input) => {
          const fieldName = input.name;
          const value = input.value;

          // Check if the input is not empty after the delay
          if (value && fieldStates[fieldName] !== true) {
            // Handle autofill event
            handleFieldChange(fieldName, value);
          }
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    };

    // Listen for input events
    document.addEventListener('input', checkAutofill);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('input', checkAutofill);
    };
  }, [fieldStates]);

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setFieldStates((prevFieldStates) => ({
      ...prevFieldStates,
      [fieldName]: !!value.trim(),
    }));
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      values.subject = subject || '';
      await axios.post('/api/contacts', { ...values, subject }); // Отправляем данные формы на сервер
      // Здесь вы можете добавить код для обработки успешной отправки, например, очистка формы или вывод сообщения пользователю
      console.log('Форма успешно отправлена!');
      resetForm(); // Сбрасываем значения полей формы к исходным значениям
      setValues(initialValues); // Сбрасываем значения полей формы в локальном состоянии
      setIsMessageSent(true);
      setIsMessageVisible(true);

      // Call the onSubmitSuccess callback after successful form submission
      if (isMessageSent) {
        onSubmitSuccess();
      }

      setTimeout(() => {
        setIsMessageVisible(false);
        onMessageVisibility(false);
      }, 5000); // Hide the message popup after 5 seconds
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      // Здесь вы можете добавить код для обработки ошибки отправки, например, вывод сообщения пользователю
    }
  };

  // Создаем портал для всплывающего окна
  const MessagePopup = ({ isOpen }) => {
    if (!isMessageVisible) return null;
    // if (!isOpen) return null;

    return ReactDOM.createPortal(
      <AnimatePresence>
        <div className={styles.popupContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={styles.messagePopup}>
            <div className={styles.messageContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 20 20" fill="none">
                <path d="M15 7L7.99998 14L4.99994 11M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ffa800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className={styles.messageTextWrapper}>
                <h3 className={styles.messageTitle}>Thank you!</h3>
                <p className={styles.messageText}>We received your message and contact soon.</p>
              </div>
              {/* <button onClick={closeMessagePopup}>Close</button> */}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <div className={styles.formWrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Field
              className={styles.input}
              type="text"
              id="name"
              name="name"
              onFocus={() => setFieldStates({ ...fieldStates, name: true })}
              onBlur={(e) => handleFieldChange('name', e.target.value)}
            />
            <label
              htmlFor="name"
              className={`${styles.label} ${fieldStates.name || initialValues.name ? styles.focused : ''}`}
            >
              Full name
            </label>
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.inputData}>
              <Field
                className={styles.input}
                type="text"
                id="country"
                name="country"
                onFocus={() => setFieldStates({ ...fieldStates, country: true })}
                onBlur={(e) => handleFieldChange('country', e.target.value)}
              />
              <label
                htmlFor="country"
                className={`${styles.label} ${fieldStates.country || initialValues.country ? styles.focused : ''}`}
              >
                Country of residence
              </label>
              <ErrorMessage name="country" component="div" className={styles.errorMessage} />
            </div>
          </div>

          <div
            className={styles.inputData}
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <Field
              className={styles.input}
              type="email"
              id="email"
              name="email"
              onFocus={() => setFieldStates({ ...fieldStates, email: true })}
              onBlur={(e) => handleFieldChange('email', e.target.value)}
            />
            <label
              htmlFor="email"
              className={`${styles.label} ${fieldStates.email || initialValues.email ? styles.focused : ''}`}
            >
              Email
            </label>
            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.buttonBlock}>
            <button
              className={styles.button}
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </Form>
      </Formik>
      <MessagePopup isOpen={isMessageSent} />
    </div>
  );
};