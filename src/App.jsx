import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
        <Quiz />
      <Footer />
    </div>
  );
};

export default App;