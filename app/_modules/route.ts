const PUBLIC_ROUTES = ["/"];
const AUTH_ROUTES = ["/login", "/signup"];
const PROTECTED_ROUTES = ["/notes", "/backoffice"];
const ADMIN_ROUTES = ["/backoffice"];

export const isPublicRoute = (pathname: string) =>
  PUBLIC_ROUTES.some((route) => pathname === route);

export const isAuthRoute = (pathname: string) =>
  AUTH_ROUTES.some((route) => pathname === route);

export const isProtectedRoute = (pathname: string) =>
  PROTECTED_ROUTES.some((route) => pathname.includes(route));

export const isAdminRoute = (pathname: string) =>
  ADMIN_ROUTES.some((route) => pathname.includes(route));
