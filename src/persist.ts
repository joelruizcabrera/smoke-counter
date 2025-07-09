import { createClient } from 'redis';
export async function persistData(members:object) {
    const redis =  await createClient({ url: process.env.REDIS_URL }).connect();
    await redis.set('key', 'value');
    const value = await redis.get('key');
    console.log(value)
}
