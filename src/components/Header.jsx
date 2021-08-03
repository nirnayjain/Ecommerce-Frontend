import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../API";
import Toplabel from "./Toplabel";

function Header() {
  let [configuration, setConfiguration] = useState([]);
  let [address, setAddress] = useState([]);
  let [featuredProd, setFeaturedProd] = useState([]);
  let [logo, setLogo] = useState("");
  let [facebookUrl, setfacebookUrl] = useState("");
  let [instagramUrl, setinstagramUrl] = useState("");
  let [twiiterUrl, settwiiterUrl] = useState("");
  let [linkedinUrl, setlinkedinUrl] = useState("");

  useEffect(() => {
    async function getFeatured() {
      const featuredProduct = await axios.get(`${API}/api/featured`);
      localStorage.setItem(
        "Featured",
        JSON.stringify(featuredProduct?.data.featured)
      );
    }
    async function getConfig() {
      const config = await axios.get(`${API}/api/config`);
      localStorage.setItem(
        "configuration",
        JSON.stringify(config?.data.result[0])
      );
      setLogo(config?.data.result[0].logo);
      setfacebookUrl(config?.data.result[0].socialMedia[0].facebook);
      setinstagramUrl(config?.data.result[0].socialMedia[0].instagram);
      settwiiterUrl(config?.data.result[0].socialMedia[0].twitter);
      setlinkedinUrl(config?.data.result[0].socialMedia[0].linkedin);
    }
    getConfig();
    getFeatured();
  }, []);

  return (
    <>
      <Toplabel />
      <div className="header__mid">
        <div className="container">
          <div className="row al_center css_h_se">
            <div className="col-lg-3 col-md-3 col-3">
              <a
                href="#"
                data-id="#nt_menu_canvas"
                className="push_side push-menu-btn dn_lg lh__1 flex al_center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                >
                  <rect width="30" height="1.5"></rect>
                  <rect y="7" width="20" height="1.5"></rect>
                  <rect y="14" width="30" height="1.5"></rect>
                </svg>
              </a>
              <div className="dn db_lg cus_txt_h">
                <div className="nt-social">
                  <a
                    href={facebookUrl}
                    className="facebook cb ttip_nt tooltip_top_right"
                  >
                    <span className="tt_txt">Follow on Facebook</span>
                    <i className="facl facl-facebook"></i>
                  </a>
                  <a
                    href={twiiterUrl}
                    className="twitter cb ttip_nt tooltip_top_right"
                  >
                    <span className="tt_txt">Follow on Twitter</span>
                    <i className="facl facl-twitter"></i>
                  </a>
                  <a
                    href={instagramUrl}
                    className="instagram cb ttip_nt tooltip_top_right"
                  >
                    <span className="tt_txt">Follow on Instagram</span>
                    <i className="facl facl-instagram"></i>
                  </a>
                  <a
                    href={linkedinUrl}
                    className="linkedin cb ttip_nt tooltip_top_right"
                  >
                    <span className="tt_txt">Follow on Linkedin</span>
                    <i className="facl facl-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="pinterest cb ttip_nt tooltip_top_right"
                  >
                    <span className="tt_txt">Follow on Pinterest</span>
                    <i className="facl facl-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6 tc">
              <div className="branding ts__05 lh__1">
                <a className="dib" href="index.html">
                  <img
                    className="w__100 logo_normal dn db_lg max-width__160px"
                    src={logo[0]?.Headerlogo}
                  />
                  <img
                    className="w__100 logo_sticky dn max-width__160px"
                    src="assets/images/home-cosmetics/kalles-green-01.png"
                  />
                  <img
                    className="w__100 logo_mobile dn_lg max-width__105px"
                    src="assets/images/home-cosmetics/kalles-green-02.png"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3 tr">
              <div className="nt_action in_flex al_center cart_des_1">
                <a
                  className="icon_search push_side cb chp"
                  data-id="#nt_search_canvas"
                  href="#"
                >
                  <i className="iccl iccl-search"></i>
                </a>
                <div className="my-account ts__05 pr dn db_md">
                  <a
                    className="cb chp db push_side"
                    href="#"
                    data-id="#nt_login_canvas"
                  >
                    <i className="iccl iccl-user"></i>
                  </a>
                </div>
                <a
                  className="icon_like cb chp pr dn db_md js_link_wis"
                  href="#"
                >
                  <i className="iccl iccl-heart pr">
                    <span className="op__0 ts_op pa tcount bgb br__50 cw tc">
                      5
                    </span>
                  </i>
                </a>
                <div className="icon_cart pr">
                  <a
                    className="push_side pr cb chp db"
                    href="#"
                    data-id="#nt_cart_canvas"
                  >
                    <i className="iccl iccl-cart pr">
                      <span className="op__0 ts_op pa tcount bgb br__50 cw tc">
                        3
                      </span>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
