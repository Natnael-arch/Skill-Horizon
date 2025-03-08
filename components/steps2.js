import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container1 thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container2 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">Discover the Power of Our dApp</h2>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2 className="thq-heading-2">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps2-text24">Connect Wallet</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text12 thq-body-small">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text25">
                        Sign in using MetaMask, WalletConnect, or any crypto
                        wallet.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text13 thq-heading-3">01</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps2-text30">
                        Find or Post a Job 💼
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text15 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text26">
                        Browse available jobs or post a new job with details
                        &amp; payment.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text16 thq-heading-3">02</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps2-text27">
                        Work &amp; Get Paid 💰
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text18 thq-body-small">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text28">
                        Complete tasks &amp; payments are secured via escrow
                        smart contracts.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text19 thq-heading-3">03</label>
              </div>
              <div className="steps2-container7 thq-card">
                <h2 className="thq-heading-2">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps2-text29">
                        Build Your Reputation ⭐
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps2-text21 thq-body-small">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text23">
                        Earn on-chain reviews &amp; skill badges for future
                        opportunities.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text22 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container2 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text12 {
            text-align: center;
          }
          .steps2-text13 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text15 {
            text-align: center;
          }
          .steps2-text16 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text18 {
            text-align: center;
          }
          .steps2-text19 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text21 {
            text-align: center;
          }
          .steps2-text22 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text23 {
            display: inline-block;
          }
          .steps2-text24 {
            display: inline-block;
          }
          .steps2-text25 {
            display: inline-block;
          }
          .steps2-text26 {
            display: inline-block;
          }
          .steps2-text27 {
            display: inline-block;
          }
          .steps2-text28 {
            display: inline-block;
          }
          .steps2-text29 {
            display: inline-block;
          }
          .steps2-text30 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-container7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step4Description: undefined,
  step1Title: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step3Title: undefined,
  step3Description: undefined,
  step4Title: undefined,
  step2Title: undefined,
}

Steps2.propTypes = {
  step4Description: PropTypes.element,
  step1Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step3Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
}

export default Steps2
