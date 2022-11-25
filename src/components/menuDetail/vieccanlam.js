import './viecCanLam.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCaretDown, faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ViecCanLam() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openModal1() {
        setIsOpen1(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    function closeModal1() {
        setIsOpen1(false);
    }
    return (
        <div className="vcl-wrapper">
            <header className="vcl-header">
                <div className="vcl-header-mentor">
                    <p>MGS: GS01</p>
                    <p>NGS: Harry Potter</p>
                </div>
                <div className="vcl-header-btn">
                    <button onClick={openModal}>Tạo Mới</button>
                    <Modal
                        isOpen={modalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <header className="modal-header">
                            <h3>Công việc mới</h3>
                            <button onClick={closeModal}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </header>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <div>
                                        <p for="">Tiêu Đề</p>
                                    </div>
                                    <div className="input">
                                        <input type="text" class="form-control" id="" placeholder="Nhập Tiêu Đề" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Loại công việc</p>
                                    </div>
                                    <div className="input">
                                        <select
                                            class="form-control input-compobox"
                                            data-val="true"
                                            data-val-required="Chọn loại công việc"
                                            id=""
                                        >
                                            <option value="">- loại công việc -</option>
                                            <option value="1002">Báo cáo quý 3 năm 2017</option>
                                            <option value="1003">Báo cáo quý 4 năm 2017</option>
                                            <option value="1001">Báo cáo thuế tháng 08/2017</option>
                                            <option value="1017">Báo cáo thuế theo tháng</option>
                                            <option value="1015">Thành lập công ty mới</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Khách hàng</p>
                                    </div>
                                    <div className="input">
                                        <select
                                            class="form-control input-compobox"
                                            data-val="true"
                                            data-val-required=""
                                            id=""
                                        >
                                            <option value="">- Chọn Khách hàng -</option>
                                            <option value="1002">Jhon Wiliumson</option>
                                            <option value="1003">Jakolin Jack</option>
                                            <option value="1001">Jonathan Smith</option>
                                            <option value="1017">Nekol Dimon</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Giám Sát</p>
                                    </div>
                                    <div className="input">
                                        <select
                                            class="form-control input-compobox"
                                            data-val="true"
                                            data-val-required=""
                                            id=""
                                        >
                                            <option value="">- Chọn Giám Sát -</option>
                                            <option value="1002">Jhon Wiliumson</option>
                                            <option value="1003">Jakolin Jack</option>
                                            <option value="1001">Jonathan Smith</option>
                                            <option value="1017">Nekol Dimon</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Hợp Đồng</p>
                                    </div>
                                    <div className="input">
                                        <input type="text" class="form-control" id="" placeholder="Chọn Hợp Đồng" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Từ Ngày</p>
                                    </div>
                                    <div className="input">
                                        <div class="input-group date" data-provide="datepicker">
                                            <input type="text" class="form-control" />
                                            <div class="input-group-addon">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Đến Ngày</p>
                                    </div>
                                    <div className="input">
                                        <div class="input-group date" data-provide="datepicker">
                                            <input type="text" class="form-control" />
                                            <div class="input-group-addon">
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p for="">Mô tả</p>
                                    </div>
                                    <div className="input">
                                        <textarea class="form-control" placeholder="Nhập Mô Tả"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">
                                Lưu
                            </button>
                            <button type="submit" class="btn btn-cancel" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </Modal>
                </div>
            </header>
            <div className="vcl-list">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tên Công Việc</th>
                            <th>Tên Người Thực Hiện</th>
                            <th>Từ ngày</th>
                            <th>Tới Ngày</th>
                            <th>Trạng thái</th>
                            <th>Cập nhật</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                            <td>App Design And Developer</td>
                            <td>Lionel Messi</td>
                            <td>21/10/2022</td>
                            <td>21/11/2022</td>
                            <td className="father">
                                <button className="btn status-start" onClick={() => setToggle(!toggle)}>
                                    <span>Mới</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </button>
                                {toggle && (
                                    <ul className="drop-down">
                                        <li className="drop-down-item" onClick={() => setToggle(false)}>
                                            Hoàn Thành
                                        </li>
                                        <li className="drop-down-item" onClick={() => setToggle(!toggle)}>
                                            Hủy
                                        </li>
                                    </ul>
                                )}
                            </td>
                            <td>
                                <button className="btn update" onClick={openModal1}>
                                    Task Mới
                                </button>
                                <Modal
                                    isOpen={modalIsOpen1}
                                    // onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal1}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <header className="modal-header">
                                        <h3>Chi Tiết Công Việc </h3>
                                        <button onClick={closeModal1}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    </header>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <div>
                                                    <p for="">Tiêu Đề</p>
                                                </div>
                                                <div className="input">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id=""
                                                        placeholder="Nhập Tiêu Đề"
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <p for="">Thực Hiện</p>
                                                </div>
                                                <div className="input">
                                                    <select
                                                        class="form-control input-compobox"
                                                        data-val="true"
                                                        data-val-required=""
                                                        id=""
                                                    >
                                                        <option value="">- Người Thực Hiện -</option>
                                                        <option value="1002">Jhon Wiliumson</option>
                                                        <option value="1003">Jakolin Jack</option>
                                                        <option value="1001">Jonathan Smith</option>
                                                        <option value="1017">Nekol Dimon</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <p for="">Từ Ngày</p>
                                                </div>
                                                <div className="input">
                                                    <div class="input-group date" data-provide="datepicker">
                                                        <input type="text" class="form-control" />
                                                        <div class="input-group-addon">
                                                            <FontAwesomeIcon icon={faCalendarDays} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div>
                                                    <p for="">Đến Ngày</p>
                                                </div>
                                                <div className="input">
                                                    <div class="input-group date" data-provide="datepicker">
                                                        <input type="text" class="form-control" />
                                                        <div class="input-group-addon">
                                                            <FontAwesomeIcon icon={faCalendarDays} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div>
                                                    <p for="">Mô tả</p>
                                                </div>
                                                <div className="input">
                                                    <textarea class="form-control" placeholder="Nhập Mô Tả"></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary">
                                            Lưu
                                        </button>
                                        <button type="submit" class="btn btn-cancel" onClick={closeModal1}>
                                            Cancel
                                        </button>
                                    </div>
                                </Modal>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                            <td>App Design And Developer</td>
                            <td>Lionel Messi</td>
                            <td>21/10/2022</td>
                            <td>21/11/2022</td>
                            <td>
                                <button className="btn status-finish">
                                    <span>Hoàn Thành</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </button>
                            </td>
                            <td>
                                <button className="btn update">Task Mới</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </td>
                            <td>App Design And Developer</td>
                            <td>Lionel Messi</td>
                            <td>21/10/2022</td>
                            <td>21/11/2022</td>
                            <td>
                                <button className="btn status-cancel">
                                    <span>Hủy</span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </button>
                            </td>
                            <td>
                                <button className="btn update">Task Mới</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViecCanLam;
