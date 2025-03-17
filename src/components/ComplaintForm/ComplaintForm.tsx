"use client";

import { colors } from "@/config/colors";
import "@/styles/complaint-form.css";
import { Grid, Select, Textarea, TextInput } from "@mantine/core";
import Link from "next/link";

export const ComplaintForm = () => {
	return (
		<div className="complaint-form" style={{ background: colors.primary }}>
			<div className="container">
				<div className="complaint-form__container">
					<h2>¡Denuncia ahora!</h2>
					<Grid w="100%" mt={32}>
						<Grid.Col span={6}>
							<Select
								placeholder="¿Quién denuncia?"
								data={[
									"Víctima",
									"Familiar de la víctima",
									"Organización no gubernamental",
									"Otro",
								]}
								// rightSection={icon}
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput placeholder="Nombre y apellido del denunciante" />
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput placeholder="Nombre de la(s) víctima (s)" />
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput placeholder="Correo electrónico de contacto" />
						</Grid.Col>
						<Grid.Col span={12}>
							<Textarea
								placeholder="Describe el incidente"
								autosize
								minRows={7}
								maxRows={7}
							/>
						</Grid.Col>
						<Grid.Col span={12}>
							<Link href="" className="complaint-form__button">
								ENVIAR DENUNCIA
							</Link>
						</Grid.Col>
					</Grid>
				</div>
			</div>
			<img
				src="/images/complaint-form.png"
				alt="Denuncia"
				className="complaint-form__image"
			/>
		</div>
	);
};
