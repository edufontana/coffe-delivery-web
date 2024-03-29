import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrder } from './pages/CompleteOrder'
import { HomePage } from './pages/home'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/completeOrder" element={<CompleteOrder />}></Route>
        <Route path="/orderConfirmed" element={<OrderConfirmed />}></Route>
      </Route>
    </Routes>
  )
}
