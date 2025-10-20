import path from "path";
import { fileURLToPath } from "url";
import { tests } from "@iobroker/testing";

// Run integration tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

tests.packageFiles(path.join(__dirname, ".."));