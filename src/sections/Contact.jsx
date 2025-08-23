import React, { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef()
  const [loading,setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = () => {setForm.name=formRef.name };
  const handleSubmit = () => { };

  
  return (
    <section className=" c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
              <div className="contact-container">
          <h3 className="head-text">Lets Talk</h3>
          <p className="text-lg text-white-600 mt-3">I am a Master At understanding design patterns I could make any ideas appealing  and convert the user via elegant userflow </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="joe" />
            </label>
          </form>         
        </div>
      </div>
      <h3 className="head-text">Contact Me</h3>
    </section>
  );
};

export default Contact;
