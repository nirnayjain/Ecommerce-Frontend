import React, { useEffect } from "react";
import axios from "axios";
import { API } from "../API";
import { useState } from "react";

function Navigation() {
  let [category, setCategory] = useState([]);
  useEffect(() => {
    async function getCategory() {
      let categories = await axios.get(`${API}/api/category`);
      localStorage.setItem("category", JSON.stringify(categories?.data));
      setCategory(categories?.data);
    }

    getCategory();
  }, []);

  return (
    <div id="ntheader" className="ntheader header_4 h_icon_iccl">
      <div className="ntheader_wrapper pr z_200">
        <div className="container">
          <div className="header__bot border_true dn db_lg">
            <nav className="nt_navigation tc hover_side_up nav_arrow_false">
              <ul id="nt_menu_id" className="nt_menu in_flex wrap al_center">
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    Makeup
                  </a>
                  <div className="cus sub-menu">
                    <div className="container megamenu-content-1000px">
                      <div
                        className="row lazy_menu lazyload"
                        data-jspackery='{ "itemSelector": ".sub-column-item","gutter": 0,"percentPosition": true,"originLeft": true }'
                      >
                        {category.map((item) => {
                          return (
                            <div className="type_mn_link menu-item sub-column-item col-3">
                              <a href="#">{item.category}</a>
                              <ul className="sub-column not_tt_mn">
                                {item.subCategory.map((subCate) => {
                                  return (
                                    <li className="menu-item">
                                      <a href="#">
                                        {subCate.category}
                                        {/* <span className="lbc_nav lb_menu_hot ml__5">
                                  Hot
                                </span> */}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    {" "}
                    Skin<span className="lbc_nav">New</span>
                  </a>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    Hair
                  </a>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    Health & Wellness
                  </a>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    Men
                  </a>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a className="lh__1 flex al_center pr" href="#">
                    Fragrance
                  </a>
                </li>
                <li className="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                  <a
                    className="lh__1 flex al_center pr kalles-lbl__nav-sale"
                    href="#"
                  >
                    Offers<span className="lbc_nav">Sale</span>
                  </a>
                  <div className="cus sub-menu">
                    <div className="container megamenu-content-1200px">
                      <div
                        className="row lazy_menu lazyload"
                        data-jspackery='{ "itemSelector": ".sub-column-item","gutter": 0,"percentPosition": true,"originLeft": true }'
                      >
                        <div className="type_mn_pr menu-item sub-column-item col-12">
                          <div
                            className="prs_nav js_carousel nt_slider products nt_products_holder row al_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8"
                            data-flickity='{"imagesLoaded": 0,"adaptiveHeight": 0, "contain": 1, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": 1,"prevNextButtons": 1,"percentPosition": 1,"pageDots": 0, "autoPlay" : 0, "pauseAutoPlayOnHover" : 1, "rightToLeft": false }'
                          >
                            <div className="col-lg-15 col-md-12 col-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <span className="tc nt_labels pa pe_none cw">
                                    <span className="nt_label hot">Hot</span>
                                  </span>
                                  <a className="db" href="#">
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-01.jpg"
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-02.jpg"
                                    ></div>
                                  </div>
                                  <div className="nt_add_w ts__03 pa">
                                    <a
                                      href="#"
                                      className="wishlistadd cb chp ttip_nt tooltip_right"
                                    >
                                      <span className="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i className="facl facl-heart-o"></i>
                                    </a>
                                  </div>
                                  <div className="hover_button op__0 tc pa flex column ts__03">
                                    <a
                                      className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                      href="#"
                                    >
                                      <span className="tt_txt">Quick view</span>
                                      <i className="iccl iccl-eye"></i>
                                      <span>Quick view</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span className="tt_txt">
                                        Add to cart
                                      </span>
                                      <i className="iccl iccl-cart"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a className="cd chp" href="#">
                                      Laneige White Dew Emulsion
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    <span className="money">Rs. 550.00</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-15 col-md-12 col-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <a className="db" href="#">
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-03.jpg"
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-04.jpg"
                                    ></div>
                                  </div>
                                  <div className="nt_add_w ts__03 pa">
                                    <a
                                      href="#"
                                      className="wishlistadd cb chp ttip_nt tooltip_right"
                                    >
                                      <span className="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i className="facl facl-heart-o"></i>
                                    </a>
                                  </div>
                                  <div className="hover_button op__0 tc pa flex column ts__03">
                                    <a
                                      className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                      href="#"
                                    >
                                      <span className="tt_txt">Quick view</span>
                                      <i className="iccl iccl-eye"></i>
                                      <span>Quick view</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span className="tt_txt">
                                        Add to cart
                                      </span>
                                      <i className="iccl iccl-cart"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a className="cd chp" href="#">
                                      Cover FX’s Power Play Foundation
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    <span className="money">Rs. 260.00</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-15 col-md-12 col-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <a className="db" href="#">
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-05.jpg"
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-06.jpg"
                                    ></div>
                                  </div>
                                  <div className="nt_add_w ts__03 pa">
                                    <a
                                      href="#"
                                      className="wishlistadd cb chp ttip_nt tooltip_right"
                                    >
                                      <span className="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i className="facl facl-heart-o"></i>
                                    </a>
                                  </div>
                                  <div className="hover_button op__0 tc pa flex column ts__03">
                                    <a
                                      className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                      href="#"
                                    >
                                      <span className="tt_txt">Quick view</span>
                                      <i className="iccl iccl-eye"></i>
                                      <span>Quick view</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span className="tt_txt">
                                        Add to cart
                                      </span>
                                      <i className="iccl iccl-cart"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a className="cd chp" href="#">
                                      Skin Fit Glow Cushion
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    <span className="money">Rs. 490.00</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-15 col-md-12 col-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <a className="db" href="#">
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-07.jpg"
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-08.jpg"
                                    ></div>
                                  </div>
                                  <div className="nt_add_w ts__03 pa">
                                    <a
                                      href="#"
                                      className="wishlistadd cb chp ttip_nt tooltip_right"
                                    >
                                      <span className="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i className="facl facl-heart-o"></i>
                                    </a>
                                  </div>
                                  <div className="hover_button op__0 tc pa flex column ts__03">
                                    <a
                                      className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                      href="#"
                                    >
                                      <span className="tt_txt">Quick view</span>
                                      <i className="iccl iccl-eye"></i>
                                      <span>Quick view</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span className="tt_txt">
                                        Add to cart
                                      </span>
                                      <i className="iccl iccl-cart"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a className="cd chp" href="#">
                                      Dr.Jart Sensitive Sun Protector
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    <span className="money">Rs. 350.00</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-15 col-md-12 col-12 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                              <div className="product-inner pr">
                                <div className="product-image pr oh lazyload">
                                  <a className="db" href="#">
                                    <div
                                      className="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-09.jpg"
                                    ></div>
                                  </a>
                                  <div className="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                                    <div
                                      className="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__100"
                                      data-bgset="assets/images/home-cosmetics/pr-10.jpg"
                                    ></div>
                                  </div>
                                  <div className="nt_add_w ts__03 pa">
                                    <a
                                      href="#"
                                      className="wishlistadd cb chp ttip_nt tooltip_right"
                                    >
                                      <span className="tt_txt">
                                        Add to Wishlist
                                      </span>
                                      <i className="facl facl-heart-o"></i>
                                    </a>
                                  </div>
                                  <div className="hover_button op__0 tc pa flex column ts__03">
                                    <a
                                      className="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                      href="#"
                                    >
                                      <span className="tt_txt">Quick view</span>
                                      <i className="iccl iccl-eye"></i>
                                      <span>Quick view</span>
                                    </a>
                                    <a
                                      href="#"
                                      className="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left"
                                    >
                                      <span className="tt_txt">
                                        Add to cart
                                      </span>
                                      <i className="iccl iccl-cart"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info mt__15">
                                  <h3 className="product-title pr fs__14 mg__0 fwm">
                                    <a className="cd chp" href="#">
                                      Chanel Eyes Makeup Blushes
                                    </a>
                                  </h3>
                                  <span className="price dib mb__5">
                                    <span className="money">Rs. 150.00</span>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
