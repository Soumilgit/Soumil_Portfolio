import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "ACCESS DENIED: Name Required";
    else if (/\d/.test(form.name)) newErrors.name = "INVALID INPUT: Name cannot have numbers";

    if (!form.email.trim()) newErrors.email = "ACCESS DENIED: Email Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "INVALID INPUT: Enter a valid email";

    if (form.mobile.trim() && !/^\d{10}$/.test(form.mobile)) newErrors.mobile = "ERROR: Invalid 10-digit number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast.dismiss();
    setTimeout(() => setSubmitted(true), 300);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(10,10,25,1) 100%)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 15px #34d680",
      border: "2px solid #34d680",
    },
    label: {
      color: "#34d680",
      fontWeight: "bold",
      fontFamily: "'Orbitron', sans-serif",
    },
    input: {
      background: "transparent",
      border: "2px solid #34d680",
      color: "#34d680",
      padding: "10px",
      borderRadius: "5px",
      outline: "none",
      fontFamily: "'Orbitron', sans-serif",
      width: "100%",
    },
    errorText: {
      color: "red",
      fontSize: "12px",
      textShadow: "0 0 5px red",
    },
    button: {
      background: "transparent",
      border: "2px solid #34d680",
      padding: "10px 15px",
      color: "#90EE90",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      textShadow: "0 0 2px #34d680, 0 0 5px #34d680",
    },
    buttonHover: {
      background: "#edf9eb",
      color: "black",
      boxShadow: "0 0 20px #edf9eb",
    },
    successMessage: {
      fontSize: "18px",
      color: "lime",
      textShadow: "0 0 10px lime",
      textAlign: "center",
    },
  };

  return (
    <div className="relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Cyberpunk Neon Form */}
      <div className="relative flex-[0.75] bg-transparent w-full">
        {!submitted ? (
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            style={styles.container}
          >
            <p style={{ ...styles.label, fontSize: "14px" }}>🔐 AUTHORIZED ACCESS REQUIRED</p>
            <h3 style={{ ...styles.label, fontSize: "24px", fontWeight: "bold" }}>CYBERNETIC CONTACT FORM</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
              <label className="flex flex-col">
                <span style={styles.label}>USERNAME <span style={{ color: "red" }}>*</span></span>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Enter Codename..."
                  style={{ ...styles.input, borderColor: errors.name ? "red" : "#34d680" }}
                />
                {errors.name && <p style={styles.errorText}>{errors.name}</p>}
              </label>

              <label className="flex flex-col">
                <span style={styles.label}>EMAIL <span style={{ color: "red" }}>*</span></span>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="Enter Secure Address..."
                  style={{ ...styles.input, borderColor: errors.email ? "red" : "#34d680" }}
                />
                {errors.email && <p style={styles.errorText}>{errors.email}</p>}
              </label>

              <label className="flex flex-col">
                <span style={styles.label}>MOBILE (Optional)</span>
                <input type="text" name="mobile" value={form.mobile} onChange={handleChange}
                  placeholder="Enter Secure Line..."
                  style={{ ...styles.input, borderColor: errors.mobile ? "red" : "#34d680" }}
                />
                {errors.mobile && <p style={styles.errorText}>{errors.mobile}</p>}
              </label>

              <label className="flex flex-col">
                <span style={styles.label}>MESSAGE</span>
                <textarea rows={4} name="message" value={form.message} onChange={handleChange}
                  placeholder="Enter Encrypted Transmission..."
                  style={styles.input}
                />
              </label>

              <button type="submit"
                style={styles.button}
                onMouseEnter={(e) => e.target.style.background = "#34d680"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                TRANSMIT MESSAGE
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            style={styles.container}
          >
            <p style={styles.successMessage}>✅ TRANSMISSION SUCCESSFUL! MESSAGE RECEIVED.</p>
          </motion.div>
        )}
      </div>

      {/* Right Side - 3D Cyberpunk Computer */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <ComputersCanvas />
      </motion.div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar closeOnClick pauseOnHover />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
