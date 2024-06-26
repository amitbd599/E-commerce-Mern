import axios from "axios";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const CreateFileInner = () => {
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const handleFileChange = (event) => {
        setFiles(event.target.files);
        const selectedFiles = Array.from(event.target.files);
        const newImages = selectedFiles.map((file) => ({
            id: URL.createObjectURL(file),
            name: file.name,
            url: URL.createObjectURL(file),
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };

    const handleRemoveAllImages = () => {
        setImages([]);
    };
    const onSubmit = async () => {

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('img', files[i]);
        }
        try {
            let res = await axios.post('api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            },
            );

            if (res.data.status === true) {
                setImages([]);
                setFiles([]);
            }


        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.message);
            }
        }
    };


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <>

                <article
                    aria-label="File Upload Modal"
                    className="relative h-full flex flex-col bg-white rounded-md"

                >

                    {/* scroll area */}
                    <section className="h-full overflow-auto p-8 w-full  flex flex-col">


                        <header className="file-upload-wrapper border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                            <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                            </p>
                            <div className="file-upload-wrapper">
                                <input
                                    id="file-input"
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="file-input"
                                    className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none cursor-pointer"
                                >
                                    Upload a file
                                </label>
                            </div>
                        </header>

                        <ul id="gallery" className=" mt-[30px]">

                            <div className="file-list mt-4">
                                {images.length > 0 ? (
                                    <>
                                        <button
                                            onClick={handleRemoveAllImages}
                                            className="mt-2 rounded-sm px-3 py-1 bg-red-200 hover:bg-red-300 focus:shadow-outline focus:outline-none cursor-pointer"
                                        >
                                            Remove All Images
                                        </button>
                                        <ul className="grid grid-cols-12 gap-4 mt-4">
                                            {images.map((image) => (
                                                <li key={image.id} className="image-item col-span-2 relative overflow-hidden p-[30px]  rounded-lg shadow-lg w-[230px] h-[250px]">
                                                    <img src={image.url} alt={image.name} className="w-full h-full object-cover" />

                                                    <button
                                                        onClick={() => handleRemoveImage(image.id)}
                                                        className="absolute top-0 right-0 mt-2 mr-2 rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center"
                                                    >
                                                        &times;
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <li
                                        id="empty"
                                        className="h-full w-full text-center flex flex-col  justify-center items-center"
                                    >
                                        <img
                                            className="mx-auto w-32"
                                            src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                                            alt="no data"
                                        />
                                        <span className="text-small text-gray-500">No files selected</span>
                                    </li>
                                )}
                            </div>
                        </ul>
                    </section>
                    {/* sticky footer */}
                    <footer className="flex justify-end px-8 pb-8 pt-4">
                        <button onClick={onSubmit}
                            id="submit"
                            className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                        >
                            Upload now
                        </button>
                        <button
                            id="cancel"
                            className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                        >
                            Cancel
                        </button>
                    </footer>
                </article>


            </>


        </div>
    )
}

export default CreateFileInner