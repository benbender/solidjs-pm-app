import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const main = async () => {
	// const encryptedPassword = await hash("password1234", 12);
	const hashedPassword = "foobar";

	await db.user.upsert({
		where: { email: "a@a.com" },
		update: {},
		create: {
			email: "a@a.com",
			name: "Alice",
			hashedPassword
		}
	});
	await db.user.upsert({
		where: { email: "b@b.com" },
		update: {},
		create: {
			email: "b@b.com",
			name: "Bob",
			hashedPassword
		}
	});

	await db.user.upsert({
		where: { email: "c@c.com" },
		update: {},
		create: {
			email: "c@c.com",
			name: "Carla",
			hashedPassword
		}
	});
};

try {
	main();
} catch (error) {
	console.error(error);
	process.exit(1);
}

await db.$disconnect();
