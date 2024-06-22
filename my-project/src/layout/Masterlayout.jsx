import { FaBlackberry, FaSlidersH, FaSortAlphaDown, FaUncharted } from "react-icons/fa"
import { Link } from "react-router-dom"

const Masterlayout = ({ children }) => {
  return (
    <section className="layout">
      {/* sidebar */}
      <aside className="min-w-[250px] bg-white min-h-screen fixed">
        <div className="logo px-[20px] py-[30px] flex justify-center border-b border-gray-200">
          <img src="/Img/logo-dark.png" alt="" />
        </div>

        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Navigation</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item active"> <FaBlackberry /> Dashboard</Link>
            </li>

          </ul>
        </div>
        <div className="px-[10px]  pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Slider</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item "><FaSlidersH /> Create Slider</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Product</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item "><FaUncharted /> Create Product</Link>
            </li>
            <li className="pb-[2px]">
              <Link to="/" className="link_item "><FaSortAlphaDown /> All Product</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">User</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All User</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Features</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">Create Features</Link>
            </li>
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All Features</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Brand</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">Create Brand</Link>
            </li>
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All Brand</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Category</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">Create Category</Link>
            </li>
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All Category</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Review</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="px-[10px] pt-[10px] pb-[10px] border-b border-gray-200">
          <p className="text-sm text-gray-500 font-medium pb-[5px]">Invoice</p>
          <ul className="pt-[10px]">
            <li className="pb-[2px]">
              <Link to="/" className="link_item ">All Invoice</Link>
            </li>
          </ul>
        </div>

      </aside>

      {/* Inner data */}
      <div className="bg-[#EBEFF2] ml-[250px] min-h-screen">
        <div className="top bg-white px-[20px] py-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[20px]">Inner Dashboard</p>
            <div className="user_profile  flex items-start gap-[10px] cursor-pointer">
              <img src="/Img/avater.png" alt="" className="w-[50px]" />
              <div>
                <p className="font-medium text-gray-700">Alex Johan</p>
                <p>amit@demo.com</p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>

      {/* Footer */}
      <footer>

      </footer>
    </section>
  )
}

export default Masterlayout