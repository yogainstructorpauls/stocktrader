"use client"
import React from 'react'
import { useStockQuery } from '@/hooks/use-stock-query'

export default function ListStocks() {
    const {data: stocks, isPending, isError} = useStockQuery()
    if(isPending) {
        return '..loading'
    }

  return (
    <div>
      {stocks.map(s => (
        <div key={s.id}>
            <h1>{s.name}</h1>
            <p>{s.price}</p>
        </div>
      ))}
    </div>
  )
}
