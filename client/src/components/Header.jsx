import React from 'react'

const Header = () => {
    return (
        <>
            {/* header start */}
            <header className="sticky-header border-btm-black header-1">
                <div className="header-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-4">
                                <div className="header-logo">
                                    <a href="index.html" className="logo-main">
                                        <img src="assets/img/logo.png" loading="lazy" alt="bisum" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 d-lg-block d-none">
                                <nav className="site-navigation">
                                    <ul className="main-menu list-unstyled justify-content-center">
                                        <li className="menu-list-item nav-item has-dropdown active">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="index.html">
                                                    Home
                                                </a>
                                                <span className="open-submenu">
                                                    <svg
                                                        className="icon icon-dropdown"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="index.html"
                                                        >
                                                            Home 1
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="index-shoe.html"
                                                        >
                                                            Home 2
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="index-bag.html"
                                                        >
                                                            Home 3
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="index-tools.html"
                                                        >
                                                            Home 4
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item has-megamenu">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="collection-left-sidebar.html">
                                                    Shop
                                                </a>
                                                <span className="open-submenu">
                                                    <svg
                                                        className="icon icon-dropdown"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <div className="container">
                                                    <ul className="submenu megamenu-container list-unstyled">
                                                        <li className="menu-list-item nav-item-sub">
                                                            <div className="mega-menu-header">
                                                                <a
                                                                    className="nav-link-sub nav-text-sub megamenu-heading"
                                                                    href="collection-left-sidebar.html"
                                                                >
                                                                    CATEGORY PAGES
                                                                </a>
                                                            </div>
                                                            <div className="submenu-transform megamenu-transform">
                                                                <ul className="megamenu list-unstyled">
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="collection-left-sidebar.html"
                                                                        >
                                                                            With Left Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="collection-right-sidebar.html"
                                                                        >
                                                                            With Right Sidebar
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="collection-left-sidebar.html"
                                                                        >
                                                                            3 Column Layout
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="collection-without-sidebar.html"
                                                                        >
                                                                            4 Column Layout
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="collection-without-sidebar.html"
                                                                        >
                                                                            Without Sidebar
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-list-item nav-item-sub">
                                                            <div className="mega-menu-header d-flex align-items-center justify-content-between">
                                                                <a
                                                                    className="nav-link-sub nav-text-sub megamenu-heading"
                                                                    href="collection-right-sidebar.html"
                                                                >
                                                                    PRODUCT PAGES
                                                                </a>
                                                            </div>
                                                            <div className="submenu-transform megamenu-transform">
                                                                <ul className="megamenu list-unstyled">
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Simple Product
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Variable Product
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Sale Product
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Featured &amp; On Sale
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product-2.html"
                                                                        >
                                                                            Tab Inside
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-list-item nav-item-sub">
                                                            <div className="mega-menu-header d-flex align-items-center justify-content-between">
                                                                <a
                                                                    className="nav-link-sub nav-text-sub megamenu-heading"
                                                                    href="index.html"
                                                                >
                                                                    PRODUCT LAYOUTS
                                                                </a>
                                                            </div>
                                                            <div className="submenu-transform megamenu-transform">
                                                                <ul className="megamenu list-unstyled">
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product-2.html"
                                                                        >
                                                                            Grid Images
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Vertical Thumb
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Gallery Type
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Product Width Layout
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-list-item nav-item-sub">
                                                                        <a
                                                                            className="nav-link-sub nav-text-sub"
                                                                            href="product.html"
                                                                        >
                                                                            Sticky Gallery
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="menu-list-item nav-item-sub">
                                                            <div className="mega-menu-header d-flex align-items-center justify-content-between">
                                                                <a
                                                                    className="mega-menu-img nav-link-sub nav-text-sub"
                                                                    href="collection-left-sidebar.html"
                                                                >
                                                                    <img
                                                                        className="menu-img"
                                                                        src="assets/img/menu/1.jpg"
                                                                        alt="img"
                                                                    />
                                                                    <h2 className="img-menu-heading text_16 mt-2">
                                                                        Featured Collection
                                                                    </h2>
                                                                    <div className="img-menu-action text_12 bg-transparent p-0">
                                                                        <span>DISCOVER NOW</span>
                                                                        <span>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={30}
                                                                                height={18}
                                                                                fill="#000"
                                                                                className="icon-right-long"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="blog.html">
                                                    Blog
                                                </a>
                                                <span className="open-submenu">
                                                    <svg
                                                        className="icon icon-dropdown"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="blog.html"
                                                        >
                                                            Blog
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="article.html"
                                                        >
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item has-dropdown">
                                            <div className="mega-menu-header">
                                                <a className="nav-link" href="about-us.html">
                                                    Pages
                                                </a>
                                                <span className="open-submenu">
                                                    <svg
                                                        className="icon icon-dropdown"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="submenu-transform submenu-transform-desktop">
                                                <ul className="submenu list-unstyled">
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="about-us.html"
                                                        >
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="contact.html"
                                                        >
                                                            Contact
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="faq.html"
                                                        >
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="404.html"
                                                        >
                                                            404 page
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="login.html"
                                                        >
                                                            Login
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="register.html"
                                                        >
                                                            Register
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="wishlist.html"
                                                        >
                                                            Wishlist
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="cart.html"
                                                        >
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li className="menu-list-item nav-item-sub">
                                                        <a
                                                            className="nav-link-sub nav-text-sub"
                                                            href="checkout.html"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-list-item nav-item">
                                            <a className="nav-link" href="contact.html">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3 col-md-8 col-8">
                                <div className="header-action d-flex align-items-center justify-content-end">
                                    <a
                                        className="header-action-item header-search"
                                        href="javascript:void(0)"
                                    >
                                        <svg
                                            className="icon icon-search"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.75 0.250183C11.8838 0.250183 15.25 3.61639 15.25 7.75018C15.25 9.54608 14.6201 11.1926 13.5625 12.4846L19.5391 18.4611L18.4609 19.5392L12.4844 13.5627C11.1924 14.6203 9.5459 15.2502 7.75 15.2502C3.61621 15.2502 0.25 11.884 0.25 7.75018C0.25 3.61639 3.61621 0.250183 7.75 0.250183ZM7.75 1.75018C4.42773 1.75018 1.75 4.42792 1.75 7.75018C1.75 11.0724 4.42773 13.7502 7.75 13.7502C11.0723 13.7502 13.75 11.0724 13.75 7.75018C13.75 4.42792 11.0723 1.75018 7.75 1.75018Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="header-action-item header-wishlist ms-4 d-none d-lg-block"
                                        href="wishlist.html"
                                    >
                                        <svg
                                            className="icon icon-wishlist"
                                            width={26}
                                            height={22}
                                            viewBox="0 0 26 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="header-action-item header-cart ms-4"
                                        href="#drawer-cart"
                                        data-bs-toggle="offcanvas"
                                    >
                                        <svg
                                            className="icon icon-cart"
                                            width={24}
                                            height={26}
                                            viewBox="0 0 24 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className="header-action-item header-hamburger ms-4 d-lg-none"
                                        href="#drawer-menu"
                                        data-bs-toggle="offcanvas"
                                    >
                                        <svg
                                            className="icon icon-hamburger"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1={3} y1={12} x2={21} y2={12} />
                                            <line x1={3} y1={6} x2={21} y2={6} />
                                            <line x1={3} y1={18} x2={21} y2={18} />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-wrapper">
                        <div className="container">
                            <form action="#" className="search-form d-flex align-items-center">
                                <button
                                    type="submit"
                                    className="search-submit bg-transparent pl-0 text-start"
                                >
                                    <svg
                                        className="icon icon-search"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.75 0.250183C11.8838 0.250183 15.25 3.61639 15.25 7.75018C15.25 9.54608 14.6201 11.1926 13.5625 12.4846L19.5391 18.4611L18.4609 19.5392L12.4844 13.5627C11.1924 14.6203 9.5459 15.2502 7.75 15.2502C3.61621 15.2502 0.25 11.884 0.25 7.75018C0.25 3.61639 3.61621 0.250183 7.75 0.250183ZM7.75 1.75018C4.42773 1.75018 1.75 4.42792 1.75 7.75018C1.75 11.0724 4.42773 13.7502 7.75 13.7502C11.0723 13.7502 13.75 11.0724 13.75 7.75018C13.75 4.42792 11.0723 1.75018 7.75 1.75018Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                                <div className="search-input mr-4">
                                    <input
                                        type="text"
                                        placeholder="Search your products..."
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="search-close">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-close"
                                    >
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}
        </>

    )
}

export default Header