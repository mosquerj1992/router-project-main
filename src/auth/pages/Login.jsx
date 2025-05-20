import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onHandleSubmit = () => {
    const success = login(getValues("username"), getValues("password"));

    if (!success) {
      setError("general", {
        type: "manual",
        message: "Usuario o contraseña incorrectos",
      });
      return;
    }

    navigate("/", { replace: true });
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username requerido",
              onChange: () => clearErrors("general"),
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password requerido",
              onChange: () => clearErrors("general"),
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "La contraseña debe tener 8 caracteres, al menos 1 letra y al menos 1 número",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {errors.general && (
          <p className="text-red-600 text-center text-sm mb-4">{errors.general.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Log In
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">¿No tienes cuenta?</span>{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline text-sm">
            Regístrate
          </NavLink>
        </div>
      </form>
    </div>
  );
};
