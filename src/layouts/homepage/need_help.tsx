import React from 'react'

function Need_help() {
  return (
    <section className="need-help">
        {/* (div.need-help-containers>(.left>img>)+.right>h3+p+a)*3 */}

        <div className="need-help-heading">
            <h1>Need Help?</h1>
        </div>

        <div className="need-help-parent">
            <div className="need-help-children">
                <div className="left"><img src="" alt="" /></div>
                <div className="right">
                    <h3>FAQs</h3>
                    <p>Before reaching out to our support team, we recommend checking our frequently asked questions (FAQs) page. </p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src="" alt="" /></div>
                <div className="right">
                    <h3>SUPPORT TEAMS</h3>
                    <p>You can contact us via email, phone, or live chat, and we'll do our best to help you as quickly as possible.</p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src="" alt="" /></div>
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