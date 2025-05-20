import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const navigate = useNavigate();
  const {registerContext} = useAuth();

  const onHandleSubmit = () => {
    const { username, password, confirmPassword } = getValues();

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    registerContext(username, password);

    navigate("/login", { replace: true });
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Crear cuenta</h2>

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
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "La contraseña debe tener 8 caracteres, al menos 1 letra y al menos 1 número",
              },
              onChange: () => clearErrors("confirmPassword"),
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirmar Password"
            {...register("confirmPassword", {
              required: "Confirmar contraseña",
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Registrarse
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">¿Ya tienes cuenta?</span>{" "}
          <a href="/login" className="text-blue-600 hover:underline text-sm">
            Inicia sesión
          </a>
        </div>
      </form>
    </div>
  );
};
