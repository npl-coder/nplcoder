import React, { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const codeSnippets = [
  {
    filename: "binary_search.cpp",
    code: ` #include <bits/stdc++.h>
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
}`,
  },
  {
    filename: "quicksort.py",
    code: ` def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`,
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
    cout << "Fibonacci(" << n << ") = " << fibonacci(n) << endl;
    return 0;
}`,
  },
];

const CodeBlock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [code, setCode] = useState("");

  useEffect(() => {
    let i = 0;
    setCode("");
    const snippet = codeSnippets[activeTab].code;
    const typingInterval = setInterval(() => {
      if (i < snippet.length) {
        setCode((prev) => prev + snippet.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setActiveTab((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  return (
    <div className=" bg-gray-900 p-6 rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 mt-2 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 mt-2 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 mt-2 bg-green-500 rounded-full"></div>
        <div className="ml-4 px-4 py-1 rounded-t-lg text-sm bg-gray-800 text-white">
          {codeSnippets[activeTab].filename}
        </div>
      </div>
      <div className="bg-slate-800 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-white min-h-64">
        <Highlight theme={themes.nightOwl} code={code} language={activeTab === 1 ? "python" : "cpp"}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className="p-2 rounded-md overflow-x-auto">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
