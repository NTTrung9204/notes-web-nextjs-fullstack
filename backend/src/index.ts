import app from './app';

const PORT = Number(process.env.PORT) || 3030;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
