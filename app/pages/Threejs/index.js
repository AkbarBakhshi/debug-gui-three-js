import gsap from 'gsap'
// import LottieInteractivity from '@lottiefiles/lottie-interactivity';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class Threejs {
    constructor() {
    }
    create() {
    }

    animateIn() {

        // https://lottiefiles.com/26511-circular-progress
        // https://lottiefiles.com/92752-loader
        gsap.delayedCall(0.5, () => {
            LottieInteractivity.create({
                player: '#horizontalBar',
                container: ".threejs",
                mode: 'scroll',
                actions: [
                    {
                        visibility: [0.1, .9],
                        type: 'seek',
                        frames: [0, 105],
                    },
                ]
            });
            LottieInteractivity.create({
                player: '#circularProgress',
                container: ".threejs",
                mode: 'scroll',
                actions: [
                    {
                        visibility: [0.15, 0.85],
                        type: 'seek',
                        frames: [0, 900],
                    },
                ]
            });
        })
        // return new Promise(resolve => {
        //     gsap.timeline({ onComplete: resolve })
        //         .from('.threejs', { y: '-200%' })
        //         .from('.threejs__canvas__container', { x: '100%' })
        //     // .from('.threejs__canvas__container', { autoAlpha: 0 })
        // })
    }

    animateOut() {
        // return new Promise(resolve => {
        //     gsap.timeline({ onComplete: resolve })
        //         .to('.threejs', { y: '200%' })
        //         .to('.threejs__canvas__container', { x: '-100%' })
        // })
    }
}