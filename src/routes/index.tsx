import { Title } from "solid-meta";
import Counter from "~/components/Counter";
import "./index.css";

export default function Home() {
	return (
		<>
			<Title>Title of page 2</Title>
			<main>
				<h1>Hello world!</h1>
				<Counter />
			</main>
		</>
	);
}
