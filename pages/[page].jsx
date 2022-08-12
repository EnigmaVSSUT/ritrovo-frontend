import { useRouter } from 'next/router'
import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout';

const Page = () => {
    const router = useRouter();
    const page = router.query.page
  return (
    <div>{page}</div>
  )
}

Page.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Page