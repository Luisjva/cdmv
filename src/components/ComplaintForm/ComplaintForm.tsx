"use client";

import { colors } from "@/config/colors";
import "@/styles/complaint-form.css";
import { Button, Grid, Select, Textarea, TextInput } from "@mantine/core";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
	denunciante: Yup.string().required("Este campo es obligatorio"),
	nombreDenunciante: Yup.string().required("Este campo es obligatorio"),
	nombreVictima: Yup.string().required("Este campo es obligatorio"),
	email: Yup.string()
		.email("Correo electrónico inválido")
		.required("Este campo es obligatorio"),
	descripcion: Yup.string().required("Este campo es obligatorio"),
});

export const ComplaintForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			denunciante: "",
			nombreDenunciante: "",
			nombreVictima: "",
			email: "",
			descripcion: "",
		},
		validationSchema,
		onSubmit: (values) => {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				formik.resetForm();
				// alert("Denuncia enviada");
			}, 1000);
		},
	});

	return (
		<div
			className="complaint-form"
			style={{ background: colors.primary }}
			id="Denuncia"
		>
			<div className="container">
				<div className="complaint-form__container">
					<h2>¡Denuncia ahora!</h2>
					<form onSubmit={formik.handleSubmit}>
						<Grid style={{ width: "100%" }} mt={32}>
							<Grid.Col span={6}>
								<Select
									placeholder="¿Quién denuncia?"
									data={[
										"Víctima",
										"Familiar de la víctima",
										"Organización no gubernamental",
										"Otro",
									]}
									{...formik.getFieldProps("denunciante")}
									error={
										formik.touched.denunciante && formik.errors.denunciante
									}
									onChange={(value) => {
										formik.setFieldValue("denunciante", value);
									}}
								/>
							</Grid.Col>
							<Grid.Col span={6}>
								<TextInput
									placeholder="Nombre y apellido del denunciante"
									{...formik.getFieldProps("nombreDenunciante")}
									error={
										formik.touched.nombreDenunciante &&
										formik.errors.nombreDenunciante
									}
								/>
							</Grid.Col>
							<Grid.Col span={6}>
								<TextInput
									placeholder="Nombre de la(s) víctima (s)"
									{...formik.getFieldProps("nombreVictima")}
									error={
										formik.touched.nombreVictima && formik.errors.nombreVictima
									}
								/>
							</Grid.Col>
							<Grid.Col span={6}>
								<TextInput
									placeholder="Correo electrónico de contacto"
									{...formik.getFieldProps("email")}
									error={formik.touched.email && formik.errors.email}
								/>
							</Grid.Col>
							<Grid.Col span={12}>
								<Textarea
									placeholder="Describe el incidente"
									autosize
									minRows={7}
									maxRows={7}
									{...formik.getFieldProps("descripcion")}
									error={
										formik.touched.descripcion && formik.errors.descripcion
									}
								/>
							</Grid.Col>
							<Grid.Col span={12}>
								<Button
									type="submit"
									className="complaint-form__button"
									disabled={isLoading}
								>
									{isLoading ? "ENVIANDO..." : "ENVIAR DENUNCIA"}
								</Button>
							</Grid.Col>
						</Grid>
					</form>
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
