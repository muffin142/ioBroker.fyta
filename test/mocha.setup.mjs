// Don't silently swallow unhandled rejections
process.on("unhandledRejection", (e) => {
	throw e;
});

import chai from "chai";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";

const { use } = chai;

use(sinonChai);
use(chaiAsPromised);