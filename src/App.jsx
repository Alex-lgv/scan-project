import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Main from './components/Main/Main';
import Subscription from './components/Subscription/Subscription';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="prices" element={<NotFound />} />
            <Route path="faq" element={<NotFound />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
