import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ add, cancel }) {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();


    function saveProject() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (!title || !description || !dueDate) {
            //show error
            modalRef.current.open(); // Trigger modal to show an error
            return; // Stop if any field is empty
        }

        add({ title, description, dueDate });
        // console.log(title, description, dueDate);
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption='Close'>
                <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Looks like you forgot to enter value</p>
                <p className='text-stone-600 mb-4'>Please enter all the fields</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={cancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button
                            onClick={saveProject}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} label='Title' />
                    <Input ref={descriptionRef} label='Description' textarea />
                    <Input type='date' ref={dueDateRef} label='Due Date' />
                </div>
            </div>
        </>
    )
}