import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import logo from "./assets/LTTLogoNoText.png";
import Modal from "./contactModal";
import Received from "./Recevied"; // Import your new page component
import styles from "./styles/App.module.css";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Router>
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
				<Routes>
					<Route
						path="/"
						element={<HomePage isOpen={isOpen} setIsOpen={setIsOpen} />}
					/>
					<Route path="/confirm" element={<Received />} />
				</Routes>
			</div>
		</Router>
	);
}

// eslint-disable-next-line react/prop-types
function HomePage({ isOpen, setIsOpen }) {
	return (
		<>
			<div className={styles.titleDiv}>
				<p className={styles.siteSubtitle}>LetsTalkTech</p>
				<p className={styles.siteTitle}>
					<strong>Kiwi, community support tailored to you</strong>
				</p>
			</div>
			<div className={styles.descDiv}>
				<p className={styles.blurbText}>
					Locally owned and operated in Auckland, proud to be a small business
					rooted in our community. Honest and fair pricing, with no hidden fees.
					<br /> <br />
					Our services range from troubleshooting and repairs to installations
					and tech consultations, ensuring you receive tailored support for all
					your tech needs.
				</p>
			</div>
			<button className={styles.middleButton} onClick={() => setIsOpen(true)}>
				<h2>Contact us now!</h2>
			</button>
			<div className={styles.descDiv}>
				<div className={styles.examples}>
					<h3>
						<strong>Just some examples...</strong>
					</h3>
					<div className={styles.listsDiv}>
						<div className={styles.leftList}>
							<p>Computer and Laptop repairs</p>
							<p>Internet and WiFi setup</p>
							<p>Virus or Malware removal</p>
							<p>Email or company website creation</p>
							<p>Smart home setup</p>
						</div>
						<div className={styles.rightList}>
							<p>Photo or document recovery</p>
							<p>On-Call tech support</p>
							<p>Computer or Laptop speedup</p>
							<p>Custom PC builds</p>
						</div>
					</div>
				</div>
			</div>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</>
	);
}

export default App;
