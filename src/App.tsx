import CustomCursor from '@components/CustomCursor/CustomCursor'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <CustomCursor />
      <main className="flex h-full items-center justify-center bg-gray-600 p-4">
        <Outlet />
      </main>
    </>
  )
}
