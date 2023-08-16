import { getCookie, setCookie } from "cookies-next";
import { INote, NoteFormValues } from "@/_modules/note";
import { IUser } from "@/_modules/user";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

const api = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${VINOMEMO_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    if (data.token) {
      setCookie("jwt", data.token);
    }
    return data.token;
  },
  signup: async (name: string, password: string, email: string) => {
    const response = await fetch(`${VINOMEMO_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    if (data.token) {
      setCookie("jwt", data.token);
    }
    return data.token;
  },
  updateUser: async ({
    id,
    name,
    password,
    email,
  }: {
    id: string;
    name: string;
    password: string;
    email: string;
  }) => {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");

    const response = await fetch(`${VINOMEMO_API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, password, email }),
    });
    if (!response.ok) throw new Error("Error updating user");
    return (await response.json()) as IUser;
  },
  fetch: async (endpoint: string = "") => {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");

    const res = await fetch(`${VINOMEMO_API_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error fetching data");
    return await res.json();
  },
  createNote: async (note: NoteFormValues) => {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");

    const res = await fetch(`${VINOMEMO_API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note),
    });
    if (!res.ok) throw new Error("Error creating note");
    return (await res.json()) as INote;
  },
  updateNote: async (id: string, note: NoteFormValues) => {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");

    const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note),
    });
    if (!res.ok) throw new Error("Error updating note");
    return (await res.json()) as INote;
  },
  deleteNote: async (id: string) => {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");

    const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error deleting note");
    return (await res.json()) as INote;
  },
};

export default api;
