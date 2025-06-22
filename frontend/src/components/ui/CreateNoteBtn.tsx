'use client';

import { useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function CreateNoteBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    async function CreateNewNote() {
        const title = titleRef.current?.value || "";
        const content = contentRef.current?.value || "";

        console.log(title, content)
    }

    return (
        <>
            <button
                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition fixed bottom-4 right-4 z-50 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <Plus size={24} />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-70 flex items-center justify-center z-40">

                </div>
            )}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-45">

                    <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative z-50">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-bold mb-4">Create New Note</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    ref={titleRef}
                                    name='title'
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    ref={contentRef}
                                    name='message'
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>
                            <button
                                type='button'
                                onClick={CreateNewNote}
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
