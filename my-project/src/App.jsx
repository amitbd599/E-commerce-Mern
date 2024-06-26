import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateSlider from './pages/CreateSlider'
import AllSlider from './pages/AllSlider'
import UpdateSlider from './pages/UpdateSlider'
import CreateProduct from './pages/CreateProduct'
import AllProduct from './pages/AllProduct'
import AllUser from './pages/AllUser'
import UpdateProduct from './pages/UpdateProduct'
import CreateFeature from './pages/CreateFeature'
import UpdateFeature from './pages/UpdateFeature'
import AllFeature from './pages/AllFeature'
import CreateBrand from './pages/CreateBrand'
import AllBrand from './pages/AllBrand'
import CreateCategory from './pages/CreateCategory'
import UpdateBrand from './pages/UpdateBrand'
import UpdateCategory from './pages/UpdateCategory'
import AllCategory from './pages/AllCategory'
import AllReview from './pages/AllReview'
import AllInvoice from './pages/AllInvoice'
import AllOrder from './pages/AllOrder'
import File from './pages/File'
import CreateFile from './pages/CreateFile'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/create-slider' element={<CreateSlider />} />
          <Route exact path='/all-slider' element={<AllSlider />} />
          <Route exact path='/update-slider/:id' element={<UpdateSlider />} />
          <Route exact path='/create-product' element={<CreateProduct />} />
          <Route exact path='/all-product' element={<AllProduct />} />
          <Route exact path='/update-product/:id' element={<UpdateProduct />} />
          <Route exact path='/all-user' element={<AllUser />} />
          <Route exact path='/create-feature' element={<CreateFeature />} />
          <Route exact path='/all-feature' element={<AllFeature />} />
          <Route exact path='/update-feature/:id' element={<UpdateFeature />} />
          <Route exact path='/create-brand' element={<CreateBrand />} />
          <Route exact path='/all-brand' element={<AllBrand />} />
          <Route exact path='/update-brand/:id' element={<UpdateBrand />} />
          <Route exact path='/create-category' element={<CreateCategory />} />
          <Route exact path='/all-category' element={<AllCategory />} />
          <Route exact path='/update-category/:id' element={<UpdateCategory />} />
          <Route exact path='/all-review' element={<AllReview />} />
          <Route exact path='/all-invoice' element={<AllInvoice />} />
          <Route exact path='/all-order' element={<AllOrder />} />
          <Route exact path='/create-file' element={<CreateFile />} />
          <Route exact path='/all-file' element={<File />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
