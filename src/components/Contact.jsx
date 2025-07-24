import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';

const contacts = [
  {
    href: "somayehkhanbabaei.nl@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/somayeh-khanbabaei-34783a368/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "tel:+31616692822",
    icon: <FaPhone />,
    label: "Phone",
  },
  {
    href: "https://github.com/somayehkhanbabaei",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

const Contact = () => (
  <section id="contact" className="py-12 px-[100px]">
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={label !== "Phone" ? "_blank" : undefined}
            rel={label !== "Phone" ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-2 text-gray-700 font-semibold text-lg hover:text-gray-900 transition-colors duration-200"
          >
            <span className="text-3xl bg-gray-50 rounded-full p-4 shadow hover:bg-gray-100 transition-colors duration-200">
              {icon}
            </span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
