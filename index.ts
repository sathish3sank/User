import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	await prisma.user.create({
		data: {
			email: 'tamil.s@skitter.in',
			firstname: 'Tamil',
			fullname: 'Muthamilarasi',
            lastname: 'S',
            mobile : "9789904680",
			Post: {
				create: {
					title: 'Arasi'
				}
			},
			Profile: {
				create: {
					bio: 'muthamilarasi'
				}
			}
		}
	});

	const allUsers = await prisma.user.findMany({
		include: {
			Post: true,
			Profile: true
		}
	});
	console.dir(allUsers, { depth: null });
}

main();
