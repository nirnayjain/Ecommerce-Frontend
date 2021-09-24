import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
const BlogPost = () => {
    return (
        <>
        <Header />
        <Navigation />
           <div id="nt_content">
        {/*hero banner*/}
        <div className="kalles-section page_section_heading">
          <div className="page-head tc pr oh cat_bg_img page_head_">
            <div className="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0" data-bgset="assets/images/shop/collection-list/bg-heading.jpg" />
            <div className="container pr z_100">
              <h1 className="mb__5 cw">The Title of the blog will be displayed here</h1>
            </div>
          </div>
        </div>
        {/*end hero banner*/}
        {/*page content*/}
        <div className="container mt__40 mb__40 cb">
          <div className="kalles-term-exp mb__30">
            <h2 className="fs__22 mt-0">The Company Private Limited Policy</h2>
            <p className="mb-2 text-justify">The Company Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used.  Please read this Privacy Policy carefully.  Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.</p>
            <p className="mb-2 text-justify">Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.</p>
            <p className="mb-2 text-justify">We are not responsible for the content or privacy practices on any websites.</p>
            <p className="mb-2 text-justify">We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. When we amend this Privacy Policy, we will revise the “last updated” date located at the top of this Privacy Policy.</p>
            <p className="mb-2 text-justify">If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes.  The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.</p>
            <p className="mb-2 text-justify">If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at <a href="https://themes.the4.co/cdn-cgi/l/email-protection#c5a8a4b7aea0b1acaba285a6aaa8b5a4abbceba6aaa8"><span className="__cf_email__" data-cfemail="86ebe7f4ede3f2efe8e1c6e5e9ebf6e7e8ffa8e5e9eb">[email&nbsp;protected]</span></a></p>
          </div>
        </div>
        {/*end page content*/}
      </div>  

      <Footer />
        </>
    )
}

export default BlogPost
