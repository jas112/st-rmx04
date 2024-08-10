import React from 'react'
import './styles/FTR_Element.css'
import FTRParallaxFrames_Star from '../parallax_frames/FTRParallaxFrames_Star.jsx'
import FTRhelmetBG from '../../assets/images/ftrParallax_imgs/ST_tripp_figure_remix_studio_0824_ftr_helmet_crp.png'
import FTRhelmetBG_OGRMX from '../../assets/images/ftrParallax_imgs/ST_tripp_figure_remix_studio_0824_XTRA_ftr_ogHelmet_RMX_crpwb.png'
import FTRParallaxFrames_Starships from '../parallax_frames/FTRParallaxFrames_Starships.jsx'
import FTRParallaxFrames_Starships_2 from '../parallax_frames/FTRParallaxFrames_Starships_2.jsx'

const FTR_Element = ({parallaxRemix, currentPageLocation}) => {

  return (
    <div className='ftr-element-block ftr-element-block-bg'>
        <div className='ftr-element-bg ftr-block2' style={{backgroundImage: `url(${parallaxRemix ? FTRhelmetBG : FTRhelmetBG_OGRMX})`}}>
        <div className='ftr-element-bg-frm ftr-bg-frm0 near-particle-frm'>
                <div className='particles near-particles'>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                </div>
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm0 mid-particle-frm'>
                <div className='particles mid-particles'>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                </div>
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm0 far-particle-frm'>
                <div className='particles far-particles'>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                </div>
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm0'>
                <FTRParallaxFrames_Starships_2 parallaxRemix={parallaxRemix} />
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm1'>
                <FTRParallaxFrames_Starships parallaxRemix={parallaxRemix} />
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm2'>
                <FTRParallaxFrames_Star />
            </div>
        </div>
    </div>
  )
}

export default FTR_Element