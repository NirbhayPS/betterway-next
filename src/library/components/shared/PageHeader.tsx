import Link from 'next/link'
import React from 'react'

const PageHeader = () => {
    return (
        <div className='flex flex-row justify-between'>
            <Link href={'/'}>
                <div className=''>
                    <p className='text-22 font-gilroy-bold'>better<span className='text-22 font-gilroy-bold text-primary'>way</span></p>
                </div>
            </Link>
        </div>
    )
}

export default PageHeader
