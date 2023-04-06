import { FC } from "react";

export const SpinnerIcon: FC = () => {
  return (
    <svg
      width="40"
      height="10"
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <circle cx="15" cy="15" r="15" fill="#0009">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3" fill="#0009">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15" fill="#0009">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export const CloseIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="#1B1B1B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 18L6 6"
        stroke="#1B1B1B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const EmptyIcon: FC = () => {
  return (
    <svg
      width="150"
      height="100"
      viewBox="0 0 474 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_3390)">
        <path
          opacity="0.1"
          d="M5.10156 167.629C12.5863 196.556 28.4176 221.561 53.4358 233.682C105.446 258.872 222.741 245.881 310.283 230.967C355.566 223.254 395.369 201.968 424.282 172.011L5.10156 167.629Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M464.167 31.4688H416.134C413.855 31.4688 411.985 29.7797 411.985 27.7157C411.985 25.6517 413.855 23.9582 416.134 23.9582H424.442C422.158 23.9582 420.292 22.2691 420.292 20.2008C420.292 18.1324 422.158 16.4476 424.442 16.4476H418.513C416.229 16.4476 414.359 14.7585 414.359 12.6901C414.359 10.6218 416.229 8.937 418.513 8.937H443.583C438.02 6.5972 431.517 4.93392 424.024 4.05919C355.662 -3.88232 331.255 1.37037 322.646 6.76956C311.915 13.5832 299.994 18.311 287.51 20.7049C245.334 28.5775 166.457 38.0487 94.9663 17.6886C59.4342 7.54949 33.0243 24.6606 17.1973 53.2638H472.509C471.914 44.9517 470.135 37.2731 466.869 30.5553C466.095 31.1525 465.144 31.4741 464.167 31.4688Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M1.02979 107.251C-0.81513 124.074 -0.187987 141.077 2.89129 157.718L424.606 171.675C436.214 159.635 446.077 146.027 453.907 131.248L1.02979 107.251ZM167.823 143.253H159.52C161.803 143.253 163.673 144.946 163.673 147.01C163.673 149.074 161.803 150.764 159.52 150.764H111.487C109.208 150.764 107.337 149.074 107.337 147.01C107.337 144.946 109.208 143.253 111.487 143.253H119.795C117.511 143.253 115.645 141.564 115.645 139.5C115.645 137.436 117.511 135.742 119.795 135.742H113.861C111.578 135.742 109.707 134.053 109.707 131.989C109.707 129.925 111.578 128.232 113.861 128.232H161.894C164.178 128.232 166.043 129.921 166.043 131.989C166.043 134.058 164.178 135.742 161.894 135.742H167.823C170.107 135.742 171.973 137.432 171.973 139.5C171.973 141.568 170.107 143.253 167.823 143.253Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M472.526 53.5222L12.1166 63.6484C6.51489 76.6745 2.80052 91.4027 1.08984 106.665H464.459C467.475 97.7358 469.713 88.5622 471.147 79.247C472.53 70.28 473.082 61.6059 472.526 53.5222ZM94.5695 86.7232H86.2661C88.5499 86.7232 90.42 88.4166 90.42 90.4806C90.42 92.5446 88.5499 94.2381 86.2661 94.2381H38.2335C35.9541 94.2381 34.0839 92.5446 34.0839 90.4806C34.0839 88.4166 35.9541 86.7232 38.2335 86.7232H46.5413C44.2575 86.7232 42.3917 85.034 42.3917 82.97C42.3917 80.906 44.2575 79.2125 46.5413 79.2125H40.6078C38.324 79.2125 36.4539 77.5234 36.4539 75.4594C36.4539 73.3954 38.324 71.7019 40.6078 71.7019H88.6403C90.9241 71.7019 92.7899 73.3911 92.7899 75.4594C92.7899 77.5277 90.9241 79.2125 88.6403 79.2125H94.5695C96.8533 79.2125 98.7191 80.906 98.7191 82.97C98.7191 85.034 96.8533 86.7232 94.5695 86.7232Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M234.876 336.568C341.248 336.568 427.48 328.636 427.48 318.85C427.48 309.064 341.248 301.131 234.876 301.131C128.503 301.131 42.2715 309.064 42.2715 318.85C42.2715 328.636 128.503 336.568 234.876 336.568Z"
          fill="#2B3159"
        />
        <path
          d="M350.042 185.219C352.184 185.219 353.92 184.042 353.92 182.59C353.92 181.138 352.184 179.962 350.042 179.962C347.9 179.962 346.164 181.138 346.164 182.59C346.164 184.042 347.9 185.219 350.042 185.219Z"
          fill="#2B3159"
        />
        <path
          d="M223.633 328.903C297.05 328.903 356.566 269.386 356.566 195.97C356.566 122.553 297.05 63.0366 223.633 63.0366C150.216 63.0366 90.7002 122.553 90.7002 195.97C90.7002 269.386 150.216 328.903 223.633 328.903Z"
          fill="#2B3159"
        />
        <path
          d="M293.384 262.772C293.384 283.757 260.394 264.565 225.026 264.565C189.657 264.565 153.884 282.964 153.884 261.979C153.884 250.013 165.285 233.372 181.642 221.285C193.966 212.176 209.099 205.652 224.302 205.652C239.935 205.652 255.249 212.714 267.465 222.41C282.883 234.634 293.384 251.06 293.384 262.772Z"
          fill="#FF8C32"
        />
        <path
          d="M267.461 222.401C248.661 219.57 214.658 216.118 181.643 221.276C193.966 212.167 209.1 205.643 224.302 205.643C239.931 205.643 255.245 212.706 267.461 222.401Z"
          fill="white"
        />
        <path
          opacity="0.05"
          d="M153.883 102.132C153.883 102.132 113.84 127.732 114.167 167.776C114.495 207.819 153.883 102.132 153.883 102.132Z"
          fill="#0D112D"
        />
        <path
          d="M356.515 29.8314C356.515 29.8314 320.233 27.6467 324.512 53.0699C324.512 53.0699 323.65 57.5599 327.735 59.6024C327.735 59.6024 327.8 57.7193 331.454 58.3571C332.756 58.5749 334.079 58.6386 335.396 58.5467C337.176 58.4257 338.868 57.7266 340.214 56.5559C340.214 56.5559 350.413 52.346 354.382 35.6744C354.382 35.6744 357.316 32.0376 357.2 31.1069L351.077 33.7181C351.077 33.7181 353.167 38.1349 351.508 41.8062C351.508 41.8062 351.31 33.8819 350.133 34.0499C349.896 34.0887 346.953 35.5796 346.953 35.5796C346.953 35.5796 350.551 43.2755 347.815 48.8643C347.815 48.8643 348.845 39.3845 345.807 36.1355L341.498 38.652C341.498 38.652 345.704 46.5978 342.851 53.0828C342.851 53.0828 343.584 43.1376 340.593 39.2638L336.685 42.3103C336.685 42.3103 340.636 50.1441 338.227 55.5217C338.227 55.5217 337.913 43.9434 335.84 43.0687C335.84 43.0687 332.423 46.085 331.902 47.3217C331.902 47.3217 334.608 53.0053 332.932 56.0043C332.932 56.0043 331.902 48.2912 331.057 48.2481C331.057 48.2481 327.653 53.3586 327.295 56.8661C327.295 56.8661 327.446 51.6523 330.23 47.7612C330.23 47.7612 326.938 48.3257 325.02 50.463C325.02 50.463 325.55 46.8477 331.053 46.5331C331.053 46.5331 333.867 42.655 334.621 42.4223C334.621 42.4223 329.127 41.9613 325.796 43.4393C325.796 43.4393 328.726 40.0308 335.625 41.5778L339.503 38.4322C339.503 38.4322 332.272 37.4411 329.204 38.5356C329.204 38.5356 332.733 35.5193 340.541 37.7169L344.743 35.2048C344.743 35.2048 338.577 33.8776 334.901 34.3429C334.901 34.3429 338.779 32.2531 345.971 34.5196L348.987 33.1709C348.987 33.1709 344.467 32.2832 343.144 32.1454C341.821 32.0075 341.752 31.6369 341.752 31.6369C344.623 31.1702 347.567 31.5118 350.254 32.6237C350.254 32.6237 356.623 30.2322 356.515 29.8314Z"
          fill="#2B3159"
        />
        <path
          d="M319.302 18.5288C319.302 18.5288 302.928 17.5377 304.841 29.0255C304.841 29.0255 304.458 31.0551 306.297 31.9772C306.297 31.9772 306.323 31.1154 307.978 31.417C308.566 31.5138 309.163 31.5427 309.758 31.5032C310.562 31.4458 311.327 31.1299 311.938 30.6026C311.938 30.6026 316.544 28.6981 318.337 21.1659C318.337 21.1659 319.664 19.5242 319.63 19.1019L316.863 20.2826C316.863 20.2826 317.811 22.2776 317.066 23.9366C317.066 23.9366 316.975 20.3558 316.445 20.442C316.337 20.442 315.006 21.1314 315.006 21.1314C315.006 21.1314 316.635 24.6088 315.407 27.1339C315.407 27.1339 315.872 22.8507 314.502 21.3814L312.554 22.5189C312.554 22.5189 314.454 26.1126 313.166 29.0428C313.166 29.0428 313.494 24.5485 312.145 22.799L310.378 24.1736C310.378 24.1736 312.162 27.7113 311.076 30.1416C311.076 30.1416 310.934 24.9104 309.995 24.514C309.995 24.514 308.452 25.8757 308.215 26.4358C308.215 26.4358 309.439 29.0212 308.68 30.3613C308.68 30.3613 308.215 26.8753 307.819 26.8624C307.819 26.8624 306.28 29.1677 306.121 30.7405C306.195 29.2769 306.651 27.8581 307.444 26.6254C306.557 26.7932 305.739 27.2171 305.091 27.8449C305.091 27.8449 305.328 26.2118 307.823 26.0696C307.823 26.0696 309.094 24.3201 309.434 24.2124C309.434 24.2124 306.952 24.0055 305.449 24.6734C305.449 24.6734 306.771 23.1308 309.891 23.8116L311.615 22.394C311.615 22.394 308.349 21.9631 306.961 22.4371C306.961 22.4371 308.555 21.0754 312.084 22.0708L313.98 20.9332C313.98 20.9332 311.197 20.3343 309.534 20.5497C309.534 20.5497 311.287 19.606 314.536 20.6316L315.894 20.0197C315.894 20.0197 313.851 19.619 313.256 19.5586C312.662 19.4983 312.623 19.3303 312.623 19.3303C313.917 19.1151 315.245 19.2643 316.458 19.7612C316.458 19.7612 319.349 18.7098 319.302 18.5288Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M462.396 314.562C468.805 314.562 474 313.685 474 312.602C474 311.519 468.805 310.641 462.396 310.641C455.987 310.641 450.792 311.519 450.792 312.602C450.792 313.685 455.987 314.562 462.396 314.562Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M20.153 347.177C26.5618 347.177 31.7572 346.299 31.7572 345.216C31.7572 344.134 26.5618 343.256 20.153 343.256C13.7442 343.256 8.54883 344.134 8.54883 345.216C8.54883 346.299 13.7442 347.177 20.153 347.177Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M87.5163 349.638C93.9251 349.638 99.1205 348.76 99.1205 347.677C99.1205 346.594 93.9251 345.716 87.5163 345.716C81.1075 345.716 75.9121 346.594 75.9121 347.677C75.9121 348.76 81.1075 349.638 87.5163 349.638Z"
          fill="#2B3159"
        />
        <path
          d="M436.998 336.542C446.568 336.542 454.325 335.231 454.325 333.612C454.325 331.994 446.568 330.682 436.998 330.682C427.429 330.682 419.672 331.994 419.672 333.612C419.672 335.231 427.429 336.542 436.998 336.542Z"
          fill="#2B3159"
        />
        <path
          d="M444.161 328.825C444.951 328.18 445.528 327.31 445.815 326.33C446.026 325.343 445.604 324.154 444.66 323.792C443.6 323.387 442.467 324.124 441.61 324.865C440.752 325.606 439.765 326.451 438.641 326.296C439.219 325.772 439.652 325.107 439.896 324.366C440.141 323.625 440.189 322.834 440.037 322.069C439.988 321.752 439.854 321.454 439.649 321.207C439.059 320.578 437.994 320.845 437.288 321.34C435.047 322.917 434.422 325.96 434.409 328.7C434.185 327.713 434.375 326.684 434.37 325.684C434.366 324.684 434.086 323.529 433.233 322.999C432.703 322.717 432.109 322.577 431.509 322.594C430.501 322.555 429.381 322.655 428.691 323.391C427.829 324.309 428.058 325.843 428.803 326.839C429.549 327.834 430.678 328.48 431.716 329.174C432.552 329.671 433.265 330.35 433.802 331.161C433.864 331.275 433.916 331.394 433.957 331.518H440.269C441.682 330.8 442.991 329.894 444.161 328.825Z"
          fill="#2B3159"
        />
        <path
          d="M25.5699 292.694C25.5699 292.694 27.9355 295.788 24.4754 300.45C21.0152 305.113 18.1627 309.068 19.3046 311.981C19.3046 311.981 24.5228 303.303 28.7844 303.178C33.046 303.053 30.2408 297.912 25.5699 292.694Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M25.5701 292.694C25.7756 292.993 25.938 293.319 26.0527 293.664C30.198 298.533 32.4042 303.079 28.4227 303.191C24.7083 303.299 20.2356 309.934 19.1885 311.611C19.2251 311.741 19.2682 311.869 19.3177 311.994C19.3177 311.994 24.536 303.316 28.7976 303.191C33.0592 303.066 30.2411 297.912 25.5701 292.694Z"
          fill="#0D112D"
        />
        <path
          d="M29.9691 296.637C29.9691 297.727 29.8442 298.61 29.6933 298.61C29.5425 298.61 29.4219 297.748 29.4219 296.637C29.4219 295.525 29.5727 296.059 29.7278 296.059C29.8829 296.059 29.9691 295.546 29.9691 296.637Z"
          fill="#FF8C32"
        />
        <path
          d="M31.4604 297.938C30.5038 298.459 29.6721 298.774 29.5989 298.64C29.5256 298.507 30.2452 297.981 31.2018 297.46C32.1584 296.938 31.7792 297.318 31.8525 297.46C31.9257 297.602 32.4342 297.417 31.4604 297.938Z"
          fill="#FF8C32"
        />
        <path
          d="M13.0648 292.694C13.0648 292.694 10.6991 295.788 14.155 300.45C17.6108 305.113 20.4677 309.068 19.3258 311.981C19.3258 311.981 14.1033 303.303 9.84595 303.178C5.58865 303.053 8.38951 297.912 13.0648 292.694Z"
          fill="#2B3159"
        />
        <path
          opacity="0.1"
          d="M13.0652 292.694C12.8579 292.992 12.6953 293.319 12.5826 293.664C8.43729 298.533 6.22677 303.079 10.2126 303.191C13.9227 303.299 18.3997 309.934 19.4425 311.611C19.4074 311.741 19.3657 311.869 19.3175 311.994C19.3175 311.994 14.095 303.316 9.83772 303.191C5.58042 303.066 8.38989 297.912 13.0652 292.694Z"
          fill="#0D112D"
        />
        <path
          d="M8.66504 296.637C8.66504 297.727 8.78569 298.61 8.93651 298.61C9.08732 298.61 9.20798 297.748 9.20798 296.637C9.20798 295.525 9.05716 296.059 8.90635 296.059C8.75553 296.059 8.66504 295.546 8.66504 296.637Z"
          fill="#FF8C32"
        />
        <path
          d="M7.15284 297.938C8.10944 298.459 8.94539 298.774 9.01864 298.64C9.09189 298.507 8.37229 297.981 7.41569 297.46C6.45909 296.938 6.83397 297.318 6.76503 297.46C6.69608 297.602 6.19624 297.417 7.15284 297.938Z"
          fill="#FF8C32"
        />
        <path
          d="M9.41992 311.589C9.41992 311.589 16.0386 311.387 18.0379 309.965C20.0373 308.543 28.2201 306.849 28.7157 309.103C29.2112 311.356 38.6609 320.435 31.1891 320.496C23.7172 320.556 13.828 319.328 11.8373 318.117C9.84651 316.906 9.41992 311.589 9.41992 311.589Z"
          fill="#8B8D96"
        />
        <path
          opacity="0.2"
          d="M31.314 319.724C23.8422 319.785 13.953 318.557 11.9622 317.346C10.4455 316.424 9.84221 313.11 9.63968 311.58H9.41992C9.41992 311.58 9.85082 316.919 11.8287 318.13C13.8065 319.341 23.7086 320.569 31.1804 320.509C33.3349 320.509 34.0804 319.72 34.0416 318.587C33.74 319.281 32.9213 319.711 31.314 319.724Z"
          fill="#0D112D"
        />
        <path
          d="M176.372 178.54C178.902 178.397 190.808 177.501 198.37 173.188C199.584 172.473 200.956 172.069 202.364 172.011C204.769 171.942 207.535 172.946 205.764 178.565C202.894 187.757 186.231 198.098 175.89 197.525C165.945 196.974 154.147 192.966 146.356 178.876C145.609 177.52 145.242 175.988 145.292 174.442C145.382 171.598 146.416 168.034 151.755 172.007C158.968 177.372 172.654 178.389 175.399 178.54C175.723 178.557 176.048 178.557 176.372 178.54Z"
          fill="#FF8C32"
        />
        <path
          d="M272.033 178.54C274.562 178.397 286.468 177.501 294.03 173.188C295.245 172.473 296.617 172.069 298.025 172.011C300.429 171.942 303.195 172.946 301.424 178.565C298.555 187.757 281.892 198.098 271.55 197.525C261.605 196.974 249.807 192.966 242.016 178.876C241.27 177.52 240.902 175.988 240.952 174.442C241.042 171.598 242.076 168.034 247.415 172.007C254.629 177.372 268.314 178.389 271.059 178.54C271.383 178.557 271.708 178.557 272.033 178.54Z"
          fill="#FF8C32"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_3390">
          <rect width="474" height="349.638" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
