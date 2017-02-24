//
process.argv.forEach((val,index) => {
	console.log(`${index}:${val}`);
});

console.log("cwd():",process.cwd());
console.log("env():",process.env);
