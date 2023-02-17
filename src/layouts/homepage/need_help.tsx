import React from 'react'

//import icons
import supportTeam from './icons/icons8-people-100.png';
import security from './icons/icons8-password-100.png';
import faqs from './icons/icons8-questions-100.png';


function Need_help() {
  return (
    <section className="need-help">
        {/* (div.need-help-containers>(.left>img>)+.right>h3+p+a)*3 */}

        <div className="need-help-heading">
            <h1>Need Help?</h1>
        </div>

        <div className="need-help-parent">
            <div className="need-help-children">
                <div className="left"><img src={faqs} alt="" /></div>
                <div className="right">
                    <h3>FAQs</h3>
                    <p>Before reaching out to our support team, we recommend checking our frequently asked questions (FAQs) page. </p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src={supportTeam} alt="" /></div>
                <div className="right">
                    <h3>SUPPORT TEAMS</h3>
                    <p>You can contact us via email, phone, or live chat, and we'll do our best to help you as quickly as possible.</p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src={security} alt="" /></div>
                <div className="right">
                    <h3>SECURITY</h3>
                    <p>At CryptoWay, we take the security of our users' assets very seriously.</p>
                    <a>Learn more</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Need_help;