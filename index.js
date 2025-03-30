import { client } from "./client.js";

async function init() {
    const res = await client.get("msg:1");
//   await client.expire("msg:1", 10);
  console.log(res);
}
init();
