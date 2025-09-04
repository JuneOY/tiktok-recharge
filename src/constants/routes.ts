// src/constants/routes.ts
export const ROUTES = {
    HOME: '/',
    CUSTOM: '/custom',
    ORDER_SUMMARY: '/order-summary',
    PAYMENT_SUCCESS: '/payment-success',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];