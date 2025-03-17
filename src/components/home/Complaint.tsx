import { colors } from "@/config/colors";
import "@/styles/home/Complaint.css";
import Link from "next/link";

export const Complaint = () => {
	return (
		<div className="container">
			<div className="complaint">
				<h2>
					<span style={{ color: colors.primary }}>
						Denuncia ya las deportaciones injustas.
					</span>
					<br /> Házlo antes de que sea tarde.
				</h2>

				<Link href="#Denuncia" className="complaint__button">
					Denunciar Ahora
				</Link>
			</div>
		</div>
	);
};
