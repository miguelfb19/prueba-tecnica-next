import { baseUrl } from "@/constants/APIurl";

export async function getPosts() {
  try {
    const res = await fetch(`${baseUrl}/posts`);
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    throw new Error("Server Failed", { cause: error });
  }
}
