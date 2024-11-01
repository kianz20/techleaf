import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/LTTLogoNoText.png";
import Modal from "./contactModal";
import styles from "./styles/App.module.css";

function Received() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.frontPage}>
			<div className={styles.iconsDiv}>
				<div className={styles.logoDiv}>
					<img src={logo} alt="LeafTech Logo" className={styles.logo} />
					<p className={styles.navbarTitle}>LetsTalkTech NZ</p>
				</div>
				<button
					className={styles.contactButton}
					onClick={() => setIsOpen(true)}
				>
					Contact a Tech
				</button>
			</div>

			<div className={styles.titleDiv}>
				<p className={styles.siteSubtitle}>LetsTalkTech</p>
				<p className={styles.siteTitle}>
					<strong>Kiwi, community support tailored to you</strong>
				</p>
			</div>

			<div className={styles.descDiv}>
				<p className={styles.blurbText}>
					Thank you for your message! <br />
					We will get back to you as soon as we can.
				</p>
			</div>

			<button className={styles.middleButton} onClick={() => navigate("/")}>
				<h2>Back to the home page</h2>
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</div>
	);
}

export default Received;
