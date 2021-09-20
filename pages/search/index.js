import React from 'react'
import Script from 'next/script'
import Layout from '../../components/Layout'
const Search = () => {
    return (
        <div>
            <Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
            <div className="gcse-searchresults-only"></div>
        </div>
    )
}

Search.getLayout = function getLayout(page){
	const breadcrumb = [
		{id: '', name: '', slug: ''},
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Search
