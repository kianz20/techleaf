import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import styles from "./styles/App.module.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ setIsOpen }) => {
	const form = useRef();
	useEffect(() => emailjs.init("nzX7zxmdXjTr79xjw"), []);

	function submitContact(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ca70ufm",
				"template_3t59mba",
				form.current,
				"nzX7zxmdXjTr79xjw" // Replace with your actual EmailJS public key
			)
			.then(
				(result) => {
					console.log("Message sent successfully:", result.text);
					setIsOpen(false);
				},
				(error) => {
					console.error("Failed to send message:", error.text);
				}
			);
	}

	return (
		<>
			<div className={styles.darkBG} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<h1 className={styles.modalTitle}>Contact us</h1>
					<h4 className={styles.modalText}>
						Flick us a message and we&apos;ll get back to you as soon as we can.
					</h4>
					<form ref={form} onSubmit={submitContact}>
						<h3 className={styles.modalText}>Name: </h3>
						<input
							className={styles.inputField}
							name="to_name"
							placeholder="Your Name"
							required
						/>
						<br />
						<h3 className={styles.modalText}>Email Address: </h3>
						<input
							className={styles.inputField}
							name="recipient"
							placeholder="Your Email"
							type="email"
							required
						/>
						<br />
						<h3 className={styles.modalText}>Briefly describe your issue: </h3>
						<textarea
							className={styles.inputArea}
							name="message"
							placeholder="Your Message"
							required
						/>
						<br />
						<input type="hidden" name="reply_to" value="nztalktech@gmail.com" />
						<button className={styles.submitButton} type="submit">
							Submit
						</button>
						<button
							className={styles.closeButton}
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Modal;
