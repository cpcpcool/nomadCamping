import NavBar from "./view/NavBar/NavBar";
import Footer from "./view/Footer/Footer";
import LandingPage from "./view/LandingPage/LandingPage";
import Login from "./view/Login/Login";
import Notice from "./view/Notice/Notice";
import Booking from "./view/Booking/Booking";
import Mypage from "./view/Mypage/Mypage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Router>
          <Routes>
            {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
