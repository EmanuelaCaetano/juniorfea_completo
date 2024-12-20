import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken"); // Verifica o token de autenticação no cookie

  const protectedPaths = ["/admin", "/admin/homeAdmin"]; // Rotas protegidas
  const isProtectedRoute = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute && !token) {
    // Se o usuário tentar acessar uma rota protegida sem token, redirecione para o login
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Permite que a solicitação continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/homeAdmin", "/admin/adicionarPost", "/admin/deletarPost"], // Define as rotas em que o middleware será aplicado
};
