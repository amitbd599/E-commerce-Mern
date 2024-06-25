import { IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler } from "@material-tailwind/react"
import { FaHome, FaPlus } from "react-icons/fa"

const AllFileInner = () => {





  return (
    <div className="bg-white p-[20px] rounded-lg min-h-screen">
      <div className="grid grid-cols-12 gap-[30px] ">
        {
          [...Array(4)].map((item, index) =>
            <div className="col-span-3" key={index}>
              <div className=" p-[20px] shadow-lg rounded-lg">
                <div className="h-full w-full">
                  <div className="relative w-full">
                    <img
                      src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                      className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                      alt=""
                    />

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