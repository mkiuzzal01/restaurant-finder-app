import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import StorageLoader from './StorageLoader'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <StorageLoader>
        {children}
      </StorageLoader>
    </Provider>
  )
}
