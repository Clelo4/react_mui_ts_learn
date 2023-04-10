import { RequestHandler, createProxyMiddleware } from 'http-proxy-middleware';

export default function proxy(app: { use: (arg0: string, arg1: RequestHandler) => void }) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      changeOrigin: true
    })
  );
}
