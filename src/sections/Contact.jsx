import React, { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
 const [r, setr] = useState(false);
 const [res, setres] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const { name, value } = e.target; //the event.target gives us the id and value fym
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
   
    let result = await response.json();
    if (result) {
      setr(true)
      setres(result.code===200?"Message sent":"Nope")
    }
    
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="c-space  my-20" id="contact">
      
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen max-sm:hidden "
        />
        <div className="contact-container top-12 max-h-screen" >
          <h3 className="head-text">Lets Get Creative</h3>
          <p className="text-lg text-white-600 mt-3">
            I am a Master At understanding design patterns I could make any
            ideas appealing and convert the user via elegant userflow{" "}
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label ">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="joe"
              />
            </label>{" "}
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="abc@something.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending...." : "Send message :)"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow animate-bounce"
              />
              
            </button>
            <p hidden={!r} className="text-white">{res }</p>
          </form>
             
        </div>
      </div>
    </section>
  );
};

export default Contact;
