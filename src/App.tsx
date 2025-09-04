// src/App.tsx
import AppRouter from '@/router/routerConfig';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;