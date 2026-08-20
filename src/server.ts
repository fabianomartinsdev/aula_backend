import { app } from "./app";

app.listen(
    {
        port: 3030,
        host: '0.0.0.0',
    }
).then(() => {
    console.log('HTTP server is running;');
})