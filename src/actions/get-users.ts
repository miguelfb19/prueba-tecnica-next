import { baseUrl } from "@/constants/APIurl";

export async function getUsers() {
  try {
    const res = await fetch(`${baseUrl}/users`);
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  } catch (error) {
    throw new Error("Server Failed", { cause: error });
  }
}
