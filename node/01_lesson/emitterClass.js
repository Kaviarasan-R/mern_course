const EventEmitter = require("events");

class Logger extends EventEmitter {
  constructor() {
    console.log("Event emitter initialized");
    super();
  }
  log(message) {
    console.log(`Log: ${message}`);
    this.emit("messageLogged", { message, timestamp: new Date() });
  }
}

module.exports = Logger;
