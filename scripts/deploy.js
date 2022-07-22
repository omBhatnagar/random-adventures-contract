const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

	const gameContract = await gameContractFactory.deploy(
		["Uchiha Madara", "Goku", "Michael Scott"], // Names
		[
			"QmPxS6sjTXxQEiLUQnJqALA4dvzTcVYoauERY95oUv9e5A",
			"QmYRxqeowcBL9p1rg49f3Rmnyixg2yyR5F4x8Z2bEutaMT",
			"QmUvUoKeRVj22tedJM5T7msZqhwJocjHM2gL5dbzxsYz4r",
		],
		[100, 200, 300],
		[100, 50, 25],
		"MILOS",
		"https://i.imgur.com/YX4Q3wF.jpg",
		1000,
		50,
	);

	await gameContract.deployed();
	console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();
