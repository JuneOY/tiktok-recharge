// src/types/router.ts
export interface RouteConfig {
    path: string;
    component: React.LazyExoticComponent<React.ComponentType<any>>;
    exact?: boolean;
    children?: RouteConfig[];
}

export interface RouteParams {
    [key: string]: string | number;
}