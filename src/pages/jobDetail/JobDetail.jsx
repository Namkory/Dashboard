import './jobDetail.scss';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChiTiet from '../../components/menuDetail/chitiet';
import ViecCanLam from '../../components/menuDetail/vieccanlam';
import BinhLuan from '../../components/menuDetail/binhluan';

function JobDetail() {
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="jobDetail">
                <div className="wrapper">
                    <h2>Job Detail</h2>
                    <div className="tabsList">
                        <button
                            className={`tabHeader ${index === 0 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(0);
                            }}
                        >
                            Chi Tiết Và Thống Kê
                        </button>
                        <button
                            className={`tabHeader ${index === 1 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(1);
                            }}
                        >
                            Danh sách việc cần làm
                        </button>
                        <button
                            className={`tabHeader ${index === 2 ? 'active' : null}`}
                            onClick={() => {
                                setIndex(2);
                            }}
                        >
                            Bình luận
                        </button>
                    </div>
                </div>
            </div>
            <div className="tabContent" hidden={index !== 0}>
                <ChiTiet />
            </div>
            <div className="tabContent" hidden={index !== 1}>
                <ViecCanLam />
            </div>
            <div className="tabContent" hidden={index !== 2}>
                <BinhLuan />
            </div>
        </>
    );
}

export default JobDetail;
