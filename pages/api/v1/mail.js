// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'tanthuyhoangkd@gmail.com',
            pass: process.env.password
        },
        secure: true,
    })
    const mailData = {
        from: req.body.email,
        to: 'tanthuyhoangkd@gmail.com',
        subject: `Tin nhắn từ ${req.body.name}`,
        text: req.body.message + " | Gửi từ: " + req.body.email,
        html: `
        <div>Bạn có có tin nhắn từ ${req.body.name}</div>
        <div>Số điện thoại: ${req.body.telephone}</div>
        <div>Địa chỉ: ${req.body.address}</div>
        <div>Ý kiến khách hàng: ${req.body.message}</div>
        <div>Đã đặt: </div>
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-3/4">Sản phẩm</th>
                        <th className="w-1/4">Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${req.body.product0}</td>
                        <td>x${req.body.quantity0}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product1}</td>
                        <td>x${req.body.quantity1}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product2}</td>
                        <td>x${req.body.quantity2}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product3}</td>
                        <td>x${req.body.quantity3}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product4}</td>
                        <td>x${req.body.quantity4}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product5}</td>
                        <td>x${req.body.quantity5}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product6}</td>
                        <td>x${req.body.quantity6}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product7}</td>
                        <td>x${req.body.quantity7}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product8}</td>
                        <td>x${req.body.quantity8}</td>
                    </tr>
                    <tr>
                        <td>${req.body.product9}</td>
                        <td>x${req.body.quantity9}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Gửi từ:${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200).end()
}