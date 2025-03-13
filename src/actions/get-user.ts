import { baseUrl } from "@/constants/APIurl";

export async function getUser(id: string) {
  try {
    const res = await fetch(`${baseUrl}/users/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }
    const data = await res.json();
    return {
      ok: true,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      message: "500 Error en el servidor",
      error,
    };
  }
}
