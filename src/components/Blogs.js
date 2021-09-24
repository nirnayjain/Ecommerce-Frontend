import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Blogs = () => {
    return (
        <div>
        <Header />
        <Navigation />
        <div id="nt_content">
        {/*main content*/}
        <div className="container container_cat cat_default mt__60 mb__20">
          <div className="row nt_single_blog">
            <div className="col-lg-3 order-12 col-xs-12 sidebar">
              <div className="kalles-section type_instagram">
                <div className="cat_shop_wrap mb__60">
                  <div className="cat_fixcl-scroll">
                    <div className="cat_fixcl-scroll-content css_ntbar">
                      <div className="row wrap_filter">
                        <div className="col-12 col-md-12 widget widget_product_categories cat_count_true nt_filter_block">
                          <h5 className="widget-title">Blog Categories</h5>
                          <ul className="product-categories">
                            <li className="cat-item current-cat">
                              <a href="#">Life Style</a>
                            </li>
                            <li className="cat-item">
                              <a href="#">Skin</a>
                            </li>
                            <li className="cat-item">
                              <a href="#">Hair</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-12 widget widget_post_list">
                          <h5 className="widget-title">Recent Post</h5>
                          <div className="post_list_widget">
                            <div className="row mb__10 pb__10">
                              <div className="col-auto widget_img_ar">
                                <a className="db pr oh" href="product-detail-layout-01.html"><img src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201920%201281%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E" className="w__100 lz_op_ef lazyload" alt="Spring – Summer Trending 2020" data-srcset="assets/images/blog-page/blog-thumbnail-01.jpg" /></a>
                              </div>
                              <div className="col widget_if_ar">
                                <a className="article-title db" href="blog-post-with-instagram-shop.html">Spring – Summer Trending 2020</a>
                                <time dateTime="2020-04-06T02:22:00Z">August 6, 2021</time>
                              </div>
                            </div>
                            <div className="row mb__10 pb__10">
                              <div className="col-auto widget_img_ar">
                                <a className="db pr oh" href="product-detail-layout-01.html"><img src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201920%201281%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E" className="w__100 lz_op_ef lazyload" alt="The Easiest Way to Break Out on Top" data-srcset="assets/images/blog-page/blog-thumbnail-02.jpg" /></a>
                              </div>
                              <div className="col widget_if_ar">
                                <a className="article-title db" href="blog-post-with-instagram-shop.html">The Easiest Way to Break Out on Top</a>
                                <time dateTime="2020-04-06T02:22:00Z">August 01, 2021</time>
                              </div>
                            </div>
                            <div className="row mb__10 pb__10">
                              <div className="col-auto widget_img_ar">
                                <a className="db pr oh" href="product-detail-layout-01.html"><img src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201920%201280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E" className="w__100 lz_op_ef lazyload" alt="Style for couple in Weeding season" data-srcset="assets/images/blog-page/blog-thumbnail-03.jpg" /></a>
                              </div>
                              <div className="col widget_if_ar">
                                <a className="article-title db" href="blog-post-with-instagram-shop.html">Style for couple in Weeding season</a>
                                <time dateTime="2020-04-06T02:17:00Z">April 6, 2021</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 col-xs-12">
              <div className="kalles-section nt_section type_isotope">
                {/*articles*/}
                <div className="articles products art_des2 nt_products_holder row des_cnt_1 nt_cover ratio4_3 position_8 equal_nt">
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-01.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:22:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Spring – Summer Trending 2020</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-02.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:22:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">The Easiest Way to Break Out on Top</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-03.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:17:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Style for couple in Weeding season</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-04.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:14:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Cool Spring Street Style Looks</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-05.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:17:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Style for couple in Weeding season</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-06.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:14:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Cool Spring Street Style Looks</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-01.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:22:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">Spring – Summer Trending 2020</a>
                      </h4>
                    </div>
                  </article>
                  <article className="post_nt_loop post_1 col-lg-6 col-md-6 col-12 mb__40">
                    <a className="mb__20 db pr oh" href="blog-post.html">
                      <div className="lazyload nt_bg_lz pr_lazy_img" data-bgset="assets/images/blog-page/blog-slide-02.jpg" />
                    </a>
                    <div className="post-info mb__5">
                      <span className="post-author mr__5">By <span className="cd">admin</span></span><span className="post-time">on <span className="cd"><time dateTime="2020-04-06T02:22:00Z">April 6, 2020</time></span></span>
                      <h4 className="mg__0 fs__16 mt__15 ls__0">
                        <a className="cd chp open" href="blog-post.html">The Easiest Way to Break Out on Top</a>
                      </h4>
                    </div>
                  </article>
                </div>
                {/*end articles*/}
                {/*navigation*/}
                <div className="products-footer tc">
                  <nav className="nt-pagination w__100 tc paginate_ajax">
                    <ul className="pagination-page page-numbers">
                      <li><span className="page-numbers current">1</span></li>
                      <li><a className="page-numbers" href="#">2</a></li>
                      <li><a className="page-numbers" href="#">3</a></li>
                      <li><a href="#" className="next page-numbers">Next</a></li>
                    </ul>
                  </nav>
                </div>
                {/*end navigation*/}
              </div>
            </div>
          </div>
        </div>
        {/*end main content*/}
      </div>
      <Footer />
        </div>
    )
}

export default Blogs