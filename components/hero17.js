import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-padding thq-section-max-width">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    Medium length hero headline goes here
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <button className="thq-button-filled hero17-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text6">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero17-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero17-text7">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="hero17-strip3 thq-animated-group-horizontal-reverse"></div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero17-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container1 {
            width: 100%;
          }
          .hero17-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero17-row-container2 {
            width: 100%;
            display: none;
          }
          .hero17-strip3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .hero17-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button1 {
              width: 100%;
            }
            .hero17-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  heading1: undefined,
  image4Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  action1: undefined,
  image9Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image9Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  action2: undefined,
  image3Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image11Src:
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image10Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image8Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Hero Image',
}

Hero17.propTypes = {
  image6Src: PropTypes.string,
  heading1: PropTypes.element,
  image4Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image10Src: PropTypes.string,
  action1: PropTypes.element,
  image9Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image5Src: PropTypes.string,
  action2: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image11Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image7Src: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
  image11Alt: PropTypes.string,
}

export default Hero17
