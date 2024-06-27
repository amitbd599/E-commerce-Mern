import FileStore from "../store/FileStore"
import { useEffect } from "react"
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import ImageSpeedCall from "./ImageSpeedCall";
const AllFileInner = () => {
  const navigate = useNavigate();
  let { GetFileRequest, fileList } = FileStore()
  const params = useParams();
  useEffect(() => {
    (async () => {
      await GetFileRequest(24, 1)
    })()
  }, [])

  const TotalData = fileList?.totalDocuments?.[0]?.count;
  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    let limit = 24
    await GetFileRequest(limit, pageNo + 1);
    navigate(`/all-file/${limit}/${pageNo + 1}`);
  };






  return (
    <div className="bg-white p-[20px] rounded-lg min-h-screen">

      <div className="grid grid-cols-12 gap-[20px] ">
        {
          fileList?.file?.map((item, index) =>
            <div className="col-span-2" key={index}>
              <div className=" p-[20px] shadow-lg rounded-lg">
                <div className="h-full w-full">
                  <div className="relative w-full">
                    <div className="image-item  relative overflow-hidden p-[30px]  rounded-lg  w-full h-[250px]">
                      <img
                        src={'/api/uploads/' + item?.filename}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>


                    <div>
                      <div className="absolute bottom-[-5px] right-[-5px]">
                        <ImageSpeedCall id={item?._id} filename={item?.filename} />
                      </div>
                    </div>

                  </div>


                </div>

              </div>
            </div>)
        }


      </div>
      {TotalData > 12 ? (
        <div className="pagination flex justify-center mt-[100px] mb-[50px]">
          <ReactPaginate
            className="flex gap-[16px] "
            previousLabel="<"
            nextLabel=">"
            activeLinkClassName="active_link"
            pageLinkClassName="page_link"
            previousLinkClassName="page_link"
            nextLinkClassName="page_link"
            breakLabel="..."
            pageCount={TotalData / 12}
            initialPage={params.pageNo - 1}
            pageRangeDisplayed={3}
            onPageChange={handelPageClick}
            type="button"
          />
        </div>
      ) : (
        ""
      )}
    </div>

  )
}

export default AllFileInner