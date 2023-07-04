
import { Navigate, useLocation } from 'react-router-dom';
import userStore from '@/store/userStore';

const AuthRouter = ({ children }) => {
  const { pathname } = useLocation();
  const { token } = userStore();
  if (pathname === '/login') {
    return children;
  }
  // * 判断是否有Token,如果没token.跳到登陆页
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default AuthRouter;
