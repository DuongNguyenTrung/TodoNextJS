import axios from 'axios'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import AxiosInstance from '../../service/axios'

const fetcher =(url:string)=> AxiosInstance.post(url, { start: '2022-04-01', end: '2022-04-30' }, {
  params: { page: 1, size: 4, sorts: ['idtodo,desc'] }
}).then(res=>res.data)
const todo: NextPage = () => {
  const {data,error}=useSWR("/api/todo/date/1",fetcher)
  if(data) console.log(data);
  if(error ) console.log(error);
  
  return (
    <div>todo</div>
  )
}

export default todo