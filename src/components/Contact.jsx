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
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (showPopup) {
      let interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 5, 0)); // Reduce progress
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setShowPopup(false);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    toast.dismiss();
    setForm({ name: "", email: "", message: "" });
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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Submit
          </button>
        </form>
      </motion.div>

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
