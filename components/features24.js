import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features24-container2 thq-section-max-width">
          <div className="features24-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features24-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features24-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features24-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features24-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal1"
            >
              <div className="features24-divider-container1">
                {activeTab === 0 && (
                  <div className="features24-container3"></div>
                )}
              </div>
              <div className="features24-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features24-text">Feature #1</span>
                    </Fragment>
                  )}
                </h2>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features24-tab-horizontal2"
            >
              <div className="features24-divider-container2">
                {activeTab === 1 && (
                  <div className="features24-container4"></div>
                )}
              </div>
              <div className="features24-content2"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features24-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features24-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features24-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content2 {
            gap: 16px;
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-text {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features24-container2 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features24.defaultProps = {
  feature1ImgAlt: 'feature 1',
  feature2ImgAlt: 'image',
  feature1Title: undefined,
  feature3ImgAlt: 'image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1Mnx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400',
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Features24
