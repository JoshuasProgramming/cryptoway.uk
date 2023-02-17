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
                    <h3></h3>
                    <p></p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src="" alt="" /></div>
                <div className="right">
                    <h3></h3>
                    <p></p>
                    <a>Learn more</a>
                </div>
            </div>

            <div className="need-help-children">
                <div className="left"><img src="" alt="" /></div>
                <div className="right">
                    <h3></h3>
                    <p></p>
                    <a>Learn more</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Need_help;