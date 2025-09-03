import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Handle client routing, return all requests to Vue app
app.use(history({
    // Exclude API routes
    rewrites: [
        {
            from: /^\/api\/.*$/, to: function (context) {
                return context.parsedUrl.pathname;
            }
        }
    ]
}));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle Vue.js routing, return all requests to Vue app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
