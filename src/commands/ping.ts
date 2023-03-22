import { Context, HybridBuilder } from 'erine';

export const body = {
    data: new HybridBuilder()
        .setName('ping')
        .setDescription('Returns the client websocket latency.')
        .setAliases('latency'),
    code: async (d: Context): Promise<any> => {
        return (await d.send({ content: `Websocket latency: \`${d.bot.ws.ping} ms\`` }));
    }
}
