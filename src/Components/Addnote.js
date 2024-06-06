import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";


const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ Title: "", Description: "", Tags: "default" });
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.Title,note.Description,note.Tags)
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="py-5 md:max-w-[40vw] mx-auto bg-slate-200 rounded-lg p-5 md:px-8 2xl:px-16">
        <div className="md:w-full  mx-auto lg:w-4/5  flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
              Add a Note
            </h4>
          </div>
          <form
            className="w-full mx-auto flex flex-col justify-center "
            noValidate
          >
            <div className="flex flex-col space-y-5">
              <div className=" md:flex-row space-y-5 md:space-y-0 ">
                <div className="relative">
                  <label
                    htmlFor="Title"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Title
                  </label>
                  <input
                    htmlFor="Title"
                    id="Title"
                    name="Title"
                    onChange={onChange}
                    type="text"
                    placeholder="Enter Your Title"
                    className="py-1 mb-4 px-2 md:px-3 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12  bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-8"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="Description"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3"
                  >
                    Description
                  </label>
                  <textarea
                    htmlFor="Description"
                    id="Description"
                    name="Description"
                    onChange={onChange}
                    className="px-2 py-1 mb-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:border-heading placeholder-body"
                    autoComplete="off"
                    spellCheck="false"
                    rows={4}
                    placeholder="Write your Description here"
                  ></textarea>
                </div>
                 <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                  <label
                    htmlFor="Tags"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Tag (required)
                  </label>
                  <input
                    id="Tags"
                    name="Tags"
                    type="Tags"
                    placeholder="Tag"
                    className="py-1 mb-4 px-2 md:px-3 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12  bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-8"
                    
                  />
                </div>
                <div className="relative">
                  <button
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-3 md:px-6 lg:px-5 py-2 md:py-3.5 lg:py-2 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto rounded-lg"
                    type="submit"
                    onClick={handleClick}
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
