import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial17-text23">Testimonials</span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <div className="testimonial17-container13">
                      <strong className="thq-body-large">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial17-text22">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </strong>
                    </div>
                  </div>
                  <span className="testimonial17-text12 thq-body-small">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text27">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <div className="testimonial17-container15">
                      <strong className="thq-body-large">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial17-text26">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </strong>
                    </div>
                  </div>
                  <span className="testimonial17-text14 thq-body-small">
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text24">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <div className="testimonial17-container17">
                      <strong className="thq-body-large">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial17-text19">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </strong>
                    </div>
                  </div>
                  <span className="testimonial17-text16 thq-body-small">
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text25">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <div className="testimonial17-container19">
                      <strong className="thq-body-large">
                        {props.author4Name ?? (
                          <Fragment>
                            <span className="testimonial17-text21">
                              Author Name
                            </span>
                          </Fragment>
                        )}
                      </strong>
                    </div>
                  </div>
                  <span className="testimonial17-text18 thq-body-small">
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text20">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text12 {
            text-align: left;
          }
          .testimonial17-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text14 {
            text-align: left;
          }
          .testimonial17-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text16 {
            text-align: left;
          }
          .testimonial17-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text18 {
            text-align: left;
          }
          .testimonial17-text19 {
            display: inline-block;
          }
          .testimonial17-text20 {
            display: inline-block;
          }
          .testimonial17-text21 {
            display: inline-block;
          }
          .testimonial17-text22 {
            display: inline-block;
          }
          .testimonial17-text23 {
            display: inline-block;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author3Name: undefined,
  review4: undefined,
  author4Name: undefined,
  author1Name: undefined,
  heading1: undefined,
  review2: undefined,
  review3: undefined,
  author2Name: undefined,
  review1: undefined,
}

Testimonial17.propTypes = {
  author3Name: PropTypes.element,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  author1Name: PropTypes.element,
  heading1: PropTypes.element,
  review2: PropTypes.element,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  review1: PropTypes.element,
}

export default Testimonial17
