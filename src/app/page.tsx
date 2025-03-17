import { ComplaintForm } from "@/components/ComplaintForm/ComplaintForm";
import { Complaint } from "@/components/home/Complaint";
import { Header } from "@/components/home/header";
import { WhoWeAre } from "@/components/home/WhoWeAre";

export default function Home() {
	return (
		<div>
			<Header />
			<WhoWeAre />
			<Complaint />
			<ComplaintForm />
		</div>
	);
}
