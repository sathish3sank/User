import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	await prisma.user.create({
		data: {
			email: 'sathish.ssp@skitter.in',
			firstname: 'Sathish',
			fullname: 'Sathish Sankar',
			lastname: 'Sankar',
			Post: {
				create: {
					title: 'Sample'
				}
			},
			Profile: {
				create: {
					bio: 'Sample'
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
