import { colors } from "@/config/colors";
import "@/styles/home/WhoWeAre.css";

export const WhoWeAre = () => {
	return (
		<div className="container">
			<div className="who-we-are__container">
				<h2 style={{ color: colors.primary }}>
					QUIENES <br /> SOMOS
				</h2>
				<p>
					Somos un colectivo comprometido con la defensa y promoción de los
					derechos humanos enfocado en denunciar y visibilizar la particular
					situación de vulnerabilidad que presentan los ciudadanos(as)
					venezolanos(as) en Estados Unidos, cuya política presidencial se ha
					dedicado a estigmatizar la migración.
					<br />
					<br />
					La persecución, encarcelamiento y deportación de venezolanos sin el
					debido proceso, es una aberración que no nos debe resultar indiferente
					y que constituye un hecho anacrónico e ilegal, que evoca los episodios
					más nefastos de la historia humana.
				</p>
			</div>
		</div>
	);
};
