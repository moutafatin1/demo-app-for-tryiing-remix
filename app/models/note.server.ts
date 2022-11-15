import type { Note } from "@prisma/client";
import { prisma } from "~/prisma.server";

export function getNotes() {
  return prisma.note.findMany();
}

export type CreateNewNote = Omit<Note, "id" | "createdAt" | "updatedAt">;
export function createNewNote(newNote: CreateNewNote) {
  return prisma.note.create({
    data: {
      ...newNote,
    },
  });
}
