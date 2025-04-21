import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/api/auth', createProxyMiddleware({
  target: 'http://auth-service:4001', 
  changeOrigin: true,
  pathRewrite : {
    '^/api/auth' : '',
  },
}));

app.use('/api/expenses', createProxyMiddleware({
  target: 'http://expense-service:4002',
  changeOrigin: true,
  pathRewrite : {
    '^/api/expenses' : '' ,
  },
}));

app.use('/api/settlements', createProxyMiddleware({
    target: 'http://settlement-service:4003',
    changeOrigin: true,
    pathRewrite: {
      '^/api/settlements': '', // remove prefix
    },
}));
  

  
  

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
