import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const Header = () => {
  const { logout } = useAuth();

  const onHandleLogOut = () => {
    logout();
  };

  return (
    <header className="p-4 bg-white flex justify-between items-center shadow-md">
      <NavLink to="/">
        <h1 className="text-2xl font-bold text-blue-400">🛍️ Mi Tienda</h1>
      </NavLink>
      <nav className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-blue-900"
              : "text-gray-600 hover:text-red-600"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/clothes"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-blue-900 transition-all transition-discrete"
              : "text-gray-600 hover:text-red-500"
          }
        >
          Ropa
        </NavLink>
        <NavLink
          to="/shoes"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-blue-900 transition-all transition-discrete"
              : "text-gray-600 hover:text-red-600"
          }
        >
          Zapatos
        </NavLink>
        <NavLink
          to="/accesories"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-blue-900 transition-discrete"
              : "text-gray-600 hover:text-red-600"
          }
        >
          Accesorios
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-blue-900 transition-discrete"
              : "text-gray-600 hover:text-red-600"
          }
        >
          Acerca de nosotros
        </NavLink>
      </nav>

      <div>
        <NavLink
          to="/login"
          onClick={onHandleLogOut}
          replace={true}
          className="text-red-500 font-semibold hover:underline text-sm"
        >
          Log out
        </NavLink>
      </div>
    </header>
  );
};
