(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_049c49._.js", {

"[project]/components/Codeblock.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prism-react-renderer/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const codeSnippets = [
    {
        filename: "binary_search.cpp",
        code: `  #include <bits/stdc++.h>
 using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`
    },
    {
        filename: "subarraysum.py",
        code: ` def max_subarray_sum(arr):
    max_sum = current_sum = arr[0]
    for num in arr[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum
`
    },
    {
        filename: "fibonacci.cpp",
        code: ` #include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    cout << fibonacci(n) << endl;
    return 0;
}`
    }
];
const CodeBlock = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeBlock.useEffect": ()=>{
            let i = 0;
            setCode("");
            const snippet = codeSnippets[activeTab].code;
            const typingInterval = setInterval({
                "CodeBlock.useEffect.typingInterval": ()=>{
                    if (i < snippet.length) {
                        setCode({
                            "CodeBlock.useEffect.typingInterval": (prev)=>prev + snippet.charAt(i)
                        }["CodeBlock.useEffect.typingInterval"]);
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        setTimeout({
                            "CodeBlock.useEffect.typingInterval": ()=>{
                                setActiveTab({
                                    "CodeBlock.useEffect.typingInterval": (prev)=>(prev + 1) % codeSnippets.length
                                }["CodeBlock.useEffect.typingInterval"]);
                            }
                        }["CodeBlock.useEffect.typingInterval"], 2000);
                    }
                }
            }["CodeBlock.useEffect.typingInterval"], 30);
            return ({
                "CodeBlock.useEffect": ()=>clearInterval(typingInterval)
            })["CodeBlock.useEffect"];
        }
    }["CodeBlock.useEffect"], [
        activeTab
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bg-gray-900 p-6 rounded-lg w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 mt-2 bg-red-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/Codeblock.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 mt-2 bg-yellow-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/Codeblock.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 mt-2 bg-green-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/Codeblock.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-4 px-4 py-1 rounded-t-lg text-sm bg-gray-800 text-white",
                        children: codeSnippets[activeTab].filename
                    }, void 0, false, {
                        fileName: "[project]/components/Codeblock.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Codeblock.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-white min-h-[310px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Highlight"], {
                    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prism$2d$react$2d$renderer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themes"].nightOwl,
                    code: code,
                    language: activeTab === 1 ? "python" : "cpp",
                    children: ({ tokens, getLineProps, getTokenProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "p-2 rounded-md overflow-x-auto",
                            children: tokens.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ...getLineProps({
                                        line
                                    }),
                                    children: line.map((token, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            ...getTokenProps({
                                                token
                                            })
                                        }, key, false, {
                                            fileName: "[project]/components/Codeblock.jsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this))
                                }, i, false, {
                                    fileName: "[project]/components/Codeblock.jsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Codeblock.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Codeblock.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Codeblock.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Codeblock.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(CodeBlock, "zzYIL2tlkp1d+wOKFj+4/qaeRbM=");
_c = CodeBlock;
const __TURBOPACK__default__export__ = CodeBlock;
var _c;
__turbopack_refresh__.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Codeblock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Codeblock.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './Initiatives'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Register.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative bg-white dark:bg-gradient-to-br dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c] p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 lg:px-8 pt-24 lg:pt-[140px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-center justify-between gap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white tracking-tight mb-6",
                                children: [
                                    "Empowering the",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-[#DC143C] to-[#003893] text-transparent bg-clip-text",
                                        children: "Next Generation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    ' ',
                                    "of Nepali Computational Minds."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl",
                                children: "NPLCoder is a non-profit organization dedicated to empowering Nepalese students in computing and innovation. We provide resources, mentorship, and opportunities to nurture talent that will drive global change while proudly representing Nepal, blending the nation's rich heritage with technology.            "
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-8 bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6",
                                        children: "Join Our Initiative "
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    "            ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/about",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-8 bg-transparent 0 border hover:scale-105 border-gray-600 text-gray-800 dark:text-white hover:bg-white/10 py-3 sm:py-4 rounded-xl font-semibold mt-4 sm:mt-6",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.jsx",
                                            lineNumber: 28,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 27,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-3",
                                            children: [
                                                "./images/discord-avatar1.png",
                                                "./images/discord-avatar2.png",
                                                "./images/discord-avatar.png"
                                            ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: src,
                                                    alt: `User ${i + 1}`,
                                                    className: "w-10 h-10 rounded-full border-2 border-[#2C3043] object-cover"
                                                }, i, false, {
                                                    fileName: "[project]/components/Hero.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 9
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.jsx",
                                            lineNumber: 38,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-800 hidden lg:flex dark:text-white font-medium",
                                            children: "+150 users"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.jsx",
                                            lineNumber: 52,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-[1px] bg-gray-700  sm:block"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.jsx",
                                            lineNumber: 54,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-400 dark:hover:text-white flex items-center gap-2 hover:scale-110 transition-all duration-200 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M20.317 4.369a19.791 19.791 0 0 0-4.884-1.528.075.075 0 0 0-.079.037c-.211.375-.447.864-.608 1.25-1.844-.276-3.68-.276-5.486 0-.162-.4-.41-.875-.625-1.25a.075.075 0 0 0-.079-.037A19.736 19.736 0 0 0 3.68 4.369a.07.07 0 0 0-.032.027C.533 9.174-.319 13.874.098 18.511a.081.081 0 0 0 .031.052A19.933 19.933 0 0 0 6.184 21.95a.076.076 0 0 0 .082-.027c.631-.86 1.18-1.767 1.641-2.695a.076.076 0 0 0-.041-.104 13.06 13.06 0 0 1-1.884-.905.076.076 0 0 1-.008-.125c.126-.094.252-.193.373-.295a.075.075 0 0 1 .077-.01c3.952 1.803 8.228 1.803 12.11 0a.075.075 0 0 1 .078.009c.12.102.247.201.374.295a.076.076 0 0 1-.007.125c-.597.35-1.244.657-1.887.905a.076.076 0 0 0-.04.104c.483.928 1.033 1.835 1.641 2.695a.076.076 0 0 0 .082.027 19.89 19.89 0 0 0 6.055-2.908.077.077 0 0 0 .031-.052c.5-5.14-.823-9.795-3.55-14.115a.075.075 0 0 0-.031-.026ZM9.02 15.403c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Zm5.958 0c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Z",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Hero.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 7
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://discord.gg/kJrvdhmzVd",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Join our Discord"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.jsx",
                                            lineNumber: 56,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 37,
                                    columnNumber: 3
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 36,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-2xl overflow-hidden backdrop-blur-lg p-6 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Codeblock$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 80,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Initiative.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Initiatives = ()=>{
    const initiatives = [
        {
            title: "NPLAlgo",
            description: "NPLAlgo is dedicated to fostering a vibrant competitive programming culture in Nepal. It spearheads the Nepal Olympiad in Informatics (NOI), preparing students for prestigious international contests like the International Olympiad in Informatics (IOI). Additionally, NPLAlgo organizes weekly and monthly programming contests to enhance problem-solving skills, featuring algorithmic challenges that help participants excel in platforms like Codeforces and AtCoder. Through mentorship, practice sessions, and competitions, NPLAlgo aims to build a strong community of Nepali competitive programmers ready to tackle global challenges.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "16 18 22 12 16 6"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "8 6 2 12 8 18"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Initiative.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        },
        {
            title: "NPLNeural",
            description: "NPLNeural is dedicated to building a collaborative community for undergraduate students in Nepal to explore AI, data science, and machine learning. Through monthly AI competitions and hackathons, we create opportunities for students to work together, tackle real-world challenges, and enhance their technical skills. By connecting aspiring AI researchers and practitioners, NPLNeural fosters innovation, teamwork, and hands-on problem-solving. Our platform not only prepares students for industry-relevant AI challenges but also exposes them to global competitive programming arenas, helping them compete and excel on the world stage.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "3.29 7 12 12 20.71 7"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "22",
                        x2: "12",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Initiative.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        },
        {
            title: "NPLCareer",
            description: "NPLCareer is committed to career guidance and professional development for Nepali students in computer science, both within Nepal and abroad, particularly in the U.S. It provides resources on internship opportunities, job applications, technical interviews, resume building, and networking. NPLCareer also hosts mentorship programs, industry talks, and career workshops, helping students successfully transition from academia to top tech companies, research labs, and startups.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "7",
                        width: "20",
                        height: "14",
                        rx: "2",
                        ry: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Initiative.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        },
        {
            title: "NPLAcademia",
            description: "NPLAcademia is a mentorship-driven initiative designed to help Nepali students navigate the complex journey of applying to top graduate schools in the U.S. and beyond. It provides personalized mentorship, strategy sessions, application workshops, and networking opportunities to increase the representation of Nepali students in world-class research programs. With guidance on research experience, recommendation letters, statement of purpose writing, and funding opportunities, NPLAcademia aims to create a pipeline of Nepali scholars excelling in academia and research globally.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 10v6M2 10l10-5 10 5-10 5z"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 12v5c3 3 9 3 12 0v-5"
                    }, void 0, false, {
                        fileName: "[project]/components/Initiative.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Initiative.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 bg-gradient-to-br from-white to-gray-100 dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4",
                            children: [
                                "Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-[#DC143C] to-[#003893] text-transparent bg-clip-text",
                                    children: "Initiatives"
                                }, void 0, false, {
                                    fileName: "[project]/components/Initiative.jsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Initiative.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
                            children: "Building the foundation for Nepal's digital future through these key programs designed to nurture and showcase computational talent."
                        }, void 0, false, {
                            fileName: "[project]/components/Initiative.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Initiative.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-24",
                    children: initiatives.map((initiative, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-start lg:justify-end'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#DC143C] to-[#003893] text-white",
                                                    children: initiative.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Initiative.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-gray-800 dark:text-white",
                                                    children: initiative.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Initiative.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Initiative.jsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'text-left' : 'text-left lg:text-right'}`,
                                            children: initiative.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/Initiative.jsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-6 ${index % 2 === 0 ? 'text-left' : 'text-left lg:text-right'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-transparent hover:bg-white/10 border border-gray-600 text-gray-800 dark:text-white py-2 px-6 rounded-xl font-medium hover:scale-105 transition-all duration-200",
                                                children: "Learn More"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Initiative.jsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Initiative.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Initiative.jsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/Initiative.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/Initiative.jsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Initiative.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Initiative.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Initiative.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_c = Initiatives;
const __TURBOPACK__default__export__ = Initiatives;
var _c;
__turbopack_refresh__.register(_c, "Initiatives");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_049c49._.js.map