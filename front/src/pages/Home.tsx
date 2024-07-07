import { useState } from "react";
import apiService from "../api/apiService";

const Home = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await apiService.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="bg-gray-100 min-h-[10vh] min-w-[90%] m-5 rounded-[8px] shadow-sm p-5 border border-gray-500">
          <div className="flex flex-col gap-12">
            <div className="h-[10vh] bg-gray-200 border border-gray-500 rounded p-5"><input type="file" onChange={handleFileChange} /></div>
            <div>
              <button
                className="bg-gray-300 p-1 rounded font-semibold border border-gray-500 shadow-sm"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
