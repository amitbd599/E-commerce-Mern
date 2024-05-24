import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
const VideoSection = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {/* video start */}
            <div className="video-section mt-100 overflow-hidden">
                <div
                    className="overlay-furniture section-spacing"
                    style={{
                        background:
                            'url("./assets/img/video/video-furniture.jpg") no-repeat fixed bottom center/cover'
                    }}
                >
                    <div className="container video-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="video-tools d-flex align-items-center justify-content-center">
                                    <div className="video-button-area">
                                        <Link
                                            to="#"
                                            className="video-button"

                                            onClick={() => setOpen(true)}
                                        >
                                            <svg
                                                width={22}
                                                height={26}
                                                viewBox="0 0 22 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21.5 12.134C22.1667 12.5189 22.1667 13.4811 21.5 13.866L2 25.1244C1.33333 25.5093 0.499999 25.0281 0.499999 24.2583L0.5 1.74167C0.5 0.971867 1.33333 0.490743 2 0.875643L21.5 12.134Z"
                                                    fill="#FEFEFE"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" tabIndex={-1} id="video-modal">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <iframe
                                    height={600}
                                    src="https://www.youtube.com/embed/tvPnrfQCiCo"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video end */}
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="8dTfgnkmJGs"
                onClose={() => setOpen(false)}
            />
        </>

    )
}

export default VideoSection