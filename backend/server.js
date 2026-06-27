import express from 'express';
import authRoutes from './routes/authRoutes.js';
import councilRoutes from './routes/councilRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/council', councilRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
