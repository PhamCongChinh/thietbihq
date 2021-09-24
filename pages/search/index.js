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
    const _SEO = {
		meta_title: 'Tìm kiếm',
		meta_description: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định",
		meta_keywords: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định"
	}
	const breadcrumb = [
		{name: 'Tìm kiếm', url: '/search'},
	]
	return (
		<Layout _SEO={_SEO} breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Search
