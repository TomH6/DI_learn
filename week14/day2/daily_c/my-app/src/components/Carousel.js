import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay>
        <div class="small_pic">
            <img alt="" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
            <p className="legend">Hong Kong</p>
        </div>
        <div class="small_pic">
            <img alt="" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
            <p className="legend">Macao</p>
        </div>
        <div class="small_pic">
            <img alt="" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
            <p className="legend">Japan</p>
        </div>
        <div class="small_pic">
            <img alt="" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
            <p className="legend">Las Vegas</p>
        </div>
    </Carousel>
);
