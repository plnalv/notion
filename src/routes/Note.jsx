import { useContext } from 'react'
import { UserContext } from '../components/UserContextProvider'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import fetchAPI from '../util/fetchAPI'

export default function Note() {
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const [note, setNote] = useState(null)

    useEffect(() => {
        fetchAPI
            .get(`/notes/${id}`)
            .then((note) => setNote(note))
            .catch((error) => console.error('Error fetching note:', error))
    }, [id])

    if (!note) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col gap-5">
            <Header userEmail={user.email} />
            <div className="flex flex-row justify-between">
                <Link to="/notes">
                    <button
                        type="button"
                        className="bg-[#d1d1d1] p-2 rounded-lg font-medium hover:bg-[#949494] hover:text-white"
                    >
                        Back
                    </button>
                </Link>
                <p className="text-[2em] font-medium pb-20">{note.title}</p>
            </div>
            <p className="bg-[#d1d1d1] p-3 min-h-[20vh] break-words">
                {note.text}
            </p>
        </div>
    )
}
