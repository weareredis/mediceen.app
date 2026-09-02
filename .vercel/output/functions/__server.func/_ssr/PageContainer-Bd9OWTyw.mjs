import { l as cn } from "./constants-DtYuZSVk.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageContainer-Bd9OWTyw.js
var import_jsx_runtime = require_jsx_runtime();
function PageContainer({ children, className, width = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full px-6 sm:px-8", width === "wide" && "max-w-[76rem]", width === "default" && "max-w-[76rem]", width === "prose" && "max-w-[46rem]", className),
		children
	});
}
//#endregion
export { PageContainer as t };
