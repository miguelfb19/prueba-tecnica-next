import { baseUrl } from "@/constants/APIurl";

export const getPost = async (id: string) => {
  try {
    const res = await fetch(`${baseUrl}/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post");
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
};
