import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-10 text-center">
            <div className="mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">Chicago, Illinois</p>
            </div>
            <div className="mb-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100">sge.engstrom@email.com</a>
            </div>
            <div>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKS
              </h2>
              <a href="https://github.com/s3ngstrom" className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100">
                Github
              </a>
              <p />
              <a
                href="https://linkedin.com/in/stefanie-engstrom"
                className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100"
              >
                LinkedIn
              </a>
            </div>
            <div className="text-center">
              <img
                className="object-cover object-center rounded"
                alt="The Chicago Flag"
                src="./chicago.png"
                style={{
                  maxHeight: "400px",
                  maxWidth: "200px",
                  display: "block",
                  margin: "0 auto",
                  paddingTop: "50px",
                }}
              />
            </div>
          </div>

          <form netlify name="contact" className="bg-gray-900 rounded-lg p-10">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Hiring?
            </h2>
            <p className="leading-relaxed mb-5">
              I'm based in Chicago and open to hybrid roles in the area, as well as remote roles anywhere.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
