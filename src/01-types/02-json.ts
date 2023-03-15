/**
 * This is the specification of a JSON
 *
 * A JSON value MUST be an
 * - object
 * - array
 * - number
 * - string,
 * or one of the following three literal names:
 * - false
 * - true
 * - null
 */

// replace the anys to create a valid JSON

type JSONPrimitive = number | string | boolean | null;
type Aaa = "aaa" | "bbb" | "ccc";
type JSONObject = {[key: string]: JSONValue }
type JSONObjdect = {[key in Aaa]: JSONValue }
type JSONArray = Array<JSONValue>
type JSONValue = JSONPrimitive | JSONObject | JSONArray

// ===============================
// Don't change below these lines
// ===============================
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON('hello');
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: 'hello' });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, 'foo'] } });
isJSON({ a: { b: [{name: 'test'}, {name: 'test'}, 'foo'] } });

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => '');
// @ts-expect-error
isJSON(class {});
// @ts-expect-error
isJSON(undefined);
// @ts-expect-error
isJSON(new BigInt(143));
// @ts-expect-error
isJSON(isJSON);
