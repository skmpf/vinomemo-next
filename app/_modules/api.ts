import { getCookie, setCookie } from "cookies-next";
import { INote, NoteFormValues } from "@/_modules/note";
import { IUser } from "@/_modules/user";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

const api = {
  login: async (email: string, password: string) => {
    const res = await fetch(`${VINOMEMO_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    if (data.token) {
      setCookie("jwt", data.token);
    }
    return data.token;
  },
  signup: async (name: string, password: string, email: string) => {
    const res = await fetch(`${VINOMEMO_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    if (data.token) {
      setCookie("jwt", data.token);
    }
    return data.token;
  },
  getCurrentUser: async () => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching user");
      return (await res.json()) as IUser;
    } catch (error) {
      console.log(error);
    }
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
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, password, email }),
      });
      if (!res.ok) throw new Error("Error updating user");
      return (await res.json()) as IUser;
    } catch (error) {
      console.log(error);
    }
  },
  fetch: async (endpoint: string = "") => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching data");
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  },
  getNoteById: async (id: string) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching note");
      return (await res.json()) as INote;
    } catch (error) {
      console.log(error);
    }
  },
  getNotesByUserId: async (userId: string) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/users/${userId}/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching notes");
      const notes: INote[] = await res.json();
      notes.sort((a: INote, b: INote) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      return notes;
    } catch (error) {
      console.log(error);
    }
  },
  getNotesByName: async (name: string) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/search?name=${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching notes");
      const notes: INote[] = await res.json();
      notes.sort((a: INote, b: INote) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      return notes;
    } catch (error) {
      console.log(error);
    }
  },
  createNote: async (note: NoteFormValues) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
  updateNote: async (id: string, note: NoteFormValues) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
  deleteNote: async (id: string) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
