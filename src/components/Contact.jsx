import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react"; 
import { slideIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas"; 
import { SectionWrapper } from "../hoc"; 

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  
  const [state, handleSubmit] = useForm("xpwdwvwb");  

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "ACCESS DENIED: Name Required";
    else if (/\d/.test(form.name)) newErrors.name = "INVALID INPUT: Name cannot have numbers";

    if (!form.email.trim()) newErrors.email = "ACCESS DENIED: Email Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "INVALID INPUT: Enter a valid email";

    if (form.mobile.trim() && !/^\d{10}$/.test(form.mobile)) 
      newErrors.mobile = "ERROR: Mobile number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <div className="relative flex-[0.75] bg-transparent w-full">
        {state.succeeded ? (
          <motion.div variants={slideIn("left", "tween", 0.15, 0.3)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(10,10,25,1) 100%)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 15px #34d680",
              border: "2px solid #34d680",
              textAlign: "center"
            }}
          >
            <p style={{ color: "lime", fontSize: "18px", textShadow: "0 0 10px lime" }}>
              ✅ TRANSMISSION SUCCESSFUL! MESSAGE RECEIVED.
            </p>
          </motion.div>
        ) : (
          <motion.div variants={slideIn("left", "tween", 0.15, 0.3)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(10,10,25,1) 100%)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 15px #34d680",
              border: "2px solid #34d680",
            }}
          >
            <p style={{ color: "#34d680", fontSize: "14px", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
              🔐 AUTHORIZED ACCESS REQUIRED
            </p>
            <h3 style={{ color: "#34d680", fontSize: "24px", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
              CYBERNETIC CONTACT FORM
            </h3>

            <form ref={formRef} onSubmit={handleFormSubmit} action="https://formspree.io/f/xpwdwvwb" method="POST"
              className="mt-6 flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span style={{ color: "#34d680", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
                  USERNAME <span style ={{ color: "red" }}>*</span>
                </span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Enter Codename..."
                  style={{ background: "transparent", border: "2px solid #34d680", color: "#34d680", padding: "10px", borderRadius: "5px", outline: "none", fontFamily: "'Orbitron', sans-serif", width: "100%" }}
                />
                {errors.name && <p style={{ color: "red", fontSize: "12px", textShadow: "0 0 5px red" }}>{errors.name}</p>}
              </label>

              <label className="flex flex-col">
                <span style={{ color: "#34d680", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
                  EMAIL <span style={{ color: "red" }}>*</span>
                </span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="Enter Secure Address..."
                  style={{ background: "transparent", border: "2px solid #34d680", color: "#34d680", padding: "10px", borderRadius: "5px", outline: "none", fontFamily: "'Orbitron', sans-serif", width: "100%" }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {errors.email && <p style={{ color: "red", fontSize: "12px", textShadow: "0 0 5px red" }}>{errors.email}</p>}
              </label>

              <label className="flex flex-col">
                <span style={{ color: "#34d680", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
                  MOBILE (Optional)
                </span>
                <input type="text" name="mobile" value={form.mobile} onChange={handleChange}
                  placeholder="Enter Secure Line..."
                  style={{ background: "transparent", border: "2px solid #34d680", color: "#34d680", padding: "10px", borderRadius: "5px", outline: "none", fontFamily: "'Orbitron', sans-serif", width: "100%" }}
                />
                {errors.mobile && <p style={{ color: "red", fontSize: "12px", textShadow: "0 0 5px red" }}>{errors.mobile}</p>}
              </label>

              <label className="flex flex-col">
                <span style={{ color: "#34d680", fontWeight: "bold", fontFamily: "'Orbitron', sans-serif" }}>
                  MESSAGE (Optional)
                </span>
                <textarea rows={4} name="message" value={form.message} onChange={handleChange}
                  placeholder="Enter Encrypted Transmission..."
                  style={{ background: "transparent", border: "2px solid #34d680", color: "#34d680", padding: "10px", borderRadius: "5px", outline: "none", fontFamily: "'Orbitron', sans-serif", width: "100%" }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </label>

              <button type="submit" disabled={state.submitting} style={{ background: "transparent", border: "2px solid #34d680", padding: "10px 15px", color: "#d1ffbd", fontWeight: "bold", cursor: "pointer", transition: "0.3s" }}
              onMouseEnter={(e) => e.target.style.background = "#34d680"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}>TRANSMIT MESSAGE</button>
            </form>
          </motion.div>
        )}
      </div>

      <motion.div variants={slideIn("right", "tween", 0.15, 0.3)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
