import { Request, Response } from "express";
import { NoteRepository } from "../repositories/note.repositories";

export class notesController {
    static async getAll(req: Request, res: Response) {
        const notes = await NoteRepository.getNotesList()

        res.status(200).send({
            notes
        })
    }

    static async getOne(req: Request, res: Response) {
        const id: string = req.params.id;

        const note = await NoteRepository.getNoteById(id)

        res.status(200).send({
            note
        })
    }

    static async create(req: Request, res: Response) {
        const {title, content} = req.body

        const newNote = await NoteRepository.createNote(title, content)

        res.status(200).send({
            newNote
        })

    }
}