import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
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
      {/* Left Column */}
      <div className="bg-gray-900 rounded-lg overflow-hidden p-10 text-center">
        <div className="mb-4">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Are you hiring?
            </h2>
            <p>I'm based in Chicago and seeking hybrid roles locally, and remote roles anywhere.</p>
            <p>Connect with me or send me an email!</p>
            <br />
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            LOCATION
          </h2>
          <p className="mt-1">Chicago, Illinois</p>
        </div>
        <div className="mb-4">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100">
            sge.engstrom@email.com
          </a>
        </div>
        <div>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            LINKS
          </h2>
          <a
            href="https://github.com/s3ngstrom"
            className="text-purple-300 leading-relaxed hover:underline hover:text-purple-100"
          >
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
      </div>

      {/* Right Column (with Chicago flag image) */}
      <div className="flex items-center justify-center">
        <img
          className="object-cover object-center rounded"
          alt="The Chicago Flag"
          src="./chicago.png"
          style={{
            maxHeight: "400px",
            maxWidth: "200px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  </div>
</section>
)}