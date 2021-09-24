import Layout from '../../components/Layout'
import { getIntroduce } from '../../lib/menu_query'
const Introduce = ({introduce}) => {
    return (
        <div className="p-4 text-justify text-base text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: introduce.content }} />
        </div>
    )
}
export async function getStaticProps(){
	const introduce = await getIntroduce()
    return{
        props: {
			introduce,
        }
    }
}

Introduce.getLayout = function getLayout(page){
    const _SEO = page.props.introduce
    const breadcrumb = [
		page.props.introduce
	]
    return (
        <Layout _SEO={_SEO} breadcrumb={breadcrumb}>{page}</Layout>
    )
}

export default Introduce

/**
 * <h1 className="text-2xl">Giới thiệu Công ty TNHH Thương Mại và Sản xuất HQ</h1>
            <h2 className="text-lg font-semibold py-3">Tổng quan</h2>
            <div>Công ty TNHH Thương Mại và Sản xuất HQ được thành lập do những kỹ sư, cử nhân 
                tâm huyết mong muốn luôn đưa các sản phẩm mới nhất, các hãng nổi tiếng nghiên cứu chế tạo 
                và đưa vào áp dụng trong thực tiễn nhằm giảm bớt sức lao động của con người, nâng cao hiệu quả trong sản xuất giảm chi phí tối đa cho doanh nghiệp.
                Công ty hoạt động trong lĩnh vực <span className="text-blue-600">phân phối, bán lẻ </span>trực tiếp về các thiết bị công nghiệp...
            </div>
            <h2 className="text-lg font-semibold py-3">Lợi ích</h2>
            <p className="pb-3">
                <span className="text-blue-600">Sản phẩm đa dạng</span>: tìm tòi và nghiên cứu nhằm đem đến cho khách hàng những sản phẩm tốt và mới nhất
                trong lĩnh vực như viễn thông, điện, thiết bị công nghiệp... Quý khách có thể tìm được rất nhiều sản phẩm cực kỳ phong phú về mẫu mã, kích thước..., chúng tôi mong muốn đáp ứng được mọi nhu cầu của quý khách hàng.     
            </p>
            <p className="pb-3">
                <span className="text-blue-600">Tiết kiệm chi phí và thời gian</span>: chi phí thấp và chất lượng tốt luôn là bài toán đặt ra hàng đầu cho mỗi doanh nghiệp.
                Quý khách sẽ không phải tốn thời gian đi lại mà vẫn nhận được dịch vụ tốt nhất. Quý khách có thể đặt hàng bất kỳ thời gian nào trong ngày.
            </p>
            <p className="pb-3">
                <span className="text-blue-600">Dịch vụ bảo hành</span>: Trong thời gian sử dụng, các thiết bị sẽ không tránh khỏi các trục trặc và lỗi từ sản xuất hoặc từ phía người dùng, 
                khách hàng có thể liên hệ trực tiếp với chúng tôi để có thể được hỗ trợ một cạch nhanh nhất và nhiệt tình nhất. 
            </p>
            <h2>Thông tin liên hệ</h2>
            <h3>Trụ sở chính</h3>
            <p>Địa chỉ: Xóm 4 - Xuân Hồng - Xuân Trường - Nam Định</p>
            <p>Điện thoại : 0915 172 333</p>
            <h3>Chi nhánh 1</h3>
            <p>Địa chỉ : 66 Tân Mai - Hoàng Mai - Hà Nội</p>
            <p>Điện thoại : 0979 342 589 (Mr Quyền)</p>
            <h3>Chi nhánh 2</h3>
            <p>Địa chỉ : Cầu 50 - Xuân Thượng - Xuân Trường - Nam Định</p>
            <p>Điện thoại : 0965 990 555 (Mr Hương)</p>
 */
