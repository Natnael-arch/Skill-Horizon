import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo"></div>
            <div className="footer4-links"></div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">© 2024 Skill-Horizon</span>
              </div>
              <div className="footer4-footer-links">
                <span className="footer4-text2 thq-body-small">
                  {props.privacyLink ?? (
                    <Fragment>
                      <span className="footer4-text6">Privacy Policy</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.termsLink ?? (
                    <Fragment>
                      <span className="footer4-text5">Terms of Service</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.cookiesLink ?? (
                    <Fragment>
                      <span className="footer4-text7">Cookies Settings</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
          }
          .footer4-text5 {
            display: inline-block;
          }
          .footer4-text6 {
            display: inline-block;
          }
          .footer4-text7 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  termsLink: undefined,
  privacyLink: undefined,
  cookiesLink: undefined,
}

Footer4.propTypes = {
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
  cookiesLink: PropTypes.element,
}

export default Footer4
