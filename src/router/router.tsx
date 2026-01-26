import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import CareerPage from '@/pages/career/CareerPage';
import HomePage from '@/pages/home/HomePage';
import PortfolioPage from '@/pages/portfolio/PortfolioPage';
import SkillsPage from '@/pages/skills/SkillsPage';

// 라우터 설정
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <ErrorPage />, // 에러 페이지 (선택사항)
        children: [
            {
                index: true, // 기본 경로 '/'
                element: <HomePage />,
            },
            {
                path: 'career',
                element: <CareerPage />,
            },
            {
                path: 'skills',
                element: <SkillsPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
        ],
    },
]);
