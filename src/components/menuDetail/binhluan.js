import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './binhLuan.scss';
import images from '../../asset/images';
import { faFaceSmileBeam, faThumbsDown, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function BinhLuan() {
    const storageComment = JSON.parse(localStorage.getItem('comment'));

    const [input, setInput] = useState('');
    const [comment, setComment] = useState(storageComment ?? []);
    const [likes, setLikes] = useState(0);
    // const [idcmt, setIdCmt] = useState(0);

    const handleLike = () => {
        setLikes((prev) => prev + 1);
    };

    const handleDisLike = () => {
        if (likes > 0) {
            setLikes((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        setComment((prev) => {
            const newComment = [...prev, input];
            const jsonComment = JSON.stringify(newComment);
            localStorage.setItem('comment', jsonComment);
            return newComment;
        });
        setInput('');
    };

    return (
        <>
            <div className="wrappercmt">
                <div className="avatar">
                    <img src={images.noImage} alt="avatar" className="avatarimg" />
                </div>
                <div className="cmt">
                    <input
                        type="text"
                        // id={idcmt}
                        value={input}
                        className="cmtinput"
                        placeholder="Viết bình luận"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="cmtbtn">
                        <FontAwesomeIcon icon={faFaceSmileBeam} className="icon" />
                        <div className="cmtbtn-final">
                            <button className="cmtbtn-finall cancel">Hủy</button>
                            <button className="cmtbtn-finall submit" onClick={handleSubmit}>
                                Bình luận
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {comment.map((input, index) => {
                return (
                    <div key={index} className="usercmt">
                        {console.log(index)}
                        <div className="avatar">
                            <img src={images.noImage} alt="avatar" className="avatarimg" />
                        </div>
                        <div className="inforuser">
                            <div className="usercmt-name">
                                <p>Namkory</p>
                            </div>
                            <div className="usercmt-content">
                                <p>{input}</p>
                            </div>
                            <div className="usercmt-icon">
                                <Tippy content="Thích" placement="bottom">
                                    <div onClick={handleLike}>
                                        <FontAwesomeIcon icon={faThumbsUp} className="icon-thumbs icon" />
                                    </div>
                                </Tippy>
                                <p>{likes >= 0 ? likes : 0}</p>
                                <Tippy content=" Không Thích" placement="bottom">
                                    <div onClick={handleDisLike}>
                                        <FontAwesomeIcon icon={faThumbsDown} className="icon" />
                                    </div>
                                </Tippy>
                                <p className="usercmt-icon-res"> Phản hồi</p>
                            </div>
                        </div>

                        <FontAwesomeIcon icon={faTrashCan} className="icondelete" />
                    </div>
                );
            })}
        </>
    );
}

export default BinhLuan;
