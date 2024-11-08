import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation/submitted.json';
import styles from './ContactStyles.module.css';
import './closebutton.scss';

function Contact() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [errors, setErrors] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault(); // Stop submission if validation fails
    } else {
      setIsSuccessModalOpen(true); // Show success modal if validation passes
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>

      <form
        id="contact-form"
        action="https://formspree.io/f/xjkvwapk"
        method="POST"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Successfully Submitted</h2>
              <button type="button" className="btn-close" onClick={closeSuccessModal}>
                <span className="icon-cross"></span>
                <span className="visually-hidden">Close</span>
              </button>
            </div>
            <div className={styles.modalBody}>
              <Lottie animationData={animationData} loop={true} className={styles.lottieAnimation} />
              <p>Meiirzhan will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
