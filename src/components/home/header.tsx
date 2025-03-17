import "@/styles/home/header.css";
import Link from "next/link";

export const Header = () => {
	return (
		<div className="home__header">
			<div className="container">
				<img src="/images/logo.png" alt="Logo" />
				<div className="home__header__content">
					<h1>Denuncia ya las deportaciones injustas.</h1>
					<p>Hazlo antes de que sea tarde.</p>
					<Link href="#Denuncia">DENUNCIAR AHORA</Link>
				</div>
			</div>
		</div>
	);
};
