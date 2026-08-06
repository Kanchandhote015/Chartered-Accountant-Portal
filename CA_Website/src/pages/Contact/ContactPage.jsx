// import React, { useState } from "react";
// import "./ContactPage.css";
// import usePageTitle from "../../hooks/usePageTitle";

// const ContactPage = () => {
//   usePageTitle("Contact Us");

//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowPopup(true);
//     e.target.reset();
//   };

//   return (
//     <main className="contact-page">

//       {/* HERO */}
//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>
//           Get in touch with our professionals for reliable guidance,
//           compliance support, and advisory services.
//         </p>
//       </section>

//       {/* CONTACT DETAILS */}
//       <section className="contact-details">
//         <div className="contact-container contact-grid">

//           {/* LEFT */}
//           <div className="contact-info">
//             <h2>Reach Our Office</h2>
//             <p>
//               We are available to assist individuals, startups, MSMEs, and
//               corporates with professional accounting, taxation, and compliance
//               services.
//             </p>

//             <ul>
//               <li>
//                 <strong>Office Address:</strong><br />
//                 Kabra Sarda & Associates,<br />
//                 N Ambazari Road, Nagpur – 440010
//               </li>

//               <li>
//                 <strong>Email:</strong><br />
//                 caksassociates@gmail.com
//               </li>

//               <li>
//                 <strong>Phone:</strong><br />
//                 +91 8605534755
//               </li>

//               <li>
//                 <strong>Working Hours:</strong><br />
//                 Monday to Saturday – 10:00 AM to 6:00 PM
//               </li>
//             </ul>
//           </div>

//           {/* RIGHT */}
//           <div className="contact-form">
//             <h2>Send Us a Message</h2>

//             <form onSubmit={handleSubmit}>
//               <input type="text" placeholder="Your Name" required />
//               <input type="email" placeholder="Your Email" required />
//               <input type="tel" placeholder="Your Phone Number" />
//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 required
//               ></textarea>

//               <button type="submit">Submit Enquiry</button>
//             </form>
//           </div>

//         </div>
//       </section>

//       {/* POPUP */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-box">

//             {/* CLOSE ICON */}
//             <span
//               className="popup-close"
//               onClick={() => setShowPopup(false)}
//             >
//               ✕
//             </span>

//             <h3>Enquiry Submitted Successfully</h3>
//             <p>
//               Thank you for reaching out. Our team will contact you shortly.
//             </p>

//           </div>
//         </div>
//       )}

//     </main>
//   );
// };

// export default ContactPage;


import React, { useState } from "react";
import "./ContactPage.css";
import usePageTitle from "../../hooks/usePageTitle";

const ContactPage = () => {
  usePageTitle("Contact Us");

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      //       setTimeout(() => {
        //   setShowPopup(true);
        // }, 400);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Get in touch with our professionals for reliable guidance,
          compliance support, and advisory services.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="contact-container contact-grid">
          {/* LEFT */}
          <div className="contact-info">
            <h2>Reach Our Office</h2>
            <p>
              We are available to assist individuals, startups, MSMEs, and
              corporates with professional accounting, taxation, and compliance
              services.
            </p>

            <ul>
              <li>
                <strong>Office Address:</strong><br />
                Kabra Sarda & Associates,<br />
                N Ambazari Road, Nagpur – 440010
              </li>

              <li>
                <strong>Email:</strong><br />
                caksassociates@gmail.com
              </li>

              <li>
                <strong>Phone:</strong><br />
                +91 8605534755
              </li>

              <li>
                <strong>Working Hours:</strong><br />
                Monday to Saturday – 10:00 AM to 6:00 PM
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <span
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </span>

            <h3>Enquiry Submitted Successfully</h3>
            <p>
              Thank you for reaching out. Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactPage;
