import React from 'react'
import './Complaints.css'
import img1 from './../../assets/img/comimg.svg'
const Complaints = () => {
  return (
    <div className='HApp'>
    <div className='HComplaints'>
      <img src={img1} className='comimg rounded '/>
      <div>
      <p className='comtitile'>شارك معنا...رأيك يهمنا</p>
      <p className='comde'>... حمّل تطبيق الشكاوى وشاركنا مشاكلك واقتراحاتك</p>
      <div className='Hsvg'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'30px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" className='Hsvg' viewBox="0 0 150 45" fill="none">
  <path d="M144.444 44.4444H5.55556C2.44444 44.4444 0 42 0 38.8889V5.55556C0 2.44444 2.44444 0 5.55556 0H144.444C147.556 0 150 2.44444 150 5.55556V38.8889C150 42 147.556 44.4444 144.444 44.4444Z" fill="#FFFEFB"/>
  <path d="M144.444 0.888889C147 0.888889 149.111 3 149.111 5.55556V38.8889C149.111 41.4444 147 43.5556 144.444 43.5556H5.55556C3 43.5556 0.888889 41.4444 0.888889 38.8889V5.55556C0.888889 3 3 0.888889 5.55556 0.888889H144.444ZM144.444 0H5.55556C2.44444 0 0 2.55556 0 5.55556V38.8889C0 42 2.44444 44.4444 5.55556 44.4444H144.444C147.556 44.4444 150 42 150 38.8889V5.55556C150 2.55556 147.556 0 144.444 0Z" fill="#A6A6A6"/>
  <path d="M52.6667 11.3334C52.6667 12.2223 52.4444 13.0001 51.8889 13.5556C51.2222 14.2223 50.4444 14.5556 49.4444 14.5556C48.4444 14.5556 47.6667 14.2223 47 13.5556C46.3333 12.889 46 12.1112 46 11.1112C46 10.1112 46.3333 9.33341 47 8.66675C47.6667 8.00008 48.4444 7.66675 49.4444 7.66675C49.8889 7.66675 50.3333 7.77786 50.7778 8.00008C51.2222 8.2223 51.5556 8.44453 51.7778 8.77786L51.2222 9.33341C50.7778 8.77786 50.2222 8.55564 49.4444 8.55564C48.7778 8.55564 48.1111 8.77786 47.6667 9.33341C47.1111 9.77786 46.8889 10.4445 46.8889 11.2223C46.8889 12.0001 47.1111 12.6667 47.6667 13.1112C48.2222 13.5556 48.7778 13.889 49.4444 13.889C50.2222 13.889 50.7778 13.6667 51.3333 13.1112C51.6667 12.7779 51.8889 12.3334 51.8889 11.7779H49.4444V10.889H52.6667V11.3334ZM57.7778 8.55564H54.7778V10.6667H57.5556V11.4445H54.7778V13.5556H57.7778V14.4445H53.8889V7.77786H57.7778V8.55564ZM61.4444 14.4445H60.5556V8.55564H58.6667V7.77786H63.3333V8.55564H61.4444V14.4445ZM66.5556 14.4445V7.77786H67.4444V14.4445H66.5556ZM71.2222 14.4445H70.3333V8.55564H68.4444V7.77786H73V8.55564H71.1111V14.4445H71.2222ZM81.7778 13.5556C81.1111 14.2223 80.3333 14.5556 79.3333 14.5556C78.3333 14.5556 77.5555 14.2223 76.8889 13.5556C76.2222 12.889 75.8889 12.1112 75.8889 11.1112C75.8889 10.1112 76.2222 9.33341 76.8889 8.66675C77.5555 8.00008 78.3333 7.66675 79.3333 7.66675C80.3333 7.66675 81.1111 8.00008 81.7778 8.66675C82.4444 9.33341 82.7778 10.1112 82.7778 11.1112C82.7778 12.1112 82.4444 12.889 81.7778 13.5556ZM77.5556 13.0001C78 13.4445 78.6667 13.7779 79.3333 13.7779C80 13.7779 80.6667 13.5556 81.1111 13.0001C81.5556 12.5556 81.8889 11.889 81.8889 11.1112C81.8889 10.3334 81.6667 9.66675 81.1111 9.2223C80.6667 8.77786 80 8.44453 79.3333 8.44453C78.6667 8.44453 78 8.66675 77.5556 9.2223C77.1111 9.66675 76.7778 10.3334 76.7778 11.1112C76.7778 11.889 77 12.5556 77.5556 13.0001ZM84 14.4445V7.77786H85L88.2222 13.0001V7.77786H89.1111V14.4445H88.2222L84.7778 9.00008V14.4445H84Z" fill="#01020D"/>
  <path d="M75.6667 24.2222C73.0001 24.2222 70.889 26.2222 70.889 29C70.889 31.6667 73.0001 33.7778 75.6667 33.7778C78.3334 33.7778 80.4445 31.7778 80.4445 29C80.4445 26.1111 78.3334 24.2222 75.6667 24.2222ZM75.6667 31.7778C74.2223 31.7778 73.0001 30.5556 73.0001 28.8889C73.0001 27.2222 74.2223 26 75.6667 26C77.1112 26 78.3334 27.1111 78.3334 28.8889C78.3334 30.5556 77.1112 31.7778 75.6667 31.7778ZM65.3334 24.2222C62.6667 24.2222 60.5556 26.2222 60.5556 29C60.5556 31.6667 62.6667 33.7778 65.3334 33.7778C68.0001 33.7778 70.1112 31.7778 70.1112 29C70.1112 26.1111 68.0001 24.2222 65.3334 24.2222ZM65.3334 31.7778C63.889 31.7778 62.6668 30.5556 62.6668 28.8889C62.6668 27.2222 63.889 26 65.3334 26C66.7779 26 68.0001 27.1111 68.0001 28.8889C68.0001 30.5556 66.7779 31.7778 65.3334 31.7778ZM53.0001 25.6667V27.6667H57.7779C57.6667 28.7778 57.2223 29.6667 56.6667 30.2222C56.0001 30.8889 54.889 31.6667 53.0001 31.6667C50.0001 31.6667 47.7779 29.3333 47.7779 26.3333C47.7779 23.3333 50.1112 21 53.0001 21C54.5556 21 55.7779 21.6667 56.6667 22.4444L58.1112 21C56.889 19.8889 55.3334 19 53.1112 19C49.1112 19 45.6667 22.3333 45.6667 26.3333C45.6667 30.3333 49.1112 33.6667 53.1112 33.6667C55.3334 33.6667 56.889 33 58.2223 31.5556C59.5556 30.2222 60.0001 28.3333 60.0001 26.8889C60.0001 26.4444 60.0001 26 59.889 25.6667H53.0001ZM103.445 27.2222C103 26.1111 101.889 24.2222 99.4445 24.2222C97.0001 24.2222 95.0001 26.1111 95.0001 29C95.0001 31.6667 97.0001 33.7778 99.6667 33.7778C101.778 33.7778 103.111 32.4444 103.556 31.6667L102 30.5556C101.445 31.3333 100.778 31.8889 99.6667 31.8889C98.5556 31.8889 97.889 31.4444 97.3334 30.4444L103.667 27.7778L103.445 27.2222ZM97.0001 28.7778C97.0001 27 98.4445 26 99.4445 26C100.222 26 101 26.4444 101.222 27L97.0001 28.7778ZM91.7779 33.3333H93.889V19.4444H91.7779V33.3333ZM88.4445 25.2222C87.889 24.6667 87.0001 24.1111 85.889 24.1111C83.5556 24.1111 81.3334 26.2222 81.3334 28.8889C81.3334 31.5556 83.4445 33.5556 85.889 33.5556C87.0001 33.5556 87.889 33 88.3334 32.4444H88.4445V33.1111C88.4445 34.8889 87.4445 35.8889 85.889 35.8889C84.6668 35.8889 83.7779 35 83.5556 34.2222L81.7779 35C82.3334 36.2222 83.6668 37.7778 86.0001 37.7778C88.4445 37.7778 90.4445 36.3333 90.4445 32.8889V24.4444H88.4445V25.2222ZM86.0001 31.7778C84.5556 31.7778 83.3334 30.5556 83.3334 28.8889C83.3334 27.2222 84.5556 26 86.0001 26C87.4445 26 88.5556 27.2222 88.5556 28.8889C88.5556 30.5556 87.4445 31.7778 86.0001 31.7778ZM113.111 19.4444H108.111V33.3333H110.222V28.1111H113.111C115.445 28.1111 117.667 26.4444 117.667 23.7778C117.667 21.1111 115.445 19.4444 113.111 19.4444ZM113.222 26.1111H110.222V21.3333H113.222C114.778 21.3333 115.667 22.6667 115.667 23.6667C115.556 24.8889 114.667 26.1111 113.222 26.1111ZM126 24.1111C124.445 24.1111 122.889 24.7778 122.333 26.2222L124.222 27C124.667 26.2222 125.333 26 126.111 26C127.222 26 128.222 26.6667 128.333 27.7778V27.8889C128 27.6667 127.111 27.3333 126.222 27.3333C124.222 27.3333 122.222 28.4444 122.222 30.4444C122.222 32.3333 123.889 33.5556 125.667 33.5556C127.111 33.5556 127.778 32.8889 128.333 32.2222H128.445V33.3333H130.445V28C130.222 25.5556 128.333 24.1111 126 24.1111ZM125.778 31.7778C125.111 31.7778 124.111 31.4444 124.111 30.5556C124.111 29.4444 125.333 29.1111 126.333 29.1111C127.222 29.1111 127.667 29.3333 128.222 29.5556C128 30.8889 126.889 31.7778 125.778 31.7778ZM137.445 24.4444L135.111 30.4444H135L132.556 24.4444H130.333L134 32.8889L131.889 37.5556H134L139.667 24.4444H137.445ZM118.778 33.3333H120.889V19.4444H118.778V33.3333Z" fill="#01020D"/>
  <path d="M11.5555 8.33325C11.2222 8.66659 11.1111 9.22214 11.1111 9.88881V34.4444C11.1111 35.111 11.3333 35.6666 11.6666 35.9999L11.7778 36.111L25.5555 22.3333V22.111L11.5555 8.33325Z" fill="url(#paint0_linear_487_89)"/>
  <path d="M29.9999 27.0001L25.4443 22.4446V22.1112L29.9999 17.5557L30.111 17.6668L35.5554 20.7779C37.111 21.6668 37.111 23.1112 35.5554 24.0001L29.9999 27.0001Z" fill="url(#paint1_linear_487_89)"/>
  <path d="M30.111 26.8888L25.4443 22.2222L11.5554 36.1111C12.111 36.6666 12.8888 36.6666 13.8888 36.2222L30.111 26.8888Z" fill="url(#paint2_linear_487_89)"/>
  <path d="M30.111 17.5556L13.8888 8.33339C12.8888 7.77783 12.111 7.88895 11.5554 8.4445L25.4443 22.2223L30.111 17.5556Z" fill="url(#paint3_linear_487_89)"/>
  <path opacity="0.2" d="M29.9999 26.7778L13.8888 35.8889C12.9999 36.4445 12.2221 36.3334 11.6665 35.8889L11.5554 36.0001L11.6665 36.1112C12.2221 36.5556 12.9999 36.6667 13.8888 36.1112L29.9999 26.7778Z" fill="#FFFEFB"/>
  <path opacity="0.12" d="M11.5555 35.8888C11.2222 35.5555 11.1111 34.9999 11.1111 34.3333V34.4444C11.1111 35.1111 11.3333 35.6666 11.6666 35.9999V35.8888H11.5555ZM35.5555 23.6666L30 26.7777L30.1111 26.8888L35.5555 23.7777C36.3333 23.3333 36.6666 22.7777 36.6666 22.2222C36.6666 22.7777 36.2222 23.2222 35.5555 23.6666Z" fill="#FFFEFB"/>
  <path opacity="0.25" d="M13.889 8.44453L35.5556 20.7779C36.2223 21.2223 36.6668 21.6667 36.6668 22.2223C36.6668 21.6667 36.3334 21.1112 35.5556 20.6667L13.889 8.33342C12.3334 7.44453 11.1112 8.11119 11.1112 9.88897V10.0001C11.1112 8.33342 12.3334 7.55564 13.889 8.44453Z" fill="#01020D"/>
  <defs>
    <linearGradient id="paint0_linear_487_89" x1="24.2222" y1="9.6777" x2="5.57442" y2="28.3244" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00A0FF"/>
      <stop offset="0.007" stop-color="#00A1FF"/>
      <stop offset="0.26" stop-color="#00BEFF"/>
      <stop offset="0.512" stop-color="#00D2FF"/>
      <stop offset="0.76" stop-color="#00DFFF"/>
      <stop offset="1" stop-color="#00E3FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_487_89" x1="37.5932" y1="22.2234" x2="10.7077" y2="22.2234" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE000"/>
      <stop offset="0.409" stop-color="#FFBD00"/>
      <stop offset="0.775" stop-color="#FFA500"/>
      <stop offset="1" stop-color="#FF9C00"/>
    </linearGradient>
    <linearGradient id="paint2_linear_487_89" x1="27.5854" y1="24.7733" x2="2.29876" y2="50.0599" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF3A44"/>
      <stop offset="1" stop-color="#C31162"/>
    </linearGradient>
    <linearGradient id="paint3_linear_487_89" x1="8.10764" y1="0.195613" x2="19.3999" y2="11.4878" gradientUnits="userSpaceOnUse">
      <stop stop-color="#32A071"/>
      <stop offset="0.069" stop-color="#2DA771"/>
      <stop offset="0.476" stop-color="#15CF74"/>
      <stop offset="0.801" stop-color="#06E775"/>
      <stop offset="1" stop-color="#00F076"/>
    </linearGradient>
  </defs>
</svg>
</div>
</div>
<div className='Hsvg'>
<svg xmlns="http://www.w3.org/2000/svg" className='Hsvg' viewBox="0 0 150 45" fill="none">
  <path d="M149.005 39.1975C149.005 39.7568 148.895 40.3107 148.681 40.8275C148.466 41.3442 148.152 41.8137 147.756 42.209C147.361 42.6043 146.891 42.9178 146.374 43.1314C145.856 43.3451 145.302 43.4548 144.743 43.4542H5.25737C4.12683 43.4554 3.04211 43.0076 2.24176 42.2093C1.44142 41.4111 0.990975 40.3277 0.989502 39.1975V5.25142C0.990975 4.12068 1.44124 3.03673 2.24143 2.23759C3.04161 1.43844 4.12632 0.989429 5.25737 0.989136H144.742C145.302 0.989136 145.856 1.09939 146.373 1.3136C146.89 1.52782 147.36 1.84179 147.756 2.2376C148.152 2.6334 148.466 3.10328 148.68 3.6204C148.894 4.13752 149.004 4.69174 149.004 5.25142L149.005 39.1975Z" fill="#01020D"/>
  <path d="M144.743 44.4445H5.25729C3.8646 44.4442 2.5289 43.8916 1.54329 42.9079C0.557675 41.9242 0.00264991 40.5898 0 39.1975L0 5.25256C0.00206028 3.85955 0.556719 2.52423 1.5423 1.53954C2.52788 0.55484 3.86391 0.00117575 5.25729 0L144.742 0C146.135 0.00176243 147.471 0.555616 148.456 1.54018C149.441 2.52475 149.996 3.85973 149.999 5.25256V39.1975C150.001 42.0916 147.639 44.4445 144.743 44.4445Z" fill="#FFFEFB"/>
  <path d="M149.005 39.1975C149.005 39.7568 148.895 40.3107 148.681 40.8275C148.466 41.3442 148.152 41.8137 147.756 42.209C147.361 42.6043 146.891 42.9178 146.374 43.1314C145.856 43.3451 145.302 43.4548 144.743 43.4542H5.25737C4.12683 43.4554 3.04211 43.0076 2.24176 42.2093C1.44142 41.4111 0.990975 40.3277 0.989502 39.1975V5.25142C0.990975 4.12068 1.44124 3.03673 2.24143 2.23759C3.04161 1.43844 4.12632 0.989429 5.25737 0.989136H144.742C145.302 0.989136 145.856 1.09939 146.373 1.3136C146.89 1.52782 147.36 1.84179 147.756 2.2376C148.152 2.6334 148.466 3.10328 148.68 3.6204C148.894 4.13752 149.004 4.69174 149.004 5.25142L149.005 39.1975Z" fill="#FFFEFB"/>
  <path d="M33.4937 21.9883C33.4615 18.4062 36.4275 16.6635 36.5631 16.5823C34.8833 14.1339 32.2797 13.7993 31.3648 13.7727C29.178 13.5426 27.0569 15.0808 25.9429 15.0808C24.8068 15.0808 23.0914 13.7949 21.2426 13.8327C18.8636 13.8694 16.6379 15.2464 15.4173 17.3848C12.8981 21.7449 14.7769 28.1522 17.1904 31.6765C18.3978 33.4036 19.8085 35.3297 21.6551 35.2619C23.4616 35.1886 24.1364 34.1116 26.3165 34.1116C28.4765 34.1116 29.1102 35.2619 30.9935 35.2186C32.9323 35.1886 34.1529 33.4848 35.318 31.7432C36.7132 29.766 37.2735 27.8166 37.2958 27.7165C37.2513 27.701 33.5315 26.2806 33.4937 21.9883ZM29.9362 11.4543C30.9079 10.2395 31.5727 8.5868 31.3881 6.90967C29.9818 6.97191 28.2231 7.88216 27.2103 9.07026C26.3143 10.1172 25.5138 11.8332 25.7206 13.447C27.3003 13.5648 28.9223 12.6501 29.9362 11.4543Z" fill="#01020D"/>
  <path d="M144.743 0H70.0303L99.2939 44.4445H144.743C146.136 44.4433 147.472 43.89 148.457 42.9057C149.443 41.9215 149.998 40.5868 150 39.1942V5.25256C149.998 3.85964 149.443 2.52449 148.458 1.53986C147.472 0.555228 146.136 0.0014692 144.743 0Z" fill="#FFFEFB"/>
  <path d="M59.66 35.0141H57.1353L55.7523 30.6696H50.9453L49.6279 35.0141H47.1699L51.9336 20.2233H54.8752L59.66 35.0141ZM55.3355 28.8468L54.0848 24.9847C53.9525 24.5901 53.7035 23.661 53.3388 22.1983H53.2943C53.1476 22.8274 52.913 23.7565 52.5917 24.9847L51.3622 28.8468H55.3355ZM71.8866 29.5504C71.8866 31.3642 71.3941 32.7979 70.408 33.8504C69.5253 34.7874 68.4281 35.2553 67.1196 35.2553C65.7066 35.2553 64.6905 34.7518 64.0735 33.7426V39.3386H61.7033V27.8543C61.7033 26.7151 61.6733 25.547 61.6155 24.3489H63.7L63.8323 26.0394H63.8767C64.6672 24.7657 65.8667 24.1289 67.4765 24.1289C68.7349 24.1289 69.7855 24.6257 70.6259 25.6204C71.4653 26.6173 71.8866 27.9266 71.8866 29.5504ZM69.472 29.6371C69.472 28.599 69.2385 27.7432 68.7694 27.0686C68.2569 26.3673 67.5687 26.0161 66.706 26.0161C66.1213 26.0161 65.5899 26.2117 65.1152 26.5973C64.6394 26.9863 64.3281 27.4942 64.1825 28.1233C64.1174 28.3586 64.0805 28.6007 64.0724 28.8446V30.624C64.0724 31.3987 64.3103 32.0533 64.7861 32.589C65.2619 33.1225 65.88 33.3903 66.6405 33.3903C67.5332 33.3903 68.228 33.0447 68.7249 32.3589C69.223 31.6709 69.472 30.764 69.472 29.6371ZM84.1566 29.5504C84.1566 31.3642 83.6641 32.7979 82.678 33.8504C81.7942 34.7874 80.6981 35.2553 79.3885 35.2553C77.9755 35.2553 76.9594 34.7518 76.3424 33.7426V39.3386H73.9722V27.8543C73.9722 26.7151 73.9422 25.547 73.8844 24.3489H75.9688L76.1011 26.0394H76.1456C76.9349 24.7657 78.1344 24.1289 79.7453 24.1289C81.0027 24.1289 82.0532 24.6257 82.8959 25.6204C83.7341 26.6173 84.1566 27.9266 84.1566 29.5504ZM81.7408 29.6371C81.7408 28.599 81.5063 27.7432 81.0371 27.0686C80.5246 26.3673 79.8387 26.0161 78.976 26.0161C78.3913 26.0161 77.8599 26.2117 77.3829 26.5973C76.9071 26.9863 76.5969 27.4942 76.4513 28.1233C76.379 28.4167 76.3401 28.6557 76.3401 28.8446V30.624C76.3401 31.3987 76.5792 32.0533 77.0527 32.589C77.5286 33.1213 78.1467 33.3903 78.9093 33.3903C79.8031 33.3903 80.4979 33.0447 80.9938 32.3589C81.4918 31.6709 81.7408 30.764 81.7408 29.6371ZM97.8751 30.8652C97.8751 32.1244 97.4349 33.148 96.56 33.9382C95.5972 34.8007 94.2532 35.233 92.53 35.233C90.938 35.233 89.6618 34.9263 88.6991 34.3117L89.2471 32.3367C90.2866 32.9524 91.4283 33.2592 92.6712 33.2592C93.565 33.2592 94.2598 33.0569 94.7557 32.6557C95.2526 32.2533 95.5038 31.7154 95.5038 31.0441C95.5038 30.4428 95.2959 29.9394 94.8879 29.5292C94.4777 29.1202 93.7996 28.739 92.8468 28.3889C90.2566 27.4231 88.9603 26.0105 88.9603 24.1522C88.9603 22.9385 89.4183 21.9449 90.3321 21.168C91.246 20.3923 92.4577 20.0044 93.9652 20.0044C95.3115 20.0044 96.4332 20.2389 97.3237 20.7068L96.729 22.6385C95.8907 22.185 94.9447 21.9583 93.8863 21.9583C93.0503 21.9583 92.3944 22.1639 91.9252 22.5729C91.5306 22.9385 91.3305 23.3842 91.3305 23.9133C91.3305 24.4967 91.5584 24.9813 92.0119 25.3614C92.4055 25.7115 93.1237 26.0927 94.162 26.5017C95.436 27.0152 96.3721 27.6132 96.9713 28.3C97.575 28.9869 97.8751 29.8438 97.8751 30.8652ZM105.732 26.1272H103.119V31.3053C103.119 32.6223 103.579 33.2792 104.502 33.2792C104.926 33.2792 105.277 33.2436 105.555 33.1691L105.62 34.9685C105.154 35.143 104.539 35.2308 103.777 35.2308C102.841 35.2308 102.11 34.9452 101.582 34.3739C101.056 33.8026 100.791 32.8457 100.791 31.4987V26.1227H99.2347V24.3445H100.791V22.3917L103.119 21.6893V24.3445H105.732V26.1272ZM117.496 29.5937C117.496 31.233 117.027 32.579 116.091 33.6315C115.111 34.7151 113.808 35.2553 112.184 35.2553C110.616 35.2553 109.37 34.7362 108.441 33.6993C107.511 32.6601 107.047 31.3509 107.047 29.7715C107.047 28.1189 107.527 26.7651 108.484 25.7126C109.444 24.659 110.735 24.1322 112.36 24.1322C113.925 24.1322 115.182 24.6523 116.134 25.6904C117.043 26.6974 117.496 27.9977 117.496 29.5937ZM115.039 29.6482C115.039 28.6712 114.828 27.8332 114.404 27.1319C113.907 26.285 113.196 25.8616 112.274 25.8616C111.325 25.8616 110.596 26.285 110.101 27.1319C109.676 27.8332 109.465 28.6857 109.465 29.6926C109.465 30.6707 109.676 31.5109 110.101 32.21C110.613 33.0569 111.328 33.4803 112.254 33.4803C113.16 33.4803 113.87 33.048 114.384 32.1889C114.82 31.4709 115.039 30.6273 115.039 29.6482ZM125.203 26.4328C124.957 26.3883 124.707 26.3664 124.456 26.3673C123.622 26.3673 122.978 26.6807 122.524 27.312C122.13 27.8677 121.933 28.5701 121.933 29.4181V35.0141H119.562V27.7076C119.565 26.5881 119.542 25.4686 119.493 24.35H121.558L121.645 26.3906H121.71C121.961 25.6893 122.355 25.1236 122.895 24.7001C123.39 24.3301 123.991 24.1297 124.608 24.1289C124.827 24.1289 125.025 24.1444 125.201 24.1722L125.203 26.4328ZM135.803 29.1769C135.809 29.5371 135.78 29.8971 135.717 30.2517H128.606C128.633 31.3053 128.978 32.1122 129.638 32.6679C130.237 33.1636 131.012 33.4125 131.964 33.4125C133.016 33.4125 133.977 33.2458 134.841 32.9091L135.212 34.5529C134.203 34.993 133.011 35.2119 131.636 35.2119C129.981 35.2119 128.683 34.7251 127.738 33.7537C126.795 32.7813 126.323 31.4742 126.323 29.8371C126.323 28.23 126.762 26.8907 127.641 25.8227C128.562 24.6824 129.806 24.1122 131.371 24.1122C132.909 24.1122 134.072 24.6824 134.863 25.8227C135.489 26.7262 135.803 27.8466 135.803 29.1769ZM133.543 28.5623C133.56 27.8588 133.404 27.2531 133.083 26.7407C132.673 26.0805 132.041 25.7515 131.195 25.7515C130.421 25.7515 129.789 26.0727 129.309 26.7174C128.914 27.2297 128.68 27.8454 128.607 28.5601L133.543 28.5623Z" fill="#01020D"/>
  <path d="M50.2616 14.9941C49.6024 14.9941 49.0321 14.9619 48.5574 14.9074V7.75655C49.2213 7.65401 49.8922 7.60347 50.564 7.60539C53.2822 7.60539 54.5339 8.94243 54.5339 11.1219C54.5339 13.6359 53.0554 14.9941 50.2616 14.9941ZM50.6596 8.52231C50.2928 8.52231 49.9804 8.54454 49.7213 8.59789V14.0338C49.8614 14.0561 50.1304 14.0661 50.5084 14.0661C52.2894 14.0661 53.3033 13.0525 53.3033 11.1542C53.3033 9.46146 52.3861 8.52231 50.6596 8.52231ZM58.4349 15.0486C56.903 15.0486 55.9102 13.9049 55.9102 12.3523C55.9102 10.734 56.9241 9.58038 58.5216 9.58038C60.0314 9.58038 61.0463 10.6696 61.0463 12.2667C61.0463 13.9049 60.0002 15.0486 58.4349 15.0486ZM58.4794 10.4317C57.6378 10.4317 57.0987 11.2186 57.0987 12.3189C57.0987 13.3981 57.649 14.185 58.4683 14.185C59.2876 14.185 59.8379 13.3436 59.8379 12.2967C59.8379 11.2297 59.2987 10.4317 58.4794 10.4317ZM69.7822 9.68819L68.1424 14.9296H67.074L66.3948 12.6535C66.2259 12.0967 66.0853 11.5317 65.9735 10.9608H65.9512C65.8656 11.532 65.7033 12.1044 65.531 12.6535L64.8084 14.9296H63.7289L62.1859 9.68819H63.3832L63.9768 12.18C64.1169 12.7735 64.2347 13.3336 64.3326 13.8627H64.3548C64.4404 13.4214 64.5805 12.8702 64.7861 12.1911L65.531 9.6893H66.4804L67.193 12.1378C67.3653 12.7313 67.5054 13.3136 67.6143 13.8638H67.6455C67.7211 13.3247 67.84 12.7524 68.0012 12.1378L68.6382 9.6893L69.7822 9.68819ZM75.8188 14.9296H74.6537V11.9199C74.6537 10.993 74.298 10.5284 73.5965 10.5284C72.9061 10.5284 72.4314 11.1219 72.4314 11.8121V14.9296H71.2663V11.1864C71.2663 10.7229 71.2552 10.2261 71.223 9.68708H72.248L72.3024 10.4962H72.3347C72.6482 9.93604 73.2841 9.58038 73.9967 9.58038C75.0973 9.58038 75.8199 10.4217 75.8199 11.791L75.8188 14.9296ZM79.0316 14.9296H77.8654V7.28308H79.0316V14.9296ZM83.2795 15.0486C81.7487 15.0486 80.7548 13.9049 80.7548 12.3523C80.7548 10.734 81.7687 9.58038 83.3651 9.58038C84.8759 9.58038 85.8898 10.6696 85.8898 12.2667C85.8909 13.9049 84.8437 15.0486 83.2795 15.0486ZM83.3228 10.4317C82.4813 10.4317 81.9421 11.2186 81.9421 12.3189C81.9421 13.3981 82.4935 14.185 83.3106 14.185C84.1311 14.185 84.6802 13.3436 84.6802 12.2967C84.6813 11.2297 84.1433 10.4317 83.3228 10.4317ZM90.4834 14.9296L90.3989 14.3261H90.3678C90.012 14.8118 89.4928 15.0486 88.8347 15.0486C87.8953 15.0486 87.2283 14.3906 87.2283 13.5059C87.2283 12.2122 88.35 11.5431 90.2922 11.5431V11.4465C90.2922 10.7563 89.9264 10.4106 89.2038 10.4106C88.6868 10.4106 88.2333 10.5406 87.8342 10.7996L87.5974 10.0338C88.0821 9.73153 88.6868 9.58038 89.3972 9.58038C90.7669 9.58038 91.4583 10.3028 91.4583 11.7488V13.6793C91.4583 14.2083 91.4817 14.6184 91.5339 14.9307L90.4834 14.9296ZM90.3233 12.3189C89.0293 12.3189 88.38 12.6323 88.38 13.3759C88.38 13.926 88.7146 14.195 89.1793 14.195C89.7719 14.195 90.3233 13.7426 90.3233 13.128V12.3189ZM97.1159 14.9296L97.0614 14.0883H97.0291C96.6945 14.724 96.132 15.0486 95.346 15.0486C94.082 15.0486 93.1459 13.9371 93.1459 12.3734C93.1459 10.734 94.1164 9.57927 95.4416 9.57927C96.1431 9.57927 96.64 9.816 96.9202 10.2917H96.9435V7.28308H98.1097V13.517C98.1097 14.0238 98.1219 14.4984 98.1531 14.9296H97.1159ZM96.9435 11.8455C96.9435 11.1119 96.4577 10.4862 95.7162 10.4862C94.8524 10.4862 94.3243 11.252 94.3243 12.33C94.3243 13.387 94.8724 14.1105 95.6929 14.1105C96.4255 14.1105 96.9435 13.4737 96.9435 12.719V11.8455ZM105.504 15.0486C103.973 15.0486 102.98 13.9049 102.98 12.3523C102.98 10.734 103.994 9.58038 105.59 9.58038C107.101 9.58038 108.115 10.6696 108.115 12.2667C108.116 13.9049 107.07 15.0486 105.504 15.0486ZM105.547 10.4317C104.707 10.4317 104.167 11.2186 104.167 12.3189C104.167 13.3981 104.718 14.185 105.536 14.185C106.356 14.185 106.906 13.3436 106.906 12.2967C106.908 11.2297 106.369 10.4317 105.547 10.4317ZM114.381 14.9296H113.215V11.9199C113.215 10.993 112.859 10.5284 112.157 10.5284C111.467 10.5284 110.993 11.1219 110.993 11.8121V14.9296H109.827V11.1864C109.827 10.7229 109.816 10.2261 109.784 9.68708H110.809L110.863 10.4962H110.896C111.208 9.93604 111.845 9.57927 112.556 9.57927C113.657 9.57927 114.381 10.4206 114.381 11.7899V14.9296ZM122.219 10.5618H120.938V13.1069C120.938 13.7549 121.162 14.0783 121.616 14.0783C121.821 14.0783 121.994 14.0561 122.133 14.0238L122.165 14.9085C121.939 14.9952 121.637 15.0386 121.261 15.0386C120.343 15.0386 119.794 14.5317 119.794 13.2047V10.5618H119.029V9.68819H119.794V8.72792L120.938 8.38227V9.68708H122.219V10.5618ZM128.387 14.9296H127.223V11.9421C127.223 11.0041 126.869 10.5295 126.166 10.5295C125.562 10.5295 125 10.9396 125 11.7699V14.9296H123.836V7.28308H125V10.4317H125.023C125.39 9.86046 125.921 9.57927 126.6 9.57927C127.709 9.57927 128.387 10.4417 128.387 11.8121V14.9296ZM134.706 12.589H131.21C131.232 13.5815 131.889 14.1416 132.862 14.1416C133.379 14.1416 133.855 14.055 134.275 13.8938L134.456 14.7029C133.96 14.9185 133.377 15.0263 132.697 15.0263C131.058 15.0263 130.087 13.9905 130.087 12.3845C130.087 10.7774 131.081 9.56927 132.566 9.56927C133.906 9.56927 134.746 10.5618 134.746 12.0611C134.754 12.238 134.74 12.4152 134.706 12.589ZM133.638 11.7588C133.638 10.9496 133.23 10.3784 132.485 10.3784C131.816 10.3784 131.287 10.9608 131.211 11.7588H133.638Z" fill="#01020D"/>
</svg>
</div>
<div className='Down'>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
<path d="M8.0796 8.28008V1.42831C8.07956 1.24853 8.13435 1.0729 8.23682 0.924287C8.3393 0.775676 8.48472 0.660973 8.65414 0.595111C9.05513 0.44147 9.36933 0.473971 9.59675 0.692613C9.75834 0.846254 9.84213 1.10626 9.84811 1.47263C9.88402 3.83042 9.89001 6.19412 9.86607 8.56373C9.86456 8.65358 9.89252 8.74151 9.94577 8.81439C9.99902 8.88727 10.0747 8.9412 10.1616 8.96811C10.2484 8.99503 10.3417 8.9935 10.4276 8.96376C10.5135 8.93401 10.5873 8.87764 10.6381 8.80305C11.3443 7.75712 12.2181 6.87073 13.2595 6.14389C13.3396 6.07696 13.4324 6.02628 13.5324 5.99473C13.6324 5.96318 13.7377 5.9514 13.8423 5.96004C13.9469 5.96868 14.0488 5.99758 14.1421 6.0451C14.2354 6.09261 14.3183 6.15781 14.3861 6.23696C14.4539 6.31612 14.5052 6.40768 14.5372 6.50642C14.5691 6.60516 14.5811 6.70915 14.5723 6.81245C14.5635 6.91574 14.5343 7.01633 14.4862 7.10845C14.438 7.20058 14.372 7.28245 14.2918 7.34938L9.39028 12.2334C9.33876 12.2846 9.27769 12.3255 9.21055 12.3536C9.14341 12.3818 9.07153 12.3967 8.999 12.3976C8.92647 12.3984 8.85471 12.3851 8.78784 12.3584C8.72097 12.3318 8.66028 12.2923 8.60926 12.2422L3.71667 7.43802C3.61322 7.33699 3.5404 7.20943 3.50644 7.06973C3.47247 6.93003 3.47871 6.78374 3.52444 6.64735C3.57018 6.51096 3.65359 6.3899 3.76527 6.29781C3.87696 6.20573 4.01248 6.14628 4.15656 6.12616L4.65928 6.05525C4.82087 6.03753 4.96151 6.0848 5.08121 6.19708L7.40631 8.55486C7.46154 8.60901 7.53174 8.64583 7.6081 8.66072C7.68446 8.6756 7.76356 8.66788 7.83549 8.63853C7.90742 8.60917 7.96896 8.55949 8.01239 8.49572C8.05582 8.43195 8.0792 8.35693 8.0796 8.28008Z" fill="black"/>
<path d="M16.0154 16.222C16.2428 15.1406 16.2877 14.0563 16.15 12.969C16.0244 11.994 16.3625 11.4621 17.1645 11.3735C17.2724 11.3619 17.3815 11.3735 17.4845 11.4074C17.5875 11.4413 17.6818 11.4968 17.7611 11.57C17.8403 11.6432 17.9027 11.7324 17.9438 11.8316C17.9849 11.9308 18.0039 12.0376 17.9993 12.1447L17.8378 16.5766C17.8191 17.0931 17.5981 17.5824 17.2213 17.9412C16.8445 18.3 16.3414 18.5004 15.8179 18.5H2.04683C1.77728 18.5001 1.51039 18.4475 1.26147 18.3454C1.01255 18.2433 0.786514 18.0936 0.596332 17.905C0.406151 17.7164 0.255572 17.4926 0.153239 17.2463C0.0509071 17.0001 -0.00116254 16.7364 1.96887e-05 16.4702L0.0089969 11.9851C0.0079578 11.8814 0.0331962 11.7793 0.0824714 11.6876C0.131747 11.596 0.203534 11.5178 0.29146 11.4599C0.379386 11.402 0.480731 11.3663 0.586495 11.3559C0.69226 11.3454 0.799173 11.3606 0.897742 11.4001L1.31967 11.5774C1.57702 11.6837 1.71168 11.8758 1.72365 12.1535L1.91217 16.1157C1.91912 16.2803 1.99028 16.4359 2.11075 16.5498C2.23122 16.6638 2.39167 16.7274 2.55853 16.7273H15.396C15.5427 16.7277 15.685 16.6774 15.7981 16.5852C15.9113 16.4929 15.9881 16.3644 16.0154 16.222Z" fill="black"/>
</svg>
<p className='Ptitle'>تحميل مباشر</p>
</div>
      </div>
      </div>
      </div>

  )
}

export default Complaints
