import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Testimonial17 from '../components/testimonial17'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Skill-Horizon</title>
          <meta property="og:title" content="Respectful Frizzy Kangaroo" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">Link 4</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">CONNECT WALLET</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">Secondary Action</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text20">SKILL HORIZON</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text21">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text22">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text23">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text24">Page Four Description</span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text25">BROWS JOBS</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text26">POST JOBS</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text27">
                Bridging Talent with Opportunity: A Decentralized Job Platform
                Empowering Refugees and Displaced Individuals with Fair Work,
                Secure Payments, and a Verifiable Work History.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text28">
                <span>
                  &quot;Creating Opportunities for Refugees Through
                  Decentralized Jobs&quot;
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1683363807291-6f09cc77ca8e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY4fHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDE1NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image2Src="https://images.unsplash.com/photo-1682780052938-653bc981c4da?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY0fHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDE1NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image3Src="https://images.unsplash.com/photo-1683363815265-d5b60249e869?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDE1NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image4Src="https://images.unsplash.com/photo-1553775927-a071d5a6a39a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY2fHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDE1NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image5Src="https://images.unsplash.com/photo-1682780098303-67cfe43390b8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDE1NDh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image6Src="https://images.unsplash.com/photo-1626303529827-a6044f6d02ea?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgxfHxSZWZ1Z2Vlc3xlbnwwfHx8fDE3NDA2NDI1NTN8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Hero17>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text31">BROWS JOBS</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text32">
                Breaking Barriers: A Decentralized Job Board for the Displaced
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text33">
                <span>What are the problems faced by Refugees?</span>
                <br></br>
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1594841359067-31caf8216011?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fFJlZnVnZWVzfGVufDB8fHx8MTc0MDY0MTQ5M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Features24>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text36">
                🔍 Lack of job opportunities due to documentation barriers.
              </span>
            </Fragment>
          }
          feature1ImgSrc="https://images.unsplash.com/photo-1635694846652-0b343b19f24d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHdvcmslMjByZWZ1Z2VlfGVufDB8fHx8MTc0MDc0NTk5OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          feature1Title1={
            <Fragment>
              <span className="home-text37">
                Exploitation &amp; unfair work conditions due to lack of
                transparency.
              </span>
            </Fragment>
          }
        ></Features25>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text38">
                <span>
                  - A global, borderless job board where anyone can apply for
                  work.
                </span>
                <br></br>
                <span>
                  - Focus on remote jobs that don’t require local work permits.
                </span>
                <br></br>
                <span>
                  - No middlemen – Employers post jobs directly on-chain.
                </span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text44">
                <span>
                  - Refugees receive payments in crypto (USDC, USDT, etc.).
                </span>
                <br></br>
                <span>
                  - Payments are made directly to their wallets, no bank account
                  needed.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text49">
                <span>
                  - Escrow smart contracts – Funds are locked and released only
                  when work is completed.
                </span>
                <br></br>
                <span>
                  - Job terms stored on-chain, preventing employers from
                  changing conditions.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text54">
                <span>
                  - Wallet authentication (MetaMask, WalletConnect) – No
                  government ID required.
                </span>
                <br></br>
                <span>
                  - Refugees can build a blockchain-based identity (DID -
                  Decentralized ID).
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text59">The Solution We Came Up With</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text60">
                Lack of Job Opportunities → Decentralized Job Marketplace
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text61">
                No Access to Banking &amp; Payments → Crypto &amp; Web3 Payments
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text62">
                Exploitation &amp; Unfair Work Conditions → Blockchain
                Transparency &amp; Escrow
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text63">
                Documentation &amp; ID Barriers → Wallet-Based Login &amp;
                Decentralized Identity
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text64">Connect Wallet</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text65">Find or Post a Job 💼</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text66">Work &amp; Get Paid 💰</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text67">Build Your Reputation ⭐</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text68">
                Sign in using MetaMask, WalletConnect, or any crypto wallet.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text69">
                Browse available jobs or post a new job with details &amp;
                payment.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text70">
                Complete tasks &amp; payments are secured via escrow smart
                contracts.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text71">
                Earn on-chain reviews &amp; skill badges for future
                opportunities.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text72">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text73">Bucharest</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text74">Cluj - Napoca</span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text76">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          rootClassName="contact10root-class-name"
        ></Contact10>
        <Footer4
          termsLink={
            <Fragment>
              <span className="home-text77">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text78">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text79">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
