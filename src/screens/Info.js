import React, { useState } from "react";

import Navigation from "../components/Navigation";
import styles from "./styles.module.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Info = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amt, setAmt] = useState("");
  const [mobile, setMobile] = useState("");
  const [title, setTitle] = useState("");

  const config = {
    public_key: process.env.REACT_APP_FLUTTER,
    tx_ref: Date.now(),
    amount: amt,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: mobile,
      name: name,
    },
    customizations: {
      title: title,
      description: "iCode Services",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  console.log(process.env.REACT_APP_FLUTTER);
  const handleFlutterPayment = useFlutterwave(config);
  return (
    <div>
      <Navigation />
      <div className={styles.contents}>
        <h2>
          <b>iCode Solutions</b>
        </h2>
        <div className={styles.rows}>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Mobile</label>
            <input
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Payment Description</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Amount</label>
            <input
              type="number"
              onChange={(e) => setAmt(e.target.value)}
              value={amt}
            />
          </div>
          <div className={styles.inputContainer}>
            <label style={{ visibility: "hidden" }}>Pay</label>

            {name && mobile && email && amt && title ? (
              <button
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
                className={`${styles.yellow}`}
              >
                Make Payment
              </button>
            ) : (
              <>
                <button className={`${styles.gray}`} disabled>
                  Make Payment
                </button>
              </>
            )}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Info;
