const CHUNK_PUBLIC_PATH = "server/pages/api/context/AuthContext.js";
const runtime = require("../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__8bca8d._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_a9e4b0._.js");
runtime.loadChunk("server/chunks/ssr/styles_home_7f4b90.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
