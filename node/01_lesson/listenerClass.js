const Logger = require("./emitterClass.js");

const logger = new Logger();

logger.on("messageLogged", (data) => {
  console.log("Listener called:", data);
});
