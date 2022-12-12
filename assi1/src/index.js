const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
		await fs.writeFile(fileName, fileContent)
	}
	catch (error) {
		console.log(error);
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
		// try{
		// 	let data = await fs.readFile(fileName, {encoding: "utf-8"},(err) => {
		// 		console.log(`${err} wefgwfg`);
		// 	});
	
		// }
		try {
			let data = await fs.readFile(fileName,"utf-8");
			console.log(data);
		}
		catch (error) {
			console.log(`${error}fe `);
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
		await fs.appendFile(fileName, fileContent)
	}
	catch (error) {
		console.log(error);
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		await fs.unlink(fileName)
	}
	catch (error) {
		console.log(error);
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }