import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailsInner = () => {
    return (
        <div className="article-page mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="article-rte">
                            <div className="article-img">
                                <img src="assets/img/blog/furniture-9.jpg" alt="img" />
                            </div>
                            <div className="article-meta">
                                <h2 className="article-title">
                                    Delivering What Consumers Really Value?
                                </h2>
                                <div className="article-card-published text_14 d-flex align-items-center">
                                    <span className="article-author d-flex align-items-center">
                                        <span className="icon-author">
                                            <svg
                                                width={15}
                                                height={17}
                                                viewBox="0 0 15 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.5 0.59375C4.72888 0.59375 2.46875 2.85388 2.46875 5.625C2.46875 7.3573 3.35315 8.89587 4.69238 9.80274C2.12903 10.9033 0.3125 13.447 0.3125 16.4063H1.75C1.75 13.2224 4.31616 10.6563 7.5 10.6563C10.6838 10.6563 13.25 13.2224 13.25 16.4063H14.6875C14.6875 13.447 12.871 10.9033 10.3076 9.80274C11.6469 8.89587 12.5313 7.3573 12.5313 5.625C12.5313 2.85388 10.2711 0.59375 7.5 0.59375ZM7.5 2.03125C9.49341 2.03125 11.0938 3.63159 11.0938 5.625C11.0938 7.61841 9.49341 9.21875 7.5 9.21875C5.50659 9.21875 3.90625 7.61841 3.90625 5.625C3.90625 3.63159 5.50659 2.03125 7.5 2.03125Z"
                                                    fill="#00234D"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">Lara Joe</span>
                                    </span>
                                    <span className="article-separator mx-3">
                                        <svg
                                            width={2}
                                            height={12}
                                            viewBox="0 0 2 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M1.09761 0.5H0V11.5H1.09761V0.5Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    <a href="#" className="article-date d-flex align-items-center">
                                        <span className="icon-publish">
                                            <svg
                                                width={20}
                                                height={19}
                                                viewBox="0 0 20 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.347656 0.5V15.5H7.53711L10.0977 18.0605L12.6582 15.5H19.8477V0.5H0.347656ZM1.84766 2H18.3477V14H12.0371L10.0977 15.9395L8.1582 14H1.84766V2ZM4.84766 4.25V5.75H15.3477V4.25H4.84766ZM4.84766 7.25V8.75H15.3477V7.25H4.84766ZM4.84766 10.25V11.75H12.3477V10.25H4.84766Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">3 Comments</span>
                                    </a>
                                    <span className="article-separator mx-3 d-none d-sm-block">
                                        <svg
                                            width={2}
                                            height={12}
                                            viewBox="0 0 2 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M1.09761 0.5H0V11.5H1.09761V0.5Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    <Link
                                        to="/"
                                        className="article-date d-none d-sm-flex align-items-center"
                                    >
                                        <span className="icon-tag">
                                            <svg
                                                width={22}
                                                height={18}
                                                viewBox="0 0 22 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.09375 0.65625L6.8125 1.10156C6.8125 1.10156 5.86621 2.55762 4.65625 4.21875C3.44629 5.87988 1.91992 7.76074 1.02344 8.39062L0.648438 8.64844L0.695312 9.09375L1.44531 15.8438L1.51562 16.5H2.19531C3.30859 16.5 4.60645 16.5586 5.89844 16.6406L6.69531 16.6875V10.5H8.19531V16.8047L8.875 16.875C10.9961 17.0625 12.6016 17.25 12.6016 17.25H12.7188L20.9219 15.6094L20.9453 15.0234C20.9453 15.0234 21.0127 13.7725 21.1328 12.3047C21.2529 10.8369 21.4492 9.11133 21.6484 8.48438L21.8125 7.96875L21.4141 7.66406C18.8271 5.66016 16.3516 1.14844 16.3516 1.14844L16.1172 0.679688L15.5781 0.75C15.5781 0.75 10.7588 1.41504 7.58594 0.773438L7.09375 0.65625ZM15.2969 2.29688C15.6045 2.86816 17.1221 5.58105 19.3047 7.73438L13.6562 8.625C11.8076 6.84961 9.92383 4.04297 8.89844 2.41406C11.8018 2.71289 14.667 2.38184 15.2969 2.29688ZM7.39844 2.90625C8.38281 4.49121 10.4482 7.60254 12.625 9.67969C12.1328 11.6865 11.9834 14.3613 11.9453 15.6797C11.4443 15.627 10.8408 15.5537 9.69531 15.4453V9H5.19531V15.1172C4.39551 15.0732 3.61914 15.0352 2.875 15.0234L2.24219 9.25781C3.45215 8.27344 4.74707 6.65625 5.875 5.10938C6.60742 4.10156 7.06445 3.41309 7.39844 2.90625ZM20.0312 9.16406C19.8555 10.0576 19.7207 11.1123 19.6328 12.1641C19.5361 13.3506 19.5127 14.001 19.4922 14.3906L13.4688 15.6094C13.5068 14.2881 13.6445 11.7891 14.0312 10.1016L20.0312 9.16406Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </span>
                                        <span className="ms-2">Furniture</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="article-content">
                                <p>
                                    These cases are perfectly simple and easy to distinguish. In a
                                    free hour, when our power of choice hand, organizations have the
                                    need for integrating in IT departments new technologies.
                                </p>
                                <p>
                                    A wonderful serenity has taken possssion of my entire souing like
                                    these sweet mornng spring with my whole heart I am alone, and feel
                                    the charm of existenceths spot whch was create of souls like
                                    mineing am so happy my dear frend so absori bed in the exquste
                                    sens of mere.
                                </p>
                                <p>
                                    A wonderful serenity has taken posseson of my entire soung like
                                    these sweet mornngs spring enjoy with my whole heart I am alone
                                    and feel the charm of exstenceths spot whch was created ouls like
                                    mineing am so happy my dear frend so absoribed in the exquste
                                    sense of mere tranquil that neglect my talentsr I should bye
                                    ncapable of drawng and single stroke at the A wonderful se taken
                                    possesson of my entre souing like.
                                </p>
                                <figure className="blockquote">
                                    <blockquote>
                                        Words can be like X-rays, if you use them properly—they’ll go
                                        through anything. You read and you’re pierced.
                                    </blockquote>
                                    <figcaption>—Aldous Huxley</figcaption>
                                </figure>
                                <h6 className="heading_24 mb-3 mt-5">A Perfect product for you</h6>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page looking at its layout.The point of
                                    using Lorem Ipsum is that it has a more-or-less normal distribu
                                    letters, as opposed to using ‘Content here, content here’, making
                                    it look like readable English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as their.
                                </p>
                            </div>
                            <div className="share-area mt-5 d-flex align-items-center">
                                <strong className="label mb-1 d-block">Share:</strong>
                                <ul className="list-unstyled share-list d-flex align-items-center mb-1 flex-wrap">
                                    <li className="share-item">
                                        <svg
                                            width={9}
                                            height={16}
                                            viewBox="0 0 9 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.17383 9.3125L8.58398 6.61719H5.97656V4.85938C5.97656 4.09766 6.32812 3.39453 7.5 3.39453H8.70117V1.08008C8.70117 1.08008 7.61719 0.875 6.5918 0.875C4.45312 0.875 3.04688 2.19336 3.04688 4.53711V6.61719H0.644531V9.3125H3.04688V15.875H5.97656V9.3125H8.17383Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.1452 6.62529C17.1452 6.79391 17.1452 6.94848 17.1452 7.08899C17.1452 8.35363 16.9063 9.60422 16.4286 10.8407C15.9789 12.0492 15.3185 13.1593 14.4473 14.171C13.6042 15.1827 12.4941 16.0117 11.1171 16.6581C9.76815 17.2763 8.27869 17.5855 6.64871 17.5855C4.59719 17.5855 2.71429 17.0375 1 15.9415C1.28103 15.9696 1.57611 15.9836 1.88525 15.9836C3.59953 15.9836 5.13115 15.4637 6.48009 14.4239C5.66511 14.3958 4.93443 14.1429 4.28806 13.6651C3.66979 13.1874 3.24824 12.5831 3.02342 11.8525C3.24824 11.9087 3.47307 11.9368 3.69789 11.9368C4.03513 11.9368 4.35831 11.8806 4.66745 11.7681C3.82436 11.5995 3.12178 11.178 2.55972 10.5035C1.99766 9.82904 1.71663 9.05621 1.71663 8.18501C1.71663 8.15691 1.71663 8.14286 1.71663 8.14286C2.25059 8.42389 2.81265 8.57845 3.40281 8.60656C2.30679 7.84777 1.75878 6.82201 1.75878 5.52927C1.75878 4.8548 1.9274 4.23653 2.26464 3.67447C3.19204 4.79859 4.30211 5.69789 5.59485 6.37237C6.91569 7.04684 8.33489 7.42623 9.85246 7.51054C9.79625 7.22951 9.76815 6.94848 9.76815 6.66745C9.76815 5.65574 10.1194 4.79859 10.822 4.09602C11.5527 3.36534 12.4239 3 13.4356 3C14.5035 3 15.4028 3.37939 16.1335 4.13817C16.9766 3.96956 17.7635 3.67447 18.4941 3.25293C18.2131 4.12412 17.6651 4.79859 16.8501 5.27635C17.6089 5.19204 18.3255 5.00937 19 4.72834C18.4941 5.45902 17.8759 6.09133 17.1452 6.62529Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.99998 2.62165C12.4031 2.62165 12.6877 2.6308 13.6367 2.6741C14.5142 2.71415 14.9908 2.86077 15.3079 2.98398C15.728 3.14725 16.0278 3.34231 16.3428 3.65723C16.6577 3.97215 16.8528 4.272 17.016 4.69206C17.1392 5.00923 17.2859 5.48577 17.3259 6.36323C17.3692 7.31228 17.3783 7.5969 17.3783 10C17.3783 12.4031 17.3692 12.6878 17.3259 13.6368C17.2859 14.5143 17.1392 14.9908 17.016 15.308C16.8528 15.728 16.6577 16.0279 16.3428 16.3428C16.0278 16.6577 15.728 16.8528 15.3079 17.016C14.9908 17.1393 14.5142 17.2859 13.6367 17.3259C12.6879 17.3692 12.4032 17.3784 9.99998 17.3784C7.59672 17.3784 7.3121 17.3692 6.36323 17.3259C5.48574 17.2859 5.00919 17.1393 4.69206 17.016C4.27196 16.8528 3.97212 16.6577 3.6572 16.3428C3.34227 16.0279 3.14721 15.728 2.98398 15.308C2.86073 14.9908 2.71411 14.5143 2.67406 13.6368C2.63076 12.6878 2.62162 12.4031 2.62162 10C2.62162 7.5969 2.63076 7.31228 2.67406 6.36326C2.71411 5.48577 2.86073 5.00923 2.98398 4.69206C3.14721 4.272 3.34227 3.97215 3.6572 3.65723C3.97212 3.34231 4.27196 3.14725 4.69206 2.98398C5.00919 2.86077 5.48574 2.71415 6.36319 2.6741C7.31224 2.6308 7.59687 2.62165 9.99998 2.62165ZM9.99998 1C7.55571 1 7.24926 1.01036 6.28931 1.05416C5.33133 1.09789 4.67712 1.25001 4.10462 1.47251C3.51279 1.70251 3.01088 2.01025 2.51055 2.51058C2.01021 3.01092 1.70247 3.51283 1.47247 4.10466C1.24997 4.67716 1.09785 5.33137 1.05412 6.28935C1.01032 7.24926 1 7.55575 1 10C1 12.4443 1.01032 12.7508 1.05412 13.7107C1.09785 14.6687 1.24997 15.3229 1.47247 15.8954C1.70247 16.4872 2.01021 16.9891 2.51055 17.4895C3.01088 17.9898 3.51279 18.2975 4.10462 18.5275C4.67712 18.75 5.33133 18.9021 6.28931 18.9459C7.24926 18.9897 7.55571 19 9.99998 19C12.4443 19 12.7507 18.9897 13.7107 18.9459C14.6686 18.9021 15.3228 18.75 15.8953 18.5275C16.4872 18.2975 16.9891 17.9898 17.4894 17.4895C17.9898 16.9891 18.2975 16.4872 18.5275 15.8954C18.75 15.3229 18.9021 14.6687 18.9458 13.7107C18.9896 12.7508 19 12.4443 19 10C19 7.55575 18.9896 7.24926 18.9458 6.28935C18.9021 5.33137 18.75 4.67716 18.5275 4.10466C18.2975 3.51283 17.9898 3.01092 17.4894 2.51058C16.9891 2.01025 16.4872 1.70251 15.8953 1.47251C15.3228 1.25001 14.6686 1.09789 13.7107 1.05416C12.7507 1.01036 12.4443 1 9.99998 1ZM9.99998 5.37838C7.44753 5.37838 5.37835 7.44757 5.37835 10C5.37835 12.5525 7.44753 14.6217 9.99998 14.6217C12.5524 14.6217 14.6216 12.5525 14.6216 10C14.6216 7.44757 12.5524 5.37838 9.99998 5.37838ZM9.99998 13C8.34314 13 6.99996 11.6569 6.99996 10C6.99996 8.34317 8.34314 7 9.99998 7C11.6568 7 13 8.34317 13 10C13 11.6569 11.6568 13 9.99998 13ZM15.8842 5.19579C15.8842 5.79226 15.4007 6.27581 14.8042 6.27581C14.2077 6.27581 13.7242 5.79226 13.7242 5.19579C13.7242 4.59931 14.2077 4.1158 14.8042 4.1158C15.4007 4.1158 15.8842 4.59931 15.8842 5.19579Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.7892 6.69789C18.9297 7.6815 19 8.65105 19 9.60656V10.9555L18.7892 13.8642C18.6768 14.6792 18.4379 15.2693 18.0726 15.6347C17.6792 16.0281 17.089 16.281 16.3021 16.3934C15.5433 16.4496 14.63 16.4918 13.5621 16.5199C12.5222 16.548 11.6651 16.5621 10.9906 16.5621H9.97892C6.85948 16.534 4.82201 16.4778 3.86651 16.3934C3.86651 16.3934 3.7541 16.3794 3.52927 16.3513C3.30445 16.3232 3.12178 16.2951 2.98126 16.267C2.84075 16.2389 2.65808 16.1686 2.43326 16.0562C2.23653 15.9438 2.05386 15.8033 1.88525 15.6347C1.74473 15.466 1.60422 15.2412 1.4637 14.9602C1.35129 14.6511 1.28103 14.3841 1.25293 14.1593L1.16862 13.8642C1.05621 12.8806 1 11.911 1 10.9555V9.60656L1.16862 6.69789C1.28103 5.8829 1.51991 5.29274 1.88525 4.9274C2.27869 4.50585 2.8829 4.25293 3.69789 4.16862C4.45667 4.11241 5.35597 4.07026 6.39578 4.04215C7.4356 4.01405 8.29274 4 8.96721 4H9.97892C12.5082 4 14.6159 4.05621 16.3021 4.16862C17.089 4.25293 17.6792 4.50585 18.0726 4.9274C18.185 5.03981 18.2834 5.18033 18.3677 5.34895C18.452 5.48946 18.5222 5.64403 18.5785 5.81265C18.6347 5.95316 18.6768 6.09368 18.7049 6.23419C18.733 6.37471 18.7611 6.48712 18.7892 6.57143V6.69789ZM12.4239 10.4075L13.0141 10.1124L8.16628 7.58314V12.6417L12.4239 10.4075Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.5312 7.375C14.5312 3.36133 11.2793 0.109375 7.26562 0.109375C3.25195 0.109375 0 3.36133 0 7.375C0 10.4805 1.9043 13.0879 4.59961 14.1426C4.54102 13.5859 4.48242 12.707 4.62891 12.0625C4.77539 11.5059 5.47852 8.45898 5.47852 8.45898C5.47852 8.45898 5.27344 8.01953 5.27344 7.375C5.27344 6.37891 5.85938 5.61719 6.5918 5.61719C7.20703 5.61719 7.5 6.08594 7.5 6.64258C7.5 7.25781 7.08984 8.19531 6.88477 9.07422C6.73828 9.77734 7.26562 10.3633 7.96875 10.3633C9.25781 10.3633 10.2539 9.01562 10.2539 7.05273C10.2539 5.29492 8.99414 4.09375 7.23633 4.09375C5.15625 4.09375 3.95508 5.64648 3.95508 7.22852C3.95508 7.87305 4.18945 8.54688 4.48242 8.89844C4.54102 8.95703 4.54102 9.04492 4.54102 9.10352C4.48242 9.33789 4.33594 9.83594 4.33594 9.92383C4.30664 10.0703 4.21875 10.0996 4.07227 10.041C3.16406 9.60156 2.60742 8.2832 2.60742 7.19922C2.60742 4.91406 4.27734 2.80469 7.41211 2.80469C9.93164 2.80469 11.8945 4.62109 11.8945 7.02344C11.8945 9.51367 10.3125 11.5352 8.11523 11.5352C7.38281 11.5352 6.67969 11.1543 6.44531 10.6855C6.44531 10.6855 6.09375 12.0918 6.00586 12.4141C5.83008 13.0586 5.39062 13.8496 5.09766 14.3184C5.77148 14.5527 6.50391 14.6406 7.26562 14.6406C11.2793 14.6406 14.5312 11.3887 14.5312 7.375Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="next-prev-article mt-5 d-flex align-items-center justify-content-between">
                                <Link
                                    to="/"
                                    className="article-btn prev-article-btn mt-2"
                                >
                                    PREV ARTICLE
                                </Link>
                                <Link
                                    to="/"
                                    className="article-btn next-article-btn active mt-2"
                                >
                                    NEXT ARTICLE
                                </Link>
                            </div>
                            <div className="comments-section mt-100 home-section overflow-hidden">
                                <div className="section-header">
                                    <h2 className="section-heading">Comments - 03</h2>
                                </div>
                                <div className="comments-area">
                                    <div className="d-flex comments-item">
                                        <div className="comments-img">
                                            <img src="assets/img/people/1.jpg" alt="img" />
                                        </div>
                                        <div className="comments-main">
                                            <div className="comments-main-content">
                                                <div className="comments-meta">
                                                    <h4 className="commentator-name">Ralph Edwards</h4>
                                                    <div className="comments-date article-date d-flex align-items-center">
                                                        <span className="icon-publish">
                                                            <svg
                                                                width={17}
                                                                height={18}
                                                                viewBox="0 0 17 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                    fill="#00234D"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="ms-2">30 December, 2022</span>
                                                    </div>
                                                    <p className="comments">
                                                        The second Bag is a corner room with double windows. The
                                                        Bag has fabulous spa new appliances, and a laundry area.
                                                        Other features include rich herringbone floors.
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn-reply bg-transparent d-flex align-items-center"
                                                >
                                                    <span className="btn-reply-icon me-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.14062 2.64062L1.14062 6.64062L0.796875 7L1.14062 7.35938L5.14062 11.3594L5.85938 10.6406L2.21875 7L5.85938 3.35938L5.14062 2.64062ZM7.64062 2.64062L3.64062 6.64062L3.29688 7L3.64062 7.35938L7.64062 11.3594L8.35938 10.6406L5.21875 7.5H11.5C12.8867 7.5 14 8.61328 14 10C14 11.3867 12.8867 12.5 11.5 12.5V13.5C13.4277 13.5 15 11.9277 15 10C15 8.07227 13.4277 6.5 11.5 6.5H5.21875L8.35938 3.35938L7.64062 2.64062Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="btn-reply-text">Reply</span>
                                                </button>
                                            </div>
                                            <div className="comments-replied">
                                                <div className="d-flex comments-item">
                                                    <div className="comments-img">
                                                        <img src="assets/img/people/2.jpg" alt="img" />
                                                    </div>
                                                    <div className="comments-main">
                                                        <div className="comments-meta">
                                                            <h4 className="commentator-name">Marvin McKinney</h4>
                                                            <div className="comments-date article-date d-flex align-items-center">
                                                                <span className="icon-publish">
                                                                    <svg
                                                                        width={17}
                                                                        height={18}
                                                                        viewBox="0 0 17 18"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                            fill="#00234D"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                <span className="ms-2">30 December, 2022</span>
                                                            </div>
                                                            <p className="comments">
                                                                The second Bag is a corner room with double windows.
                                                                The Bag has fabulous spa new appliances, and a
                                                                laundry area. Other features include rich
                                                                herringbone floors.
                                                            </p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-reply bg-transparent d-flex align-items-center"
                                                        >
                                                            <span className="btn-reply-icon me-2">
                                                                <svg
                                                                    width={16}
                                                                    height={16}
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M5.14062 2.64062L1.14062 6.64062L0.796875 7L1.14062 7.35938L5.14062 11.3594L5.85938 10.6406L2.21875 7L5.85938 3.35938L5.14062 2.64062ZM7.64062 2.64062L3.64062 6.64062L3.29688 7L3.64062 7.35938L7.64062 11.3594L8.35938 10.6406L5.21875 7.5H11.5C12.8867 7.5 14 8.61328 14 10C14 11.3867 12.8867 12.5 11.5 12.5V13.5C13.4277 13.5 15 11.9277 15 10C15 8.07227 13.4277 6.5 11.5 6.5H5.21875L8.35938 3.35938L7.64062 2.64062Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="btn-reply-text">Reply</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex comments-item">
                                        <div className="comments-img">
                                            <img src="assets/img/people/3.jpg" alt="img" />
                                        </div>
                                        <div className="comments-main">
                                            <div className="comments-main-content">
                                                <div className="comments-meta">
                                                    <h4 className="commentator-name">Albert Flores</h4>
                                                    <div className="comments-date article-date d-flex align-items-center">
                                                        <span className="icon-publish">
                                                            <svg
                                                                width={17}
                                                                height={18}
                                                                viewBox="0 0 17 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                    fill="#00234D"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="ms-2">30 December, 2022</span>
                                                    </div>
                                                    <p className="comments">
                                                        The second Bag is a corner room with double windows. The
                                                        Bag has fabulous spa new appliances, and a laundry area.
                                                        Other features include rich herringbone floors.
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn-reply bg-transparent d-flex align-items-center"
                                                >
                                                    <span className="btn-reply-icon me-2">
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.14062 2.64062L1.14062 6.64062L0.796875 7L1.14062 7.35938L5.14062 11.3594L5.85938 10.6406L2.21875 7L5.85938 3.35938L5.14062 2.64062ZM7.64062 2.64062L3.64062 6.64062L3.29688 7L3.64062 7.35938L7.64062 11.3594L8.35938 10.6406L5.21875 7.5H11.5C12.8867 7.5 14 8.61328 14 10C14 11.3867 12.8867 12.5 11.5 12.5V13.5C13.4277 13.5 15 11.9277 15 10C15 8.07227 13.4277 6.5 11.5 6.5H5.21875L8.35938 3.35938L7.64062 2.64062Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="btn-reply-text">Reply</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form-area">
                                    <div className="form-header">
                                        <h4 className="form-title">Leave A Reply</h4>
                                        <p className="form-subtitle">
                                            All fields marked with an asterisk (*) are required
                                        </p>
                                    </div>
                                    <form action="#" className="comment-form">
                                        <div className="name-email-field d-flex justify-content-between">
                                            <div className="field-item name-field">
                                                <span className="field-icon">
                                                    <svg
                                                        width={16}
                                                        height={18}
                                                        viewBox="0 0 16 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M8 0.75C5.1084 0.75 2.75 3.1084 2.75 6C2.75 7.80762 3.67285 9.41309 5.07031 10.3594C2.39551 11.5078 0.5 14.1621 0.5 17.25H2C2 13.9277 4.67773 11.25 8 11.25C11.3223 11.25 14 13.9277 14 17.25H15.5C15.5 14.1621 13.6045 11.5078 10.9297 10.3594C12.3271 9.41309 13.25 7.80762 13.25 6C13.25 3.1084 10.8916 0.75 8 0.75ZM8 2.25C10.0801 2.25 11.75 3.91992 11.75 6C11.75 8.08008 10.0801 9.75 8 9.75C5.91992 9.75 4.25 8.08008 4.25 6C4.25 3.91992 5.91992 2.25 8 2.25Z"
                                                            fill="#00234D"
                                                        />
                                                    </svg>
                                                </span>
                                                <input type="text" placeholder="Name" required="" />
                                            </div>
                                            <div className="field-item email-field">
                                                <span className="field-icon">
                                                    <svg
                                                        width={19}
                                                        height={18}
                                                        viewBox="0 0 19 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.1399 2.96707e-05C4.61747 -0.0820016 0.184855 4.86331 1.1165 10.5235C1.74931 14.3643 4.90165 17.3848 8.75712 17.9063C11.3558 18.2578 13.7845 17.5078 15.6243 16.0313L14.6868 14.8594C13.1517 16.0899 11.1331 16.7256 8.94462 16.4297C5.75419 15.9991 3.13798 13.4649 2.6165 10.2891C1.83134 5.51077 5.49345 1.43265 10.1165 1.50003C14.0569 1.55862 17.3792 4.82523 17.4993 8.76565C17.5022 8.85062 17.4993 8.93265 17.4993 9.02347C17.4934 10.6758 16.1546 12 14.4993 12C13.6614 12 12.9993 11.3379 12.9993 10.5V4.50003H11.4993V5.08597C10.9602 4.71976 10.3186 4.50003 9.62431 4.50003C7.76982 4.50003 6.24931 6.02054 6.24931 7.87503V10.125C6.24931 11.9795 7.76982 13.5 9.62431 13.5C10.635 13.5 11.5345 13.0401 12.1556 12.3282C12.7063 13.0283 13.5472 13.5 14.4993 13.5C16.9632 13.5 18.9905 11.4903 18.9993 9.02347C18.9993 8.92386 19.0022 8.82718 18.9993 8.71878C18.8558 3.96683 14.8919 0.0703422 10.1399 2.96707e-05ZM9.62431 6.00003C10.6673 6.00003 11.4993 6.83206 11.4993 7.87503V10.125C11.4993 11.168 10.6673 12 9.62431 12C8.58134 12 7.74931 11.168 7.74931 10.125V7.87503C7.74931 6.83206 8.58134 6.00003 9.62431 6.00003Z"
                                                            fill="#00234D"
                                                        />
                                                    </svg>
                                                </span>
                                                <input type="email" placeholder="Email" required="" />
                                            </div>
                                        </div>
                                        <div className="field-item textarea-field">
                                            <span className="field-icon">
                                                <svg
                                                    width={20}
                                                    height={19}
                                                    viewBox="0 0 20 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M0.25 0.75V14.25H4V18.0586L8.76367 14.25H19.75V0.75H0.25ZM1.75 2.25H18.25V12.75H8.23633L5.5 14.9385V12.75H1.75V2.25ZM5.5 6C4.6709 6 4 6.6709 4 7.5C4 8.3291 4.6709 9 5.5 9C6.3291 9 7 8.3291 7 7.5C7 6.6709 6.3291 6 5.5 6ZM10 6C9.1709 6 8.5 6.6709 8.5 7.5C8.5 8.3291 9.1709 9 10 9C10.8291 9 11.5 8.3291 11.5 7.5C11.5 6.6709 10.8291 6 10 6ZM14.5 6C13.6709 6 13 6.6709 13 7.5C13 8.3291 13.6709 9 14.5 9C15.3291 9 16 8.3291 16 7.5C16 6.6709 15.3291 6 14.5 6Z"
                                                        fill="#00234D"
                                                    />
                                                </svg>
                                            </span>
                                            <textarea
                                                cols={20}
                                                rows={6}
                                                placeholder="Write your comment here........"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-checkbox d-flex align-items-center mt-4">
                                            <input className="form-check-input mt-0" type="checkbox" />
                                            <label className="form-check-label ms-2">
                                                Save my information in this browser for the next time.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="position-relative review-submit-btn mt-4"
                                        >
                                            SUBMIT
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="filter-drawer blog-sidebar">
                            <div className="filter-widget widget-blogger text-center">
                                <div className="blogger-img mb-3">
                                    <img
                                        className="rounded"
                                        src="assets/img/people/blogger.jpg"
                                        alt="img"
                                    />
                                </div>
                                <h4 className="blogger-name heading_18 mb-1">
                                    Shakespeare D. Willaim
                                </h4>
                                <p className="blogger-designation mb-1">Bloger / Photographer</p>
                                <div className="product-rating d-flex align-items-center mb-3 justify-content-center">
                                    <span className="star-rating">
                                        <svg
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                fill="#FFAE00"
                                            />
                                        </svg>
                                        <svg
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                fill="#FFAE00"
                                            />
                                        </svg>
                                        <svg
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                fill="#FFAE00"
                                            />
                                        </svg>
                                        <svg
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                fill="#FFAE00"
                                            />
                                        </svg>
                                        <svg
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                                                fill="#B2B2B2"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <p className="blogger-desc mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
                                    distinctio, odio eligendi suscipit reprehenderit atque
                                </p>
                                <ul className="list-unstyled share-list d-flex align-items-center justify-content-center mb-1 flex-wrap">
                                    <li className="share-item ms-0">
                                        <svg
                                            width={9}
                                            height={16}
                                            viewBox="0 0 9 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.17383 9.3125L8.58398 6.61719H5.97656V4.85938C5.97656 4.09766 6.32812 3.39453 7.5 3.39453H8.70117V1.08008C8.70117 1.08008 7.61719 0.875 6.5918 0.875C4.45312 0.875 3.04688 2.19336 3.04688 4.53711V6.61719H0.644531V9.3125H3.04688V15.875H5.97656V9.3125H8.17383Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.1452 6.62529C17.1452 6.79391 17.1452 6.94848 17.1452 7.08899C17.1452 8.35363 16.9063 9.60422 16.4286 10.8407C15.9789 12.0492 15.3185 13.1593 14.4473 14.171C13.6042 15.1827 12.4941 16.0117 11.1171 16.6581C9.76815 17.2763 8.27869 17.5855 6.64871 17.5855C4.59719 17.5855 2.71429 17.0375 1 15.9415C1.28103 15.9696 1.57611 15.9836 1.88525 15.9836C3.59953 15.9836 5.13115 15.4637 6.48009 14.4239C5.66511 14.3958 4.93443 14.1429 4.28806 13.6651C3.66979 13.1874 3.24824 12.5831 3.02342 11.8525C3.24824 11.9087 3.47307 11.9368 3.69789 11.9368C4.03513 11.9368 4.35831 11.8806 4.66745 11.7681C3.82436 11.5995 3.12178 11.178 2.55972 10.5035C1.99766 9.82904 1.71663 9.05621 1.71663 8.18501C1.71663 8.15691 1.71663 8.14286 1.71663 8.14286C2.25059 8.42389 2.81265 8.57845 3.40281 8.60656C2.30679 7.84777 1.75878 6.82201 1.75878 5.52927C1.75878 4.8548 1.9274 4.23653 2.26464 3.67447C3.19204 4.79859 4.30211 5.69789 5.59485 6.37237C6.91569 7.04684 8.33489 7.42623 9.85246 7.51054C9.79625 7.22951 9.76815 6.94848 9.76815 6.66745C9.76815 5.65574 10.1194 4.79859 10.822 4.09602C11.5527 3.36534 12.4239 3 13.4356 3C14.5035 3 15.4028 3.37939 16.1335 4.13817C16.9766 3.96956 17.7635 3.67447 18.4941 3.25293C18.2131 4.12412 17.6651 4.79859 16.8501 5.27635C17.6089 5.19204 18.3255 5.00937 19 4.72834C18.4941 5.45902 17.8759 6.09133 17.1452 6.62529Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.99998 2.62165C12.4031 2.62165 12.6877 2.6308 13.6367 2.6741C14.5142 2.71415 14.9908 2.86077 15.3079 2.98398C15.728 3.14725 16.0278 3.34231 16.3428 3.65723C16.6577 3.97215 16.8528 4.272 17.016 4.69206C17.1392 5.00923 17.2859 5.48577 17.3259 6.36323C17.3692 7.31228 17.3783 7.5969 17.3783 10C17.3783 12.4031 17.3692 12.6878 17.3259 13.6368C17.2859 14.5143 17.1392 14.9908 17.016 15.308C16.8528 15.728 16.6577 16.0279 16.3428 16.3428C16.0278 16.6577 15.728 16.8528 15.3079 17.016C14.9908 17.1393 14.5142 17.2859 13.6367 17.3259C12.6879 17.3692 12.4032 17.3784 9.99998 17.3784C7.59672 17.3784 7.3121 17.3692 6.36323 17.3259C5.48574 17.2859 5.00919 17.1393 4.69206 17.016C4.27196 16.8528 3.97212 16.6577 3.6572 16.3428C3.34227 16.0279 3.14721 15.728 2.98398 15.308C2.86073 14.9908 2.71411 14.5143 2.67406 13.6368C2.63076 12.6878 2.62162 12.4031 2.62162 10C2.62162 7.5969 2.63076 7.31228 2.67406 6.36326C2.71411 5.48577 2.86073 5.00923 2.98398 4.69206C3.14721 4.272 3.34227 3.97215 3.6572 3.65723C3.97212 3.34231 4.27196 3.14725 4.69206 2.98398C5.00919 2.86077 5.48574 2.71415 6.36319 2.6741C7.31224 2.6308 7.59687 2.62165 9.99998 2.62165ZM9.99998 1C7.55571 1 7.24926 1.01036 6.28931 1.05416C5.33133 1.09789 4.67712 1.25001 4.10462 1.47251C3.51279 1.70251 3.01088 2.01025 2.51055 2.51058C2.01021 3.01092 1.70247 3.51283 1.47247 4.10466C1.24997 4.67716 1.09785 5.33137 1.05412 6.28935C1.01032 7.24926 1 7.55575 1 10C1 12.4443 1.01032 12.7508 1.05412 13.7107C1.09785 14.6687 1.24997 15.3229 1.47247 15.8954C1.70247 16.4872 2.01021 16.9891 2.51055 17.4895C3.01088 17.9898 3.51279 18.2975 4.10462 18.5275C4.67712 18.75 5.33133 18.9021 6.28931 18.9459C7.24926 18.9897 7.55571 19 9.99998 19C12.4443 19 12.7507 18.9897 13.7107 18.9459C14.6686 18.9021 15.3228 18.75 15.8953 18.5275C16.4872 18.2975 16.9891 17.9898 17.4894 17.4895C17.9898 16.9891 18.2975 16.4872 18.5275 15.8954C18.75 15.3229 18.9021 14.6687 18.9458 13.7107C18.9896 12.7508 19 12.4443 19 10C19 7.55575 18.9896 7.24926 18.9458 6.28935C18.9021 5.33137 18.75 4.67716 18.5275 4.10466C18.2975 3.51283 17.9898 3.01092 17.4894 2.51058C16.9891 2.01025 16.4872 1.70251 15.8953 1.47251C15.3228 1.25001 14.6686 1.09789 13.7107 1.05416C12.7507 1.01036 12.4443 1 9.99998 1ZM9.99998 5.37838C7.44753 5.37838 5.37835 7.44757 5.37835 10C5.37835 12.5525 7.44753 14.6217 9.99998 14.6217C12.5524 14.6217 14.6216 12.5525 14.6216 10C14.6216 7.44757 12.5524 5.37838 9.99998 5.37838ZM9.99998 13C8.34314 13 6.99996 11.6569 6.99996 10C6.99996 8.34317 8.34314 7 9.99998 7C11.6568 7 13 8.34317 13 10C13 11.6569 11.6568 13 9.99998 13ZM15.8842 5.19579C15.8842 5.79226 15.4007 6.27581 14.8042 6.27581C14.2077 6.27581 13.7242 5.79226 13.7242 5.19579C13.7242 4.59931 14.2077 4.1158 14.8042 4.1158C15.4007 4.1158 15.8842 4.59931 15.8842 5.19579Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.7892 6.69789C18.9297 7.6815 19 8.65105 19 9.60656V10.9555L18.7892 13.8642C18.6768 14.6792 18.4379 15.2693 18.0726 15.6347C17.6792 16.0281 17.089 16.281 16.3021 16.3934C15.5433 16.4496 14.63 16.4918 13.5621 16.5199C12.5222 16.548 11.6651 16.5621 10.9906 16.5621H9.97892C6.85948 16.534 4.82201 16.4778 3.86651 16.3934C3.86651 16.3934 3.7541 16.3794 3.52927 16.3513C3.30445 16.3232 3.12178 16.2951 2.98126 16.267C2.84075 16.2389 2.65808 16.1686 2.43326 16.0562C2.23653 15.9438 2.05386 15.8033 1.88525 15.6347C1.74473 15.466 1.60422 15.2412 1.4637 14.9602C1.35129 14.6511 1.28103 14.3841 1.25293 14.1593L1.16862 13.8642C1.05621 12.8806 1 11.911 1 10.9555V9.60656L1.16862 6.69789C1.28103 5.8829 1.51991 5.29274 1.88525 4.9274C2.27869 4.50585 2.8829 4.25293 3.69789 4.16862C4.45667 4.11241 5.35597 4.07026 6.39578 4.04215C7.4356 4.01405 8.29274 4 8.96721 4H9.97892C12.5082 4 14.6159 4.05621 16.3021 4.16862C17.089 4.25293 17.6792 4.50585 18.0726 4.9274C18.185 5.03981 18.2834 5.18033 18.3677 5.34895C18.452 5.48946 18.5222 5.64403 18.5785 5.81265C18.6347 5.95316 18.6768 6.09368 18.7049 6.23419C18.733 6.37471 18.7611 6.48712 18.7892 6.57143V6.69789ZM12.4239 10.4075L13.0141 10.1124L8.16628 7.58314V12.6417L12.4239 10.4075Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li className="share-item">
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.5312 7.375C14.5312 3.36133 11.2793 0.109375 7.26562 0.109375C3.25195 0.109375 0 3.36133 0 7.375C0 10.4805 1.9043 13.0879 4.59961 14.1426C4.54102 13.5859 4.48242 12.707 4.62891 12.0625C4.77539 11.5059 5.47852 8.45898 5.47852 8.45898C5.47852 8.45898 5.27344 8.01953 5.27344 7.375C5.27344 6.37891 5.85938 5.61719 6.5918 5.61719C7.20703 5.61719 7.5 6.08594 7.5 6.64258C7.5 7.25781 7.08984 8.19531 6.88477 9.07422C6.73828 9.77734 7.26562 10.3633 7.96875 10.3633C9.25781 10.3633 10.2539 9.01562 10.2539 7.05273C10.2539 5.29492 8.99414 4.09375 7.23633 4.09375C5.15625 4.09375 3.95508 5.64648 3.95508 7.22852C3.95508 7.87305 4.18945 8.54688 4.48242 8.89844C4.54102 8.95703 4.54102 9.04492 4.54102 9.10352C4.48242 9.33789 4.33594 9.83594 4.33594 9.92383C4.30664 10.0703 4.21875 10.0996 4.07227 10.041C3.16406 9.60156 2.60742 8.2832 2.60742 7.19922C2.60742 4.91406 4.27734 2.80469 7.41211 2.80469C9.93164 2.80469 11.8945 4.62109 11.8945 7.02344C11.8945 9.51367 10.3125 11.5352 8.11523 11.5352C7.38281 11.5352 6.67969 11.1543 6.44531 10.6855C6.44531 10.6855 6.09375 12.0918 6.00586 12.4141C5.83008 13.0586 5.39062 13.8496 5.09766 14.3184C5.77148 14.5527 6.50391 14.6406 7.26562 14.6406C11.2793 14.6406 14.5312 11.3887 14.5312 7.375Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-widget">
                                <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom">
                                    Categories
                                </div>
                                <div className="accordion-collapse">
                                    <ul className="filter-lists list-unstyled mb-0">
                                        <li className="filter-item">
                                            <a
                                                className="filter-label"
                                                href="collection-left-sidebar.html"
                                            >
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                <span className="filter-text">Womens Bag</span>
                                            </a>
                                        </li>
                                        <li className="filter-item">
                                            <a
                                                className="filter-label"
                                                href="collection-left-sidebar.html"
                                            >
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Bottles
                                            </a>
                                        </li>
                                        <li className="filter-item">
                                            <a
                                                className="filter-label"
                                                href="collection-left-sidebar.html"
                                            >
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Men's Shoe
                                            </a>
                                        </li>
                                        <li className="filter-item">
                                            <a
                                                className="filter-label"
                                                href="collection-left-sidebar.html"
                                            >
                                                <input type="checkbox" />
                                                <span className="filter-checkbox rounded me-2" />
                                                Toddler Dress
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div className="filter-header faq-heading heading_18 d-flex align-items-center border-bottom">
                                    Latest Post
                                </div>
                                <div className="filter-related">
                                    <div className="related-item related-item-article d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/blog/furniture-1.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading text_14">
                                                <a to="/">Modern furniture in velvet</a>
                                            </h2>
                                            <p className="article-card-published text_12 d-flex align-items-center mt-2">
                                                <span className="article-date d-flex align-items-center">
                                                    <span className="icon-publish">
                                                        <svg
                                                            width={17}
                                                            height={18}
                                                            viewBox="0 0 17 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="ms-2">30 December, 2022</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-item related-item-article d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/blog/furniture-2.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading text_14">
                                                <a to="/">Ultimate luxury furniture</a>
                                            </h2>
                                            <p className="article-card-published text_12 d-flex align-items-center mt-2">
                                                <span className="article-date d-flex align-items-center">
                                                    <span className="icon-publish">
                                                        <svg
                                                            width={17}
                                                            height={18}
                                                            viewBox="0 0 17 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="ms-2">30 December, 2022</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-item related-item-article d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/blog/furniture-3.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading text_14">
                                                <a to="/">Small bedroom look bigger</a>
                                            </h2>
                                            <p className="article-card-published text_12 d-flex align-items-center mt-2">
                                                <span className="article-date d-flex align-items-center">
                                                    <span className="icon-publish">
                                                        <svg
                                                            width={17}
                                                            height={18}
                                                            viewBox="0 0 17 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="ms-2">30 December, 2022</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-item related-item-article d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/blog/furniture-4.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading text_14">
                                                <a to="/">Update your living room</a>
                                            </h2>
                                            <p className="article-card-published text_12 d-flex align-items-center mt-2">
                                                <span className="article-date d-flex align-items-center">
                                                    <span className="icon-publish">
                                                        <svg
                                                            width={17}
                                                            height={18}
                                                            viewBox="0 0 17 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="ms-2">30 December, 2022</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-item related-item-article d-flex">
                                        <div className="related-img-wrapper">
                                            <img
                                                className="related-img"
                                                src="assets/img/blog/furniture-5.jpg"
                                                alt="img"
                                            />
                                        </div>
                                        <div className="related-product-info">
                                            <h2 className="related-heading text_14">
                                                <a to="/">Choose the right fabric</a>
                                            </h2>
                                            <p className="article-card-published text_12 d-flex align-items-center mt-2">
                                                <span className="article-date d-flex align-items-center">
                                                    <span className="icon-publish">
                                                        <svg
                                                            width={17}
                                                            height={18}
                                                            viewBox="0 0 17 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3.46875 0.875V1.59375H0.59375V17.4063H16.4063V1.59375H13.5313V0.875H12.0938V1.59375H4.90625V0.875H3.46875ZM2.03125 3.03125H3.46875V3.75H4.90625V3.03125H12.0938V3.75H13.5313V3.03125H14.9688V4.46875H2.03125V3.03125ZM2.03125 5.90625H14.9688V15.9688H2.03125V5.90625ZM6.34375 7.34375V8.78125H7.78125V7.34375H6.34375ZM9.21875 7.34375V8.78125H10.6563V7.34375H9.21875ZM12.0938 7.34375V8.78125H13.5313V7.34375H12.0938ZM3.46875 10.2188V11.6563H4.90625V10.2188H3.46875ZM6.34375 10.2188V11.6563H7.78125V10.2188H6.34375ZM9.21875 10.2188V11.6563H10.6563V10.2188H9.21875ZM12.0938 10.2188V11.6563H13.5313V10.2188H12.0938ZM3.46875 13.0938V14.5313H4.90625V13.0938H3.46875ZM6.34375 13.0938V14.5313H7.78125V13.0938H6.34375ZM9.21875 13.0938V14.5313H10.6563V13.0938H9.21875Z"
                                                                fill="#00234D"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="ms-2">30 December, 2022</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom">
                                    Popular Tags
                                </div>
                                <ul className="filter-tags list-unstyled">
                                    <li className="tag-item">
                                        <a href="#">Popular</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">Agency</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="collection-left-sidebar.html">Furniture</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">creative</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">design</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">modern</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">UX</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">web</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">bag</a>
                                    </li>
                                    <li className="tag-item">
                                        <a href="#">shoe</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-widget">
                                <a href="collection-left-sidebar.html">
                                    <img
                                        className="rounded"
                                        src="assets/img/banner/collection.jpg"
                                        alt="img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogDetailsInner