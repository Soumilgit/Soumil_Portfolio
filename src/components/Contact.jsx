import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (showPopup) {
      let interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 5, 0));
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setShowPopup(false);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showPopup]);

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (/\d/.test(form.name)) {
      newErrors.name = "Name cannot contain numbers";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.mobile.trim() && !/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowPopup(true);
    toast.dismiss();
    setForm({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className={`relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ${showPopup ? 'bg-black bg-opacity-80' : ''}`}>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-green-900 p-6 rounded-lg shadow-lg text-center max-w-md w-full relative">
            <p className="text-lg font-semibold text-white">
              Thanks for filling the form. We will get in touch soon.
            </p>
            <div className="absolute bottom-0 left-0 h-1 bg-green-400 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-6'>
          {/* Name Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name <span className="text-red-500">*</span></span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.name ? "border-2 border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </label>

          {/* Email Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email <span className="text-red-500">*</span></span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.email ? "border-2 border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </label>

          {/* Mobile Number Field (Optional) */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Mobile Number</span>
            <input
              type='text'
              name='mobile'
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number (Optional)"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${errors.mobile ? "border-2 border-red-500" : ""}`}
            />
            {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
          </label>

          {/* Message Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Right Side - Animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <ComputersCanvas />
      </motion.div>
      
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar closeOnClick pauseOnHover />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
