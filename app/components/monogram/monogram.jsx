import React, { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="280" 
      height="110"
      viewBox="0 120 594 520" 
      ref={ref}
      {...props}
    >
      <defs>

      {/* SVG : icône */}
        
        <clipPath id={clipId}>
          <path d="M1984 2850 c19 -22 39 -52 43 -67 5 -16 8 -239 8 -498 0 -467 0 -470 -22 -512 -12 -22 -34 -51 -49 -62 l-27 -21 151 0 c122 0 151 3 155 14 4 9 -2 17 -15 21 -50 16 -88 218 -59 308 20 59 140 137 211 137 88 0 154 -61 288 -265 58 -88 130 -198 161 -245 82 -125 208 -248 301 -294 77 -37 185 -66 253 -66 115 0 273 57 368 133 49 39 154 175 144 186 -2 2 -26 -14 -52 -36 -144 -121 -288 -184 -419 -185 -100 -1 -166 19 -255 78 -107 71 -169 147 -325 404 -140 231 -196 299 -291 355 l-32 19 54 58 c115 124 156 209 157 323 0 80 -20 131 -69 176 -72 68 -139 79 -461 79 l-254 0 36 a-40z m469 -31 c82 -23 147 -114 147"/>
          <path d="M3303 2552 c-281 -100 -397 -447 -239 -717 83 -141 258 -228 425 -211 250 26 415 213 415 471 0 197 -95 354 -264 438 -59 29 -74 32 -175 35 -87 2 -121 -2 -162 -16z m235 -62 c157 -70 254 -294 217 -503 -34 -195 -144 -317 -285 -317 -146 0 -271 124 -320 316 -37 144 -24 271 40 376 85 140 213 187 348 128z"/>
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})}`} fill="white">
        <g transform="translate(0.000000,420.000000) scale(0.100000,-0.100000)">
          <g fill="white" stroke='black'>
            <path d="M1984 2850 c19 -22 39 -52 43 -67 5 -16 8 -239 8 -498 0 -467 0 -470 -22 -512 -12 -22 -34 -51 -49 -62 l-27 -21 151 0 c122 0 151 3 155 14 4 9 -2 17 -15 21 -50 16 -88 218 -59 308 20 59 140 137 211 137 88 0 154 -61 288 -265 58 -88 130 -198 161 -245 82 -125 208 -248 301 -294 77 -37 185 -66 253 -66 115 0 273 57 368 133 49 39 154 175 144 186 -2 2 -26 -14 -52 -36 -144 -121 -288 -184 -419 -185 -100 -1 -166 19 -255 78 -107 71 -169 147 -325 404 -140 231 -196 299 -291 355 l-32 19 54 58 c115 124 156 209 157 323 0 80 -20 131 -69 176 -72 68 -139 79 -461 79 l-254 0 36 -40z m469 -31 c82 -23 147 -114 147 -207 -1 -81 -58 -194 -146 -288 -47 -49 -188 -155 -232 -173 -63 -26 -63 -25 -60 316 l3 305 33 29 c31 28 37 29 125 29 50 0 109 -5 130 -11z"/>
            <path d="M3303 2552 c-281 -100 -397 -447 -239 -717 83 -141 258 -228 425 -211 250 26 415 213 415 471 0 197 -95 354 -264 438 -59 29 -74 32 -175 35 -87 2 -121 -2 -162 -16z m235 -62 c157 -70 254 -294 217 -503 -34 -195 -144 -317 -285 -317 -146 0 -271 124 -320 316 -37 144 -24 271 40 376 85 140 213 187 348 128z"/>
          </g>
        </g>
      </g>
     
    </svg>
  );
});
