# Vue Jobs App - Deployment Guide

## Overview
This project consists of:
- **Frontend**: Vue.js application built with Vite
- **Backend**: JSON Server for API simulation

## Deployment Options

### Option 1: Netlify (Frontend) + Railway (Backend) - Recommended

#### Frontend Deployment (Netlify)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings are automatically configured via `netlify.toml`
   - Click "Deploy site"

#### Backend Deployment (Railway)

1. **Create a new GitHub repository for backend**:
   - Copy `db.json`, `package.json` to a new folder
   - Initialize git and push to GitHub

2. **Deploy to Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your backend repository
   - Railway will automatically detect and deploy your JSON server
   - Copy the deployment URL

3. **Update Frontend Environment**:
   - Update `.env.production` with your Railway URL
   - Redeploy frontend on Netlify

### Option 2: Vercel (Alternative to Netlify)

1. **Deploy Frontend**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Build settings are automatically detected
   - Deploy

### Option 3: Single Platform Deployment (Render)

1. **Deploy Backend**:
   - Go to [render.com](https://render.com)
   - Create new Web Service
   - Connect GitHub repository
   - Use `npm start` as start command

2. **Deploy Frontend**:
   - Create new Static Site on Render
   - Connect same GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

## Environment Variables

### Development (.env)
```
VITE_API_URL=http://localhost:8000
```

### Production (.env.production)
```
VITE_API_URL=https://your-backend-url.railway.app
```

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Backend**: `npm run server` (development)
- **Backend Production**: `npm start`

## Post-Deployment Steps

1. Test all functionality on deployed URLs
2. Update API endpoints in your Vue components to use environment variables
3. Set up custom domain (optional)
4. Configure HTTPS (usually automatic)

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Ensure json-server is configured to allow cross-origin requests
2. **404 on Refresh**: The `netlify.toml` redirect rule should handle this
3. **Environment Variables**: Make sure to set production environment variables

### JSON Server CORS Fix:
If you encounter CORS issues, create a `json-server.json` config file:
```json
{
  "host": "0.0.0.0",
  "port": 8000,
  "routes": "routes.json"
}
```

## Cost Estimates
- **Netlify**: Free tier available
- **Railway**: Free tier with usage limits
- **Vercel**: Free tier available
- **Render**: Free tier available

Choose the option that best fits your needs and budget!
