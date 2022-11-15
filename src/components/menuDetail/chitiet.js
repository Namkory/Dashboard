import './chiTiet.scss';

function ChiTiet() {
    return (
        <div className="wrapper">
            <div className="left">
                <h3>Chi Tiết Công Việc</h3>
                <table>
                    <tr>
                        <th>Mã CV</th>
                        <th>PID-001</th>
                    </tr>
                    <tr>
                        <td>Tên Công Việc</td>
                        <td className="active">Diamond - Coming Soon</td>
                    </tr>
                    <tr>
                        <td>Loại CV</td>
                        <td>PID-001</td>
                    </tr>
                    <tr>
                        <td>Ngày Bắt Đầu</td>
                        <td>12/11/2022</td>
                    </tr>
                    <tr>
                        <td>Ngày Kết Thúc</td>
                        <td>12/12/2022</td>
                    </tr>
                    <tr>
                        <td>Người Tạo</td>
                        <td className="active">Nekol Dimon</td>
                    </tr>
                    <tr>
                        <td>Người Giám Sát</td>
                        <td className="active">Nguyễn Hoài Nam</td>
                    </tr>
                    <tr>
                        <td>Mã HĐ</td>
                        <td>PID-002</td>
                    </tr>
                    <tr>
                        <td>Mô tả</td>
                        <td>
                            Due to the fact that the developer of the template was temporarily mobilized into the ranks
                            of the Ukrainian army
                        </td>
                    </tr>
                </table>
            </div>
            <div className="right">
                <h3>Chi Tiết Khách Hàng</h3>
                <table>
                    <tr>
                        <th>Tên Công Ty</th>
                        <th>Công Ty TNHH Phần Mềm NNK</th>
                    </tr>
                    <tr>
                        <td>Địa Chỉ Công ty</td>
                        <td>8 Nguyễn Bá Tuyển, Q. Tân Bình, TP. HCM</td>
                    </tr>
                    <tr>
                        <td>Điên Thoại</td>
                        <td>(08) 9407708</td>
                    </tr>
                    <tr>
                        <td>Người Đại Diện</td>
                        <td>Nekol Dimon</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ Đại Diện</td>
                        <td>8 Nguyễn Đình Chiểu, Q. 3, TP. HCM</td>
                    </tr>
                    <tr>
                        <td>Điên Thoại</td>
                        <td>0918. 123.456</td>
                    </tr>
                    <tr>
                        <td>Chứ Vụ</td>
                        <td>Giám Đốc Kinh Doanh</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ChiTiet;
