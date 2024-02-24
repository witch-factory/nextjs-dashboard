import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// next-auth를 config로 초기화하고 auth를 내보낸다
export default NextAuth(authConfig).auth;

// 특정 경로에 대한 미들웨어를 설정한다는 것을 알림
// 이렇게 미들웨어를 만들면 protected 라우트는 미들웨어 인증 이전에 렌더링되지 않기 때문에 보안, 성능이 좋아진다
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
