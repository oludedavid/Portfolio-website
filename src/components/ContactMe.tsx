import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoLink = `mailto:odavidolumide@yahoo.com?subject=Message from ${name} (${email})&body=${message}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <h2 className="animate__animated animate__bounce ">
        Get in touch and let's work together!
      </h2>
      <p>
        Interested in collaborating, have a project in mind, or just want to say
        hello? Feel free to reach out and get in touch with me. I'd love to hear
        from you! Let's discuss how I can contribute to your team or project.
      </p>
      <form
        action="#"
        onSubmit={handleSubmit}
        className="mx-auto max-w-md overflow-y-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 font-bold mb-2">
            What is your name?
          </label>
          <input
            type="text"
            id="name"
            placeholder="Type your name here"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-100 font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-100 font-bold mb-2"
          >
            Your Message or Question or tell me about your project
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-primary-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-5 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
