import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoadingFallback from '@components/Loading/LoadingFallback'

const App = lazy(() => import('@/App'))
const DicePage = lazy(() => import('@pages/DicePage'))

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <DicePage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: '/Dice',
  }
)
