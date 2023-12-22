import { component$ } from '@builder.io/qwik';

export interface LogoProps {
    classCustom?: string
}

export const Logo = component$<LogoProps>(({classCustom}) => {

    return (
        <svg
            class={classCustom}
            width="727"
            height="308"
            viewBox="0 0 727 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_556_221)">
                <path
                    d="M446.882 9.46324C457.296 21.1793 450.442 40.3641 452.059 53.2317C449.047 60.4658 443.025 68.7257 434.632 71.6991C433.529 74.2619 430.76 73.9736 429.05 76.0855C439.109 77.3326 445.449 68.9067 455.18 67.6714C458.35 63.818 463.829 56.6627 470.609 59.3076C473.935 59.8708 477.144 63.1174 479.068 65.5377C478.575 69.1582 477.817 72.4852 474.854 75.0044C478.165 89.7526 462.06 96.9146 451.294 102.825C446.498 103.731 442.944 107.736 437.465 107.352C429.064 109.048 420.484 108.471 412.004 106.256C395.45 105.188 384.302 90.6996 375.379 80.1971C374.674 77.2572 374.602 74.582 373.581 71.7544C364.166 81.1926 377.665 91.6969 371.7 101.512C375.393 104.115 371.923 108.079 370.518 110.974C367.897 113.75 363.389 115.26 359.122 116.572C354.84 115.577 350.103 116.565 347.453 112.166C345.428 103.844 343.613 96.9884 345.095 87.8318C343.128 85.4316 339.229 87.8251 336.718 86.1942C336.495 94.201 339.976 105.624 331.941 111.415C332.969 114.036 330.899 116.401 328.529 117.533C322.787 118.619 315.728 116.852 312.202 111.993C308.258 104.13 313.848 90.8739 303.383 87.2401C294.784 83.7538 305.124 69.6074 293.44 72.5255C289.835 73.734 286.009 76.0352 281.699 74.8821C281.404 75.3966 280.8 75.7268 280.516 76.2179C277.378 89.528 287.433 107.56 271.108 116.128C266.04 119.356 259.945 119.552 254.981 116.705C246.744 106.727 250.362 90.1515 249.886 78.6114C245.795 74.981 238.62 78.1756 233.745 76.3721C227.019 75.5575 220.283 74.4212 214.702 70.4638C211.162 66.1361 206.118 61.9089 208.973 56.1146C210.302 52.1573 211.92 46.9295 217.413 45.8283C228.151 41.4419 240.201 47.6251 250.755 44.2075C250.798 39.097 251.804 32.9037 257.505 30.7751C264.508 31.1354 274.425 17.936 280.02 30.0476C281.716 34.7056 277.546 39.1556 281.363 43.2303C287.6 38.8724 297.799 42.6537 302.964 36.4873C314.097 40.5066 304.687 25.14 315.662 25.6679C318.275 22.8336 318.707 18.9115 321.945 16.1375C327.308 13.149 332.043 18.1874 335.222 21.7391C336.455 28.214 337.315 36.5292 335.136 42.8146C342.588 46.9261 330.347 60.6468 344 59.0394C348.221 44.8025 331.803 28.938 345.998 16.6454C350.754 15.9347 349.942 10.7237 353.584 9.22692C357.459 7.43348 361.801 8.70902 365.45 9.90073C367.338 11.2634 367.711 13.1088 369.336 14.5168C371.974 28.0899 368.552 42.5498 371.467 55.3956C373.609 39.6099 383.693 26.3619 394.834 13.5848C400.974 9.27051 408.837 7.15862 415.389 3.06051C421.043 0.402193 428.234 -0.677266 435.006 0.432323C439.376 3.88512 442.195 6.37583 446.882 9.46324Z"
                    fill="black"
                />
                <path
                    d="M444.707 10.0499C445.207 13.615 447.461 17.874 448.812 21.7827C449.761 28.576 448.431 34.9888 448.021 41.591C438.488 52.0433 427.508 68.0485 408.826 64.5387C404.06 66.1042 406.644 71.7611 407.086 74.51C410.619 80.1568 418.205 79.6824 423.461 81.9418C437.193 83.1336 444.019 70.8544 457.341 70.913C461.806 67.8156 462.611 63.3772 467.1 62.0648C469.876 62.4938 472.367 64.7097 474.531 65.6919C473.525 78.9181 455.659 82.2503 446.287 91.0851C437.246 92.5282 427.371 97.7275 418.147 93.3512C404.288 96.0447 400.704 83.7889 392.069 77.1985C390.013 71.8164 390.65 65.4891 389.284 59.9227C381.889 50.2549 392.789 41.4687 394.632 32.0741C404.472 20.4334 412.212 -0.678973 433.655 3.24314C437.539 4.7969 440.44 9.91912 444.707 10.0499Z"
                    fill="white"
                />
                <path
                    d="M365.641 15.4638C369.041 31.3182 360.896 49.2057 371.672 61.9458C373.947 66.002 368.918 69.1448 367.916 72.5322C363.932 81.1977 369.944 88.9598 369.411 97.8013C367.434 101.418 363.425 100.993 359.224 100.642C355.119 98.7048 358.005 92.6422 356.043 89.414C352.782 84.3136 359.361 72.7702 348.124 73.1708C345.174 75.6984 340.223 74.1882 336.293 74.9424C326.638 84.3706 339.035 96.3364 330.215 106.219C326.933 107.174 324.417 104.818 322.784 102.608C323.092 94.0971 320.975 86.4825 319.149 78.7791C316.644 75.9079 308.102 75.2994 312.118 69.1313C313.132 63.4409 321.982 63.5733 322.003 57.5745C324.289 45.6456 322.071 33.8726 322.219 22.1046C323.915 19.5384 326.331 18.9199 329.355 19.1093C329.582 26.0434 335.678 32.9306 330.757 39.6753C334.672 45.6473 331.236 51.9914 333.583 58.4729C336.837 63.6086 344.879 62.2408 350.372 61.2955C352.17 60.1591 354.045 59.7434 355.452 57.8092C351.67 45.5551 354.989 28.4436 353.205 14.4598C356.094 10.1807 363.708 10.8193 365.641 15.4638Z"
                    fill="white"
                />
                <path
                    d="M435.181 21.6318C441.284 31.3349 429.451 38.3109 426.464 47.025C419.436 46.8775 413.052 55.6738 406.102 48.966C404.021 41.9011 411.691 35.6056 412.637 28.1067C416.412 22.3124 428.366 10.8611 435.181 21.6318Z"
                    fill="black"
                />
                <path
                    d="M276.032 39.2645C273.732 40.954 277.7 42.5179 275.679 43.9845C284.961 50.8633 295.34 41.7184 305.29 40.6088C308.683 42.8548 308.022 47.8379 307.216 50.8549C300.231 58.508 289.677 62.5156 278.472 63.0687C273.148 65.5108 273.983 71.151 275.32 75.053C277.451 84.3135 275.439 96.1519 275.499 105.258C274.427 108.892 270.49 109.013 267.845 110.984C262.675 108.745 261.449 102.747 263.117 97.9487C263.58 86.9719 263.387 79.8098 262.057 68.8983C255.633 60.6065 242.466 66.8165 233.813 62.6614C228.108 64.1767 223.679 60.7657 220.53 57.6297C218.642 55.1876 221.328 52.9584 221.86 50.4241C224.502 48.4044 228.689 47.4423 232.087 48.7128C242.048 46.9814 256.309 54.249 262.263 43.852C263.342 39.7657 259.165 32.721 266.385 31.9164C269.129 30.9761 272.281 27.1177 275.05 29.3888C274.306 33.3126 276.841 34.8362 276.032 39.2645Z"
                    fill="white"
                />
                <path
                    d="M425.673 42.2983C419.501 40.5636 414.407 52.6098 411.107 44.6919C416.294 43.765 415.082 36.8879 420.22 35.9224C422.44 37.4628 428.829 38.3343 425.673 42.2983Z"
                    fill="white"
                />
                <path
                    d="M167.74 83.2962C175.803 85.2539 182.758 93.5624 184.269 101.085C184.225 108.044 187.016 117.581 180.253 123.008C179.348 126.622 182.648 131.716 177.587 133.796C169.829 136.287 156.819 138.945 149.892 132.512C144.597 128.538 148.181 120.184 142.615 117.09C126.805 116.513 110.082 116.17 96.3999 123.853C89.4231 124.351 84.7462 128.917 77.5133 128.23C62.4948 133.238 45.4624 142.865 44.2818 158.576C39.0014 165.29 52.0796 164.301 49.8937 171.599C62.0983 180.749 72.9293 193.643 88.3004 198.018C88.325 198.578 88.3583 198.901 88.3442 199.413C107.991 205.953 124.116 221.376 144.083 227.821C152.985 232.152 161.202 238.602 169.366 244.808C175.308 228.146 173.629 213.636 174.132 195.16C171.066 187.373 171.961 177.633 175.976 170.746C179.166 168.163 182.483 166.366 186.118 165.076C188.925 168.87 190.165 162.198 193.235 162.984C199.638 162.253 206.08 164.653 208.715 170.189C210.016 178.976 216.979 187.163 212.734 196.399C214.107 207.126 215.746 218.872 210.332 228.912C210.955 229.502 211.616 230.533 212.536 230.287C218.572 212.183 217.77 191.785 227.187 175.017C230.021 171.648 233.636 169.655 237.85 169.164C244.665 172.784 245.583 165.578 250.112 163.123C257.612 161.08 263.105 163.404 269.28 166.23C275.869 170.126 273.697 177.933 278.4 181.899C279.702 176.036 283.423 171.004 288.823 168.287C290.642 167.714 292.149 168.74 292.503 169.564C296.482 169.729 300.353 158.1 306.339 164.972C312.102 165.119 317.177 169.608 319.726 173.909C321.93 183.721 317.156 194.087 322.347 202.714C326.438 198.397 338.387 200.279 336.529 193.172C334.764 178.942 335.038 161.827 351.193 154.474C361.057 149.944 372.351 144.617 383.726 147.331C396.329 152.116 403.472 163.446 408.746 173.418C410.774 162.88 419.587 155.766 429.729 151.786C434.883 151.177 439.488 149.835 443.5 146.771C454.029 143.402 464.113 135.278 475.995 138.266C482.58 142.103 484.938 149.196 486.092 155.773C485.006 157.94 481.724 160.039 484.242 162.395C487.391 164.284 486.568 168.386 485.759 170.835C478.623 175.798 468.237 173.706 459.887 176.413C457.215 178.112 448.915 175.987 449.077 181.451C452.506 183.536 453.624 187.331 455.224 190.625C459.932 194.763 464.413 199.372 468.813 203.893C477.102 192.614 480.414 174.64 499.253 173.785C502.902 174.946 510.468 173.098 513.065 177.377C520.776 180.955 530.521 181.567 536.258 188.436C540.003 192.111 539.328 197.753 541.628 202.067C543.266 197.242 548.098 189.994 555.162 189.198C562.132 189.284 570.907 181.803 575.519 190.462C579.796 190.675 583.201 192.928 586.662 194.688C588.88 192.215 588.108 188.09 587.145 185.459C583.324 179.991 574.652 176.192 577.694 168.731C582.655 162.481 586.99 156.769 590.111 149.878C592.483 148.154 594.493 146.134 597.858 146.834C607.773 152.02 612.091 163.135 617.95 172.015C620.39 165.392 624.765 159.365 628.13 153.014C641.208 136.61 661.807 125.496 686.183 129.319C692.96 131.06 698.617 136.603 703.25 140.609C702.764 149.934 706.856 161.946 698.595 167.188C703.2 170.31 697.896 172.387 699.866 176.441C694.779 179.941 691.67 187.722 684.046 185.008C679.413 182.861 673.847 181.113 673.333 175.964C673.296 173.783 673.764 170.434 670.424 170.801C665.417 173.734 659.298 173.676 655.181 177.977C655.73 184.242 663.874 189.808 669.801 193.883C674.626 199.867 686.676 198.551 685.511 207.993C692.076 212.203 689.63 219.073 688.286 224.918C685.692 228.61 683.153 232.821 684.483 236.884C679.468 257.378 658.492 264.085 639.875 270.864C629.579 272.478 618.697 272.32 611.189 265.728C608.589 262.156 606.621 258.058 606.423 253.469C609.536 249.227 613.717 244.679 619.846 245.655C620.141 238.974 628.439 240.139 632.903 238.07C637.368 235.746 644.029 234.673 645.615 229.143C647.15 214.162 623.762 214.162 620.455 199.416C619.876 199.956 619.625 200.274 619.002 200.79C620.339 211.757 621.72 225.523 614.559 233.481C605.842 238.63 603.947 250.216 592.336 249.26C585.785 244.827 582.796 238.077 577.942 231.897C572.956 236.393 570.174 242.792 563.027 246.387C562.351 251.893 555.69 253.249 550.847 254.552C546.864 253.809 543.487 251.471 542.73 247.579C540.224 237.546 548.766 230.684 545.401 221.147C542.451 223.503 542.928 228.119 539.974 231.2C532.618 236.984 530.209 245.536 521.589 251.629C517.968 252.006 517.152 253.978 513.845 255.207C503.007 257.453 491.806 258.951 483.936 250.083C476.423 245.206 475.542 238.092 470.776 231.574C474.028 245.467 456.461 247.72 448.23 254.071C434.458 260.566 418.28 258.117 404.976 252.721C399.164 249.414 400.694 242.19 400.187 237.231C401.818 231.131 407.67 226.837 414.279 225.491C413.707 224.41 414.889 223.554 415.705 222.726C419.875 220.895 424.812 219.94 429.232 218.374C430.357 216.459 429.664 212.917 427.729 210.42C419.752 208.757 415.603 202.351 411.768 197.244C409.572 205.044 412.146 214.87 403.744 219.724C399.225 218.817 396.597 222.203 392.968 223.443C384.538 224.326 376.525 228.059 367.678 227.04C364.892 236.773 367.671 251.22 354.1 254.384C347.791 255.759 341.563 253.667 338.757 249.745C329.91 241.753 343.818 223.601 325.196 222.387C320.642 229.125 323.989 238.104 320.238 245.05C317.463 249.56 321.396 256.305 315.133 259.771C316.726 263.306 311.793 261.905 310.655 263.847C303.443 265.063 297.919 262.845 293.177 258.636C282.777 247.388 292.08 230.905 291.686 218.292C286.139 226.199 284.614 239.411 271.188 240.072C267.471 236.919 260.45 236.317 259.34 231.167C253.679 235.223 257.342 244.146 250.442 247.43C249.846 252.664 246.3 257.17 241.311 260.324C234.027 262.2 230.296 257.659 224.437 257.587C219.76 253.947 216.888 247.949 213.055 243.457C208.913 247.716 209.773 254.781 202.662 256.984C204.917 261.819 199.477 263.925 196.631 267.522C190.714 271.073 184.458 267.679 178.992 266.31C169.459 255.244 173.55 275.212 165.342 277.149C165.061 292.797 147.306 298.887 134.473 303.954C124.598 307.958 113.738 309.381 103.314 306.429C76.1221 301.806 49.7429 309.054 24.925 298.292C19.7709 297.107 13.9326 294.592 11.5888 289.663C10.1802 284.814 7.46979 279.08 9.41705 273.726C12.58 269.032 17.8534 263.883 25.8091 264.191C30.7632 259.091 39.4978 256.347 47.3921 257.892C58.781 262.257 72.0066 265.428 84.5638 261.379C96.4456 261.595 109.871 262.485 120.411 261.561C121.028 261.028 121.914 260.17 122.511 259.617C109.454 251.484 94.7053 247.891 81.0306 241.17C71.6329 232.112 57.2372 227.685 47.4553 218.284C24.7109 203.968 -6.93819 186.133 1.35082 155.351C5.17868 145.046 8.39605 133.375 19.0727 126.396C23.0023 117.967 31.6544 115.59 37.4927 108.698C65.8665 93.544 91.923 77.522 125.825 73.3619C140.405 74.5553 156.456 73.2127 167.74 83.2962Z"
                    fill="black"
                />
                <path
                    d="M155.214 80.9329C164.321 87.2284 181.1 89.9588 180.72 103.969C180.609 109.266 183.297 117.097 176.378 119.281C162.875 121.932 175.967 105.758 161.926 105.126C135.906 92.5065 103.859 103.752 78.9254 111.82C71.7293 121.026 56.0197 115.84 50.4322 128.121C39.2416 130.041 37.7715 141.173 36.0313 149.458C38.1487 156.479 38.1698 165.624 45.615 168.998C48.4008 178.815 61.0755 184.106 67.3559 192.103C72.9345 194.656 78.9272 199.471 85.3812 201.436C110.88 216.276 139.843 227.415 164.205 244.973C163.975 248.074 168.184 247.316 168.933 250.103C171.547 262.383 167.315 272.676 156.998 280.641C148.076 285.669 137.955 282.687 130.296 289.619C122.19 292.313 111.766 287.957 103.338 291.927C91.4756 291.951 81.6656 287.895 69.8154 288.252C57.2652 285.93 42.9941 284.724 31.5017 278.274C27.6809 275.364 29.0545 269.231 29.4159 265.146C33.27 261.471 41.4661 261.204 47.5482 262.096C56.4319 264.81 65.3788 266.987 75.4449 266.362C92.2984 262.25 109.513 269.927 124.723 262.783C130.245 262.6 136.399 265.153 140.864 262.832C145.455 264.054 147.781 260.376 151.646 260.551C155.572 257.69 150.837 255.045 149.302 252.664C137.04 250.848 136.473 235.144 122.665 238.379C106.075 227.154 87.2916 221.442 70.6048 211.843C65.6121 208.442 63.7894 201.079 55.5934 202.453C48.5078 199.087 45.201 191.228 37.5575 189.031C34.9226 184.106 25.7196 183.649 26.1617 177.531C20.7988 173.086 21.4602 166.194 16.7219 161.36C11.7292 149.957 20.8444 141.501 21.3514 130.963C26.2336 123.679 35.5682 121.119 38.8294 112.553C68.8435 94.3016 100.1 76.4175 139.036 77.6025C144.024 79.9155 149.753 79.7362 155.214 80.9329Z"
                    fill="white"
                />
                <path
                    d="M690.097 135.34C705.313 138.315 697.045 152.081 699.842 160.508C697.559 164.447 692.051 163.84 688.381 163.091C685.376 157.726 690.379 152.062 683.262 148.779C673.294 149.836 663.705 152.924 657.602 160.862C651.095 165.766 654.107 173.835 649.488 179.539C656.344 190.822 668.656 196.139 679.574 204.069C681.387 210.897 689.486 216.685 684.662 224.509C677.84 237.945 664.084 244.364 651.653 252.034C641.898 251.163 632.874 260.621 624.62 252.931C618.415 239.889 636.187 243.987 641.35 237.77C650.722 235.291 660.914 232.155 665.817 223.743C667.28 217.422 661.456 213.752 656.432 210.874C647.253 208.971 646.232 198.581 636.128 196.954C632.551 187.986 629.732 177.946 634.556 168.693C638.266 154.062 653.299 142.238 667.633 136.592C670.563 131.806 676.915 132.971 682.137 133.56C684.097 136.062 687.886 133.67 690.097 135.34Z"
                    fill="white"
                />
                <path
                    d="M479.056 146.938C481.903 148.988 480.238 152.976 480.979 155.971C471.46 162.012 456.159 158.364 449.222 168.299C440.777 169.661 448.019 177.063 443.959 181.629C449.768 192.363 460.416 199.464 466.841 209.982C469.263 216.549 467.406 223.217 466.093 230.35C456.261 241.956 438.039 242.807 422.836 241.733C417.203 238.357 417.857 231.391 418.563 225.93C427.176 219.531 441.063 224.051 448.849 216.417C446.807 209.194 441.353 201.184 433.046 198.491C426.303 187.72 419.07 173.919 428.623 162.333C439.163 153.998 449.966 147.389 462.222 141.942C468.574 142.036 476.68 140.388 479.056 146.938Z"
                    fill="white"
                />
                <path
                    d="M401.165 167.102C402.078 175.312 410.023 182.448 406.388 190.869C411.126 197.26 402.848 201.063 400.557 206.157C389.013 207.895 377.998 212.367 365.741 210.564C357.257 218.807 372.33 239.549 352.843 237.464C349.356 234.197 350.01 228.946 348.63 224.948C347.346 221.328 348.695 216.338 344.062 213.981C340.714 213.596 337.644 214.318 335.139 212.134C338.59 207.642 329.983 203.242 336.822 200.326C341.372 199.567 346.207 199.216 349.716 196.613C349.528 181.689 352.61 167.622 362.164 155.988C367.629 155.012 368.643 149.253 375.037 150.311C387.464 149.647 394.762 158.804 401.165 167.102Z"
                    fill="white"
                />
                <path
                    d="M613.487 174.142C612.35 192.049 622.125 219.145 599.747 229.202C590.678 231.264 584.929 222.642 579.587 218.121C575.77 221.869 575.756 227.776 571.891 232.093C568.44 236.041 564.716 242.177 557.702 241.093C558.106 235.256 557.799 229.552 560.65 224.465C558.313 217.39 561.016 210.461 562.983 204.08C560.502 202.208 561.26 198.132 562.006 195.586C564.041 193.566 564.518 189.438 568.228 190.142C571.158 195.593 577.664 192.879 581.454 196.328C587.055 199.697 588.392 210.376 598.072 208.971C604.037 204.939 597.962 197.088 602.633 192.862C600.725 184.386 600.128 175.672 592.992 169.541C594.051 168.448 593.395 166.824 593.704 165.399C590.943 163.269 588.452 162.501 590.436 158.938C593.064 156.561 591.45 152.247 595.877 150.736C606.305 155.113 608.279 166.004 613.487 174.142Z"
                    fill="white"
                />
                <path
                    d="M205.159 172.466C205.203 181.517 213.427 189.81 207.736 198.792C212.495 205.954 206.187 213.737 208.576 221.028C202.501 230.583 213.297 242.251 203.896 251.702C199.733 253.752 196.052 253.316 191.5 252.567C187.66 247.509 190.091 240.016 188.042 234.378C190.633 221.076 193.521 209.724 191.516 195.948C198.159 187.341 186.674 175.271 194.04 166.864C200.047 164.611 203.25 169.182 205.159 172.466Z"
                    fill="white"
                />
                <path
                    d="M270.173 172.818C272.66 182.288 277.83 190.774 280.681 200.189C281.884 200.703 282.569 202.919 284.344 201.95C289.082 198.244 287.959 192.555 288.993 187.314C294.787 181.274 296.006 173.273 302.103 167.025C307.369 167.712 313.258 170.089 315.451 174.629C316.893 186.401 313.902 196.632 319.528 207.451C321.461 219.724 317.242 229.505 317.163 242.457C314.504 244.72 311.055 249.966 306.39 248.261C303.622 245.37 302.497 240.984 303.899 237.134C308.041 226.544 306.764 215.887 306.339 204.617C304.466 203.579 304.452 201.11 301.932 200.934C295.594 201.947 294.278 208.556 290.519 212.434C286.672 216.477 285.482 223.703 277.218 222.062C267.961 218.755 271.783 206.87 263.389 202.751C263.561 199.18 265.212 193.611 261.452 190.95C254.826 193.365 256.309 200.725 255.356 206.275C249.151 211.755 259.386 217.972 253.263 223.654C254.723 229.963 252.961 239.351 246.732 243.702C241.52 242.445 236.994 241.786 234.571 236.651C234.02 221.893 239.043 208.696 239.727 194.446C243.243 190.782 239.453 186.986 241.406 183.126C245.734 177.465 246.902 168.82 254.779 166.1C260.822 165.711 266.924 167.694 270.173 172.818Z"
                    fill="white"
                />
                <path
                    d="M394.517 182.69C397.011 185.145 396.131 187.004 395.353 189.833C393.401 194.21 387.247 192.757 383.324 194.069C377.332 194.223 371.397 197.487 365.757 194.659C363.122 188.669 370.193 183.525 367.292 177.548C371.074 173.533 370.458 166.158 377.132 164.606C389.199 163.906 386.387 177.439 394.517 182.69Z"
                    fill="black"
                />
                <path
                    d="M380.868 190.786C377.181 190.707 364.594 195.516 369.722 186.835C372.318 182.893 370.329 177.489 373.769 174.051C376.469 179.487 381.184 184.244 380.868 190.786Z"
                    fill="white"
                />
                <path
                    d="M526.387 185.472C532.695 190.539 536.747 195.591 537.409 203.507C541.024 211.947 542.237 224.836 534.863 231.929C529.816 236.009 525.667 238.005 520.059 241.25C510.194 240.673 498.627 244.406 492.843 236.611C485.829 229.792 483.338 220.226 485.11 210.493C500.025 202.607 485.394 184.379 503.674 178.29C512.442 177.727 518.517 186.029 526.387 185.472Z"
                    fill="white"
                />
                <path
                    d="M524.387 203.39C526.001 206.65 527.707 210.693 526.313 214.593C520.032 216.74 525.216 225.399 517.969 226.669C511.843 225.251 500.807 231.104 499.632 222.662C498.341 214.461 502.439 207.711 505.196 200.696C511.079 197.2 520.473 196.682 524.387 203.39Z"
                    fill="black"
                />
                <path
                    d="M518.334 220.084C518.989 221.725 517.835 223.172 516.336 223.45C512.303 223.309 508.089 224.271 504.776 222.996C502.669 217.024 503.69 210.435 508.316 205.874C515.431 209.003 509.47 218.748 518.334 220.084Z"
                    fill="white"
                />
                <path
                    d="M698.57 252.617H694.037V249.574H706.935V252.617H702.351V265.604H698.572L698.57 252.617Z"
                    fill="white"
                />
                <path
                    d="M723.042 259.456C722.963 257.532 722.888 255.224 722.888 252.869H722.837C722.295 254.912 721.597 257.197 720.946 259.076L718.907 265.331H715.946L714.152 259.148C713.601 257.245 713.055 254.988 712.631 252.869H712.58C712.515 255.029 712.411 257.505 712.309 259.505L711.983 265.594H708.475L709.547 249.564H714.597L716.239 254.939C716.79 256.769 717.292 258.766 717.662 260.648H717.765C718.207 258.792 718.783 256.7 719.355 254.889L721.13 249.562H726.105L727 265.592H723.316L723.042 259.456Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_556_221">
                    <rect width="727" height="308" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
});