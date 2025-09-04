import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ROUTES } from '@/constants/routes';
import type { RouteConfig } from '@/types/router';
import LoadingSpinner from '@/components/LoadingSpinner';

// 使用懒加载导入页面组件
const CustomPage = lazy(() => import('@/pages/custom/page'));
const OrderSummary = lazy(() => import('@/pages/order-summary/page'));
const PaymentSuccess = lazy(() => import('@/pages/payment-success/page'));
const Home = lazy(() => import('@/pages/page'));

// 路由配置数组
const routeConfigs: RouteConfig[] = [
    {
        path: ROUTES.HOME,
        component: Home,
        exact: true,
    },
    {
        path: ROUTES.CUSTOM,
        component: CustomPage,
    },
    {
        path: ROUTES.ORDER_SUMMARY,
        component: OrderSummary,
    },
    {
        path: ROUTES.PAYMENT_SUCCESS,
        component: PaymentSuccess,
    },
];

// 加载中组件
const Fallback: React.FC = () => (
    <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
    </div>
);

const RouterConfig: React.FC = () => {
    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                {/* 自动生成路由 */}
                {routeConfigs.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                ))}

                {/* 重定向示例 */}
                <Route path="/old-path" element={<Navigate to={ROUTES.HOME} replace />} />

            </Routes>
        </Suspense>
    );
};

export default RouterConfig;