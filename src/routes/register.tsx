import type { Component } from "solid-js";

export const Register: Component = () => {
	return (
		<main>
			<h1>Register</h1>

			<form>
				<div>
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						autocomplete="email"
					/>
				</div>

				<div>
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						autocomplete="new-password"
					/>
				</div>

				<div>
					<button type="submit">Register</button>
				</div>
			</form>
		</main>
	);
};

export default Register;
