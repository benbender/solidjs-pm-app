import userEvent from "@testing-library/user-event";
import { fireEvent, render } from "solid-testing-library";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("<Counter />", () => {
	test("renders", () => {
		expect(Counter).toBeTruthy();
		const screen = render(() => <Counter />);
		expect(screen.container).toMatchSnapshot();
		screen.unmount();
	});

	test("increments value", async () => {
		expect(Counter).toBeTruthy();
		const screen = render(() => <Counter />);
		const button = screen["queryByRole"]?.("button") as HTMLButtonElement;
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/Clicks: 0/);
		fireEvent.click(button);

		expect(button).toHaveTextContent(/Clicks: 1/);
		await userEvent.click(button);
		expect(button).toHaveTextContent(/Clicks: 2/);
		screen.unmount();
	});
});
