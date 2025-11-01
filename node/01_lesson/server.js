// File Systems
const path = require("path");
const fs = require("fs");
const fsPromises = "fs".promises;

console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, "logs.txt");

const isExist = fs.existsSync(filePath);
console.log(isExist ? "File exists" : "File not found");

fs.writeFileSync(filePath, "Hello world\n");

fs.appendFileSync(filePath, "This is appended text.\n");

fs.readFile(filePath, "utf8", async (_, data) => {
  console.log("File content:\n", data);
});

fs.unlinkSync(filePath);

// Event Emitter
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("order", (item) => console.log(`Order #${item}`));
emitter.on("order", () => console.log("Order 2nd Time"));

emitter.once("init", () => {
  console.log("🚀 App initialized (this will only run once)");
});

emitter.emit("order", "1");
emitter.emit("order", "2");

emitter.emit("init");
emitter.emit("init"); // Won’t trigger again

// Custom Event Emitter
const Logger = require("./emitterClass.js");

const logger = new Logger();

logger.log("This is a test message");
