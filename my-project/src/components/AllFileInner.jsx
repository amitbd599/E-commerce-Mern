import { IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler } from "@material-tailwind/react"
import { FaHome, FaPlus } from "react-icons/fa"
import FileStore from "../store/FileStore"
import { useEffect } from "react"
const apiUrl = import.meta.env.VITE_APP_API_FILE_URL;
const AllFileInner = () => {

  let { GetAllReviewByProductRequest, fileList } = FileStore()

  useEffect(() => {
    (async () => {
      await GetAllReviewByProductRequest(30, 1)
    })()
  }, [])


  console.log(fileList);


  return (
    <div className="bg-white p-[20px] rounded-lg min-h-screen">
      <div className="grid grid-cols-12 gap-[30px] ">
        {
          fileList?.map((item, index) =>
            <div className="col-span-2" key={index}>
              <div className=" p-[20px] shadow-lg rounded-lg">
                <div className="h-full w-full">
                  <div className="relative w-full">
                    <div className="image-item  relative overflow-hidden p-[30px]  rounded-lg  w-full h-[250px]">
                      <img
                        src={'api/uploads/' + item?.filename}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>


                    <div>
                      <div className="absolute bottom-[10px] right-[15px]">
                        <SpeedDial>
                          <SpeedDialHandler>
                            <IconButton size="lg" className="rounded-full">
                              <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
                            </IconButton>
                          </SpeedDialHandler>
                          <SpeedDialContent>
                            <SpeedDialAction>
                              <FaHome className="h-5 w-5" />
                            </SpeedDialAction>

                          </SpeedDialContent>
                        </SpeedDial>
                      </div>
                    </div>

                  </div>
                  <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                    <div className="mb-2">
                      <p className="text-lg font-bold text-navy-700"> Abstract Colors </p>
                      <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                        By Esthera Jackson{" "}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>)
        }


      </div>
    </div>

  )
}

export default AllFileInner