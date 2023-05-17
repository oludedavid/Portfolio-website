import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoLink = `mailto:odavidolumide@yahoo.com?subject=Message from ${name} (${email})&body=${message}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="animate__animated animate__bounce mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Get in touch and let's work together!
        </h2>
        <p className="mb-8 lg:mb-16 font-bold text-center text-gray-500 dark:text-gray-300 sm:text-xl">
          Interested in collaborating, have a project in mind, or just want to
          say hello? Feel free to reach out and get in touch with me. I'd love
          to hear from you! Let's discuss how I can contribute to your team or
          project.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              What is your name?
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Type your name here"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message or Question or tell me about your project
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border border-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:border-white dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
