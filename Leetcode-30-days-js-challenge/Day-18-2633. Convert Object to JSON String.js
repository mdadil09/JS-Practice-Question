/* Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.

 

Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.
 */

//code 1

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  const res = JSON.stringify(object);
  return res;
};

//code 2
/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null || object === undefined) {
    return String(object);
  }
  if (Array.isArray(object)) {
    const values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValPairs = keys.map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${keyValPairs.join(",")}}`;
  }
  if (typeof object === "string") {
    return `"${String(object)}"`;
  }
  return String(object);
};
