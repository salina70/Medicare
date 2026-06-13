import { createClient } from "redis";

export const redisCLient = createClient({
    url:process.env.redis_url
})

redisCLient.on("error", (err)=>{   console.log("redis error ",err) })

await redisCLient.connect();
