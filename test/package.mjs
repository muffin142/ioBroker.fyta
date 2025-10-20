import path from "path";
import { fileURLToPath } from "url";
import { tests } from "@iobroker/testing";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

tests.packageFiles(path.join(__dirname, ".."));