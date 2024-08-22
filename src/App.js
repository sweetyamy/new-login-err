import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// 라우터
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import SignUp from './page/SignUp';
import ProductDetail from './page/ProductDetail';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품 디테일을 눌렀을때, 로그인이 안되어있으면 로그인 페이지가 먼저 나온다
// 5. 로그인이 되어있을경우에만 상품 디테일 페이지를 볼 수 있다
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
// 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 고그인이 보인다
//9. 상품을 검색할 수 있다

function App() {
  return (
    <div className='container'>
      <h1 className='cen'>This is personal practice page, not real page!!</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
