import { useState } from 'react'
import { Form } from 'react-router-dom'

export default function NewNote({ createNoteAction }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function handleSubmit() {
        createNoteAction({ title, text })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-5">
                    Name:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-[#d1d1d1]"
                    />
                </label>
                <label className="flex flex-col gap-5">
                    Note text:
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="bg-[#d1d1d1]"
                    />
                </label>
                <input type="submit" value="Create" />
            </div>
        </Form>
    )
}
