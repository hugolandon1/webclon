import DropdownLink from '@/components/dropdown/DropdownLink';
import './mujer.css'
import Esto from '@/components/esto/Esto';
import Link from 'next/link'
import Image from 'next/image'
import SvgLetra from '@/components/SvgLetra';


const Mujer = () => {

  return (
    <div className='flex flex-col items-center overflow-hidden w-fit gap-5 '>
      <div className='relative h-screen overflow-hidden bg-[#393939]'>
        <div className='absolute left-[20%] top-[0%]'>
        <svg style={{mixBlendMode:"plus-lighter"}} className=" hover:fill-red-500 transition duration-300 ease-x-10 hover:rotate-45" width="200" height="417" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M164 0C132.52 0 107 25.5198 107 57V108H57C25.5198 108 0 133.52 0 165V253C0 284.48 25.5198 310 57 310H107V360C107 391.48 132.52 417 164 417H252C283.48 417 309 391.48 309 360V310H360C391.48 310 417 284.48 417 253V165C417 133.52 391.48 108 360 108H309V57C309 25.5198 283.48 0 252 0H164Z" fill="#FF5C00" />
      </svg>
      <div className='absolute left-[80%] top-[60%]'>
        <svg style={{mixBlendMode:"plus-lighter"}} className=" hover:fill-red-500 transition duration-300 ease-x-10 hover:rotate-45" width="200" height="417" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M164 0C132.52 0 107 25.5198 107 57V108H57C25.5198 108 0 133.52 0 165V253C0 284.48 25.5198 310 57 310H107V360C107 391.48 132.52 417 164 417H252C283.48 417 309 391.48 309 360V310H360C391.48 310 417 284.48 417 253V165C417 133.52 391.48 108 360 108H309V57C309 25.5198 283.48 0 252 0H164Z" fill="#FF5C00" />
      </svg>
      </div>
      
          {/* <svg width="192" height="198" viewBox="0 0 192 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{mixBlendMode:"plus-lighter", hover: "scale-110"}}>
              <path d="M0.5 198V0H192V198H0.5Z" fill="#FF5C00" />
              <path d="M0.5 198V0H192V198H0.5Z" stroke="#FF5C00" />
            </g>
          </svg> */}
        </div>
        <div className='absolute left-[60%] top-[60%] '>
          {/* <svg width="192" height="198" viewBox="0 0 192 198" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{mixBlendMode:"plus-lighter"}}>
              <path d="M0.5 198V0H192V198H0.5Z" fill="#FF5C00" />
              <path d="M0.5 198V0H192V198H0.5Z" stroke="#FF5C00" />
            </g>
          </svg> */}
        </div>
        <Image src="https://i.ibb.co/JR75V5K/Frame-67.jpg" alt='mujer' width={1500} height={1500} />
      </div>
      <div className='m-10 p-2 border border-[#b6b6b6]'>
        <svg width="1242" height="87" viewBox="0 0 1242 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.283226 85V2.69354H24.1521L78.4744 55.0169L74.2415 53.3708C73.7711 49.8434 73.3792 46.7079 73.0656 43.9644C72.8305 41.2208 72.6345 38.7516 72.4777 36.5568C72.321 34.2835 72.2034 32.1671 72.125 30.2074C72.0466 28.2477 71.9682 26.2881 71.8898 24.3284C71.8898 22.3687 71.8898 20.2523 71.8898 17.979V2.69354H96.3466V85H72.2426L14.0402 27.3855L22.3884 30.2074C22.6236 31.1481 22.8587 32.2063 23.0939 33.3821C23.329 34.4795 23.525 35.8121 23.6818 37.3798C23.9169 38.9476 24.1129 40.8681 24.2697 43.1413C24.4265 45.4145 24.544 48.1581 24.6224 51.3719C24.7008 54.5074 24.74 58.2308 24.74 62.5421V85H0.283226ZM156.022 85.7055C147.008 85.7055 139.13 83.981 132.389 80.5319C125.647 77.0829 120.396 72.3405 116.633 66.3047C112.949 60.2689 111.107 53.3708 111.107 45.6105V2.69354H136.739V45.1402C136.739 48.9027 137.562 52.195 139.208 55.0169C140.855 57.8389 143.128 60.0337 146.028 61.6015C148.928 63.1692 152.26 63.9531 156.022 63.9531C159.942 63.9531 163.391 63.1692 166.37 61.6015C169.348 60.0337 171.661 57.8389 173.307 55.0169C175.031 52.195 175.894 48.9027 175.894 45.1402V2.69354H200.938V45.6105C200.938 53.3708 199.057 60.2689 195.294 66.3047C191.61 72.3405 186.397 77.0829 179.656 80.5319C172.993 83.981 165.115 85.7055 156.022 85.7055ZM215.741 85V2.69354H237.611L275.119 49.1379H258.893L296.401 2.69354H318.271V85H293.814V64.1882C293.814 57.6821 293.971 51.5679 294.284 45.8456C294.598 40.1234 295.225 34.2835 296.166 28.3261L298.635 36.204L270.886 67.7156H263.126L234.906 35.7337L237.846 28.3261C238.786 34.2835 239.413 40.1234 239.727 45.8456C240.041 51.5679 240.197 57.6821 240.197 64.1882V85H215.741ZM333.344 85V2.69354H411.3V23.2702H357.683V64.4234H413.417V85H333.344ZM346.631 53.0181V33.7348H406.95V53.0181H346.631ZM424.653 85V2.69354H472.155C479.994 2.69354 486.422 3.75177 491.439 5.86822C496.534 7.90629 500.296 10.9634 502.726 15.0395C505.235 19.0373 506.489 23.9364 506.489 29.7371C506.489 35.3026 505.078 40.241 502.256 44.5523C499.434 48.7852 495.554 52.1166 490.616 54.5466C485.756 56.9766 480.19 58.1916 473.919 58.1916H448.404V85H424.653ZM482.62 85L454.636 47.8445L481.092 44.905L511.427 85H482.62ZM448.404 40.5545H470.745C472.626 40.5545 474.35 40.241 475.918 39.6139C477.486 38.9868 478.74 38.0069 479.681 36.6744C480.7 35.3418 481.209 33.6564 481.209 31.6184C481.209 29.5019 480.7 27.8166 479.681 26.5624C478.74 25.2298 477.447 24.25 475.8 23.6229C474.154 22.9958 472.351 22.6823 470.392 22.6823H448.404V40.5545ZM569.003 86.1758C561.008 86.1758 553.718 85.1176 547.133 83.0011C540.549 80.8063 534.866 77.7884 530.084 73.9474C525.303 70.0281 521.618 65.4816 519.032 60.3081C516.445 55.0561 515.151 49.3731 515.151 43.2589C515.151 37.1447 516.445 31.5008 519.032 26.3273C521.697 21.0753 525.42 16.5289 530.202 12.6879C534.983 8.76855 540.627 5.75064 547.133 3.63419C553.718 1.43935 560.969 0.341934 568.886 0.341934C576.803 0.341934 584.014 1.43935 590.521 3.63419C597.105 5.75064 602.788 8.76855 607.57 12.6879C612.351 16.5289 616.036 21.0753 618.622 26.3273C621.288 31.5008 622.62 37.1055 622.62 43.1413C622.62 49.3339 621.288 55.0561 618.622 60.3081C616.036 65.4816 612.351 70.0281 607.57 73.9474C602.788 77.7884 597.105 80.8063 590.521 83.0011C584.014 85.1176 576.842 86.1758 569.003 86.1758ZM568.886 62.6597C572.962 62.6597 576.685 62.1894 580.056 61.2487C583.505 60.2297 586.444 58.8579 588.874 57.1334C591.383 55.3305 593.303 53.2532 594.636 50.9016C596.047 48.55 596.752 46.0024 596.752 43.2589C596.752 40.5153 596.047 37.9677 594.636 35.6161C593.303 33.2645 591.383 31.2265 588.874 29.5019C586.444 27.699 583.505 26.3273 580.056 25.3866C576.685 24.3676 572.962 23.8581 568.886 23.8581C564.81 23.8581 561.047 24.3676 557.598 25.3866C554.227 26.3273 551.288 27.699 548.779 29.5019C546.271 31.2265 544.351 33.2645 543.018 35.6161C541.685 37.9677 541.019 40.5153 541.019 43.2589C541.019 46.0024 541.685 48.55 543.018 50.9016C544.351 53.2532 546.271 55.3305 548.779 57.1334C551.288 58.8579 554.227 60.2297 557.598 61.2487C561.047 62.1894 564.81 62.6597 568.886 62.6597ZM671.333 86.1758C664.122 86.1758 657.498 85.5879 651.462 84.4121C645.505 83.1579 640.096 81.5902 635.236 79.7089C630.455 77.8276 626.104 75.9071 622.185 73.9474L632.179 53.8411C639.626 57.9173 647.033 60.8568 654.402 62.6597C661.77 64.4626 668.237 65.364 673.803 65.364C675.37 65.364 677.173 65.2856 679.211 65.1289C681.328 64.9721 683.17 64.541 684.738 63.8355C686.305 63.0516 687.089 61.7582 687.089 59.9553C687.089 59.0931 686.815 58.3876 686.266 57.8389C685.717 57.2118 684.855 56.7023 683.679 56.3103C682.504 55.9184 681.014 55.6048 679.211 55.3697C677.487 55.0561 675.41 54.821 672.98 54.6642C670.55 54.429 667.767 54.1939 664.631 53.9587C658.987 53.5668 653.853 52.7437 649.228 51.4895C644.682 50.1569 640.762 48.4324 637.47 46.316C634.178 44.1995 631.63 41.6519 629.827 38.6732C628.025 35.6161 627.123 32.1671 627.123 28.3261C627.123 23.7797 628.26 19.7819 630.533 16.3329C632.806 12.8055 635.942 9.86597 639.939 7.51435C644.015 5.16274 648.68 3.39903 653.931 2.22322C659.183 0.96903 664.788 0.341934 670.745 0.341934C676.938 0.341934 682.464 0.85145 687.324 1.87048C692.263 2.88952 696.574 4.1829 700.258 5.75064C704.021 7.24 707.117 8.69016 709.547 10.1011L699.082 27.3855C696.496 26.1313 693.478 25.0731 690.029 24.2108C686.658 23.3485 683.209 22.6823 679.682 22.2119C676.154 21.6632 672.823 21.3889 669.687 21.3889C666.709 21.3889 664.043 21.5456 661.692 21.8592C659.34 22.0944 657.459 22.6039 656.048 23.3877C654.715 24.0932 654.049 25.1514 654.049 26.5624C654.049 27.8166 654.794 28.7964 656.283 29.5019C657.772 30.2074 659.615 30.7169 661.809 31.0305C664.083 31.344 666.356 31.5792 668.629 31.736C670.981 31.8144 672.94 31.9319 674.508 32.0887C679.211 32.4806 683.875 33.0294 688.5 33.7348C693.203 34.3619 697.436 35.4985 701.199 37.1447C705.04 38.7908 708.097 41.26 710.37 44.5523C712.643 47.7661 713.78 52.1558 713.78 57.7213C713.78 63.8355 711.899 69.009 708.136 73.2419C704.374 77.4748 699.278 80.6887 692.851 82.8835C686.423 85.0784 679.25 86.1758 671.333 86.1758ZM763.248 85V2.69354H810.751C818.59 2.69354 825.017 3.75177 830.034 5.86822C835.129 7.90629 838.892 10.9634 841.322 15.0395C843.83 19.0373 845.085 23.9364 845.085 29.7371C845.085 35.3026 843.674 40.241 840.852 44.5523C838.03 48.7852 834.15 52.1166 829.211 54.5466C824.351 56.9766 818.786 58.1916 812.515 58.1916H787V85H763.248ZM821.216 85L793.231 47.8445L819.687 44.905L850.023 85H821.216ZM787 40.5545H809.34C811.221 40.5545 812.946 40.241 814.514 39.6139C816.081 38.9868 817.335 38.0069 818.276 36.6744C819.295 35.3418 819.805 33.6564 819.805 31.6184C819.805 29.5019 819.295 27.8166 818.276 26.5624C817.335 25.2298 816.042 24.25 814.396 23.6229C812.75 22.9958 810.947 22.6823 808.987 22.6823H787V40.5545ZM846.312 85L887.7 2.69354H909.57L950.723 85H925.091L903.103 41.9655C902.163 40.0842 901.3 38.3597 900.516 36.7919C899.811 35.1458 899.184 33.5781 898.635 32.0887C898.086 30.5994 897.577 29.1884 897.107 27.8558C896.636 26.4448 896.205 25.0731 895.813 23.7405H900.869C900.477 25.1515 900.007 26.6016 899.458 28.091C898.988 29.5019 898.439 30.9521 897.812 32.4414C897.185 33.9308 896.479 35.4594 895.696 37.0271C894.99 38.5948 894.206 40.241 893.344 41.9655L871.474 85H846.312ZM866.183 73.9474L873.943 56.6631H923.562L926.854 73.9474H866.183ZM952.066 85V2.69354H999.569C1007.41 2.69354 1013.84 3.75177 1018.85 5.86822C1023.95 7.90629 1027.71 10.9634 1030.14 15.0395C1032.65 19.0373 1033.9 23.9364 1033.9 29.7371C1033.9 35.3026 1032.49 40.241 1029.67 44.5523C1026.85 48.7852 1022.97 52.1166 1018.03 54.5466C1013.17 56.9766 1007.6 58.1916 1001.33 58.1916H975.818V85H952.066ZM1010.03 85L982.049 47.8445L1008.51 44.905L1038.84 85H1010.03ZM975.818 40.5545H998.158C1000.04 40.5545 1001.76 40.241 1003.33 39.6139C1004.9 38.9868 1006.15 38.0069 1007.09 36.6744C1008.11 35.3418 1008.62 33.6564 1008.62 31.6184C1008.62 29.5019 1008.11 27.8166 1007.09 26.5624C1006.15 25.2298 1004.86 24.25 1003.21 23.6229C1001.57 22.9958 999.765 22.6823 997.805 22.6823H975.818V40.5545ZM1096.42 86.1758C1088.42 86.1758 1081.13 85.1176 1074.55 83.0011C1067.96 80.8063 1062.28 77.7884 1057.5 73.9474C1052.72 70.0281 1049.03 65.4816 1046.45 60.3081C1043.86 55.0561 1042.56 49.3731 1042.56 43.2589C1042.56 37.1447 1043.86 31.5008 1046.45 26.3273C1049.11 21.0753 1052.83 16.5289 1057.62 12.6879C1062.4 8.76855 1068.04 5.75064 1074.55 3.63419C1081.13 1.43935 1088.38 0.341934 1096.3 0.341934C1104.22 0.341934 1111.43 1.43935 1117.93 3.63419C1124.52 5.75064 1130.2 8.76855 1134.98 12.6879C1139.76 16.5289 1143.45 21.0753 1146.04 26.3273C1148.7 31.5008 1150.03 37.1055 1150.03 43.1413C1150.03 49.3339 1148.7 55.0561 1146.04 60.3081C1143.45 65.4816 1139.76 70.0281 1134.98 73.9474C1130.2 77.7884 1124.52 80.8063 1117.93 83.0011C1111.43 85.1176 1104.26 86.1758 1096.42 86.1758ZM1096.3 62.6597C1100.38 62.6597 1104.1 62.1894 1107.47 61.2487C1110.92 60.2297 1113.86 58.8579 1116.29 57.1334C1118.8 55.3305 1120.72 53.2532 1122.05 50.9016C1123.46 48.55 1124.17 46.0024 1124.17 43.2589C1124.17 40.5153 1123.46 37.9677 1122.05 35.6161C1120.72 33.2645 1118.8 31.2265 1116.29 29.5019C1113.86 27.699 1110.92 26.3273 1107.47 25.3866C1104.1 24.3676 1100.38 23.8581 1096.3 23.8581C1092.22 23.8581 1088.46 24.3676 1085.01 25.3866C1081.64 26.3273 1078.7 27.699 1076.19 29.5019C1073.68 31.2265 1071.76 33.2645 1070.43 35.6161C1069.1 37.9677 1068.43 40.5153 1068.43 43.2589C1068.43 46.0024 1069.1 48.55 1070.43 50.9016C1071.76 53.2532 1073.68 55.3305 1076.19 57.1334C1078.7 58.8579 1081.64 60.2297 1085.01 61.2487C1088.46 62.1894 1092.22 62.6597 1096.3 62.6597ZM1198.75 86.1758C1191.54 86.1758 1184.91 85.5879 1178.88 84.4121C1172.92 83.1579 1167.51 81.5902 1162.65 79.7089C1157.87 77.8276 1153.52 75.9071 1149.6 73.9474L1159.59 53.8411C1167.04 57.9173 1174.45 60.8568 1181.82 62.6597C1189.18 64.4626 1195.65 65.364 1201.22 65.364C1202.78 65.364 1204.59 65.2856 1206.62 65.1289C1208.74 64.9721 1210.58 64.541 1212.15 63.8355C1213.72 63.0516 1214.5 61.7582 1214.5 59.9553C1214.5 59.0931 1214.23 58.3876 1213.68 57.8389C1213.13 57.2118 1212.27 56.7023 1211.09 56.3103C1209.92 55.9184 1208.43 55.6048 1206.62 55.3697C1204.9 55.0561 1202.82 54.821 1200.39 54.6642C1197.96 54.429 1195.18 54.1939 1192.04 53.9587C1186.4 53.5668 1181.27 52.7437 1176.64 51.4895C1172.1 50.1569 1168.18 48.4324 1164.88 46.316C1161.59 44.1995 1159.04 41.6519 1157.24 38.6732C1155.44 35.6161 1154.54 32.1671 1154.54 28.3261C1154.54 23.7797 1155.67 19.7819 1157.95 16.3329C1160.22 12.8055 1163.36 9.86597 1167.35 7.51435C1171.43 5.16274 1176.09 3.39903 1181.35 2.22322C1186.6 0.96903 1192.2 0.341934 1198.16 0.341934C1204.35 0.341934 1209.88 0.85145 1214.74 1.87048C1219.68 2.88952 1223.99 4.1829 1227.67 5.75064C1231.43 7.24 1234.53 8.69016 1236.96 10.1011L1226.5 27.3855C1223.91 26.1313 1220.89 25.0731 1217.44 24.2108C1214.07 23.3485 1210.62 22.6823 1207.1 22.2119C1203.57 21.6632 1200.24 21.3889 1197.1 21.3889C1194.12 21.3889 1191.46 21.5456 1189.11 21.8592C1186.75 22.0944 1184.87 22.6039 1183.46 23.3877C1182.13 24.0932 1181.46 25.1514 1181.46 26.5624C1181.46 27.8166 1182.21 28.7964 1183.7 29.5019C1185.19 30.2074 1187.03 30.7169 1189.22 31.0305C1191.5 31.344 1193.77 31.5792 1196.04 31.736C1198.39 31.8144 1200.35 31.9319 1201.92 32.0887C1206.62 32.4806 1211.29 33.0294 1215.91 33.7348C1220.62 34.3619 1224.85 35.4985 1228.61 37.1447C1232.45 38.7908 1235.51 41.26 1237.78 44.5523C1240.06 47.7661 1241.19 52.1558 1241.19 57.7213C1241.19 63.8355 1239.31 69.009 1235.55 73.2419C1231.79 77.4748 1226.69 80.6887 1220.26 82.8835C1213.84 85.0784 1206.66 86.1758 1198.75 86.1758Z" fill="#FF5C00" fill-opacity="" />
        </svg>

      </div>
    </div>
  );
}

export default Mujer;