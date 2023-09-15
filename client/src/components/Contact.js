import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://fullstack-portfolio-680fb4a78f3d.herokuapp.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to send email');
        }
      })
      .then((data) => {
        if (data.success) {
          alert('Email sent successfully');
          // You can add code to reset the form or navigate to a different page here
        } else {
          alert('Failed to send email');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email');
      });
  };

  return (
    <section id="contact" className="container items-center mx-auto">
      <div className='text-center items-center'>
      <h2 className="text-4xl text-lime-400 font-semibold mb-4 mt-10">Contact</h2>
      </div>
      <div className="flex justify-center space-x-6 mb-10">
        <a href="https://github.com/solowon27" className="text-lime-400 hover:text-green-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/solomon-tegegne-7b347027a/" className="text-lime-400 hover:text-green-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/blk_wyt?s=21" className="text-lime-400 hover:text-green-400">
          <FaTwitter />
        </a>
      </div>
      <form className="max-w-md mx-auto text-black" onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="name" className="block text-lime-400">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lime-400">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lime-400">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
            rows="4"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="text-lime-400 text-white py-2 px-4 rounded-md hover:bg-green-200 hover:text-gray-500 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
