import React from "react";
import "./Sociallinkcomponent.css";

export default function Sociallinkcomponent() {
  return (
    <div class="social-links" id="S-links">
      <a href="#" class="social-link">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.23077 16.6364C9.23077 17.0152 9.17067 17.4034 9.05048 17.8011C8.93029 18.1989 8.72356 18.5587 8.43029 18.8807C8.13702 19.2027 7.78846 19.3636 7.38462 19.3636C6.98077 19.3636 6.63221 19.2027 6.33894 18.8807C6.04567 18.5587 5.83894 18.1989 5.71875 17.8011C5.59856 17.4034 5.53846 17.0152 5.53846 16.6364C5.53846 16.2576 5.59856 15.8693 5.71875 15.4716C5.83894 15.0739 6.04567 14.714 6.33894 14.392C6.63221 14.0701 6.98077 13.9091 7.38462 13.9091C7.78846 13.9091 8.13702 14.0701 8.43029 14.392C8.72356 14.714 8.93029 15.0739 9.05048 15.4716C9.17067 15.8693 9.23077 16.2576 9.23077 16.6364ZM18.4615 16.6364C18.4615 17.0152 18.4014 17.4034 18.2813 17.8011C18.1611 18.1989 17.9543 18.5587 17.6611 18.8807C17.3678 19.2027 17.0192 19.3636 16.6154 19.3636C16.2115 19.3636 15.863 19.2027 15.5697 18.8807C15.2764 18.5587 15.0697 18.1989 14.9495 17.8011C14.8293 17.4034 14.7692 17.0152 14.7692 16.6364C14.7692 16.2576 14.8293 15.8693 14.9495 15.4716C15.0697 15.0739 15.2764 14.714 15.5697 14.392C15.863 14.0701 16.2115 13.9091 16.6154 13.9091C17.0192 13.9091 17.3678 14.0701 17.6611 14.392C17.9543 14.714 18.1611 15.0739 18.2813 15.4716C18.4014 15.8693 18.4615 16.2576 18.4615 16.6364ZM20.7692 16.6364C20.7692 15.5 20.4375 14.5341 19.774 13.7386C19.1106 12.9432 18.2115 12.5455 17.0769 12.5455C16.6827 12.5455 15.7452 12.6449 14.2644 12.8438C13.5817 12.9479 12.8269 13 12 13C11.1731 13 10.4183 12.9479 9.73558 12.8438C8.27404 12.6449 7.33654 12.5455 6.92308 12.5455C5.78846 12.5455 4.88942 12.9432 4.22596 13.7386C3.5625 14.5341 3.23077 15.5 3.23077 16.6364C3.23077 17.4697 3.38462 18.1965 3.69231 18.8168C4 19.437 4.38942 19.9247 4.86058 20.2798C5.33173 20.6349 5.91827 20.919 6.62019 21.1321C7.32212 21.3452 7.99519 21.4848 8.63942 21.5511C9.28365 21.6174 10 21.6506 10.7885 21.6506H13.2115C14 21.6506 14.7163 21.6174 15.3606 21.5511C16.0048 21.4848 16.6779 21.3452 17.3798 21.1321C18.0817 20.919 18.6683 20.6349 19.1394 20.2798C19.6106 19.9247 20 19.437 20.3077 18.8168C20.6154 18.1965 20.7692 17.4697 20.7692 16.6364ZM24 14.1364C24 16.0966 23.7067 17.6638 23.1202 18.8381C22.7548 19.5672 22.2476 20.197 21.5986 20.7273C20.9495 21.2576 20.2716 21.6648 19.5649 21.9489C18.8582 22.233 18.0409 22.4579 17.113 22.6236C16.1851 22.7893 15.3606 22.8935 14.6394 22.9361C13.9183 22.9787 13.1154 23 12.2308 23C11.4808 23 10.7981 22.9858 10.1827 22.9574C9.56731 22.929 8.85817 22.8698 8.05529 22.7798C7.2524 22.6899 6.51923 22.5478 5.85577 22.3537C5.19231 22.1596 4.53365 21.9157 3.87981 21.6222C3.22596 21.3286 2.64423 20.9451 2.13462 20.4716C1.625 19.9981 1.21154 19.4536 0.894231 18.8381C0.298077 17.6733 0 16.1061 0 14.1364C0 11.892 0.653846 10.017 1.96154 8.51136C1.70192 7.73485 1.57212 6.92992 1.57212 6.09659C1.57212 4.99811 1.81731 3.96591 2.30769 3C3.34615 3 4.25962 3.18703 5.04808 3.56108C5.83654 3.93513 6.74519 4.51989 7.77404 5.31534C9.1875 4.9839 10.6731 4.81818 12.2308 4.81818C13.6538 4.81818 15 4.9697 16.2692 5.27273C17.2788 4.49621 18.1779 3.9233 18.9663 3.55398C19.7548 3.18466 20.6635 3 21.6923 3C22.1827 3.96591 22.4279 4.99811 22.4279 6.09659C22.4279 6.92045 22.2981 7.71591 22.0385 8.48295C23.3462 9.99811 24 11.8826 24 14.1364Z"
              fill="#8E9CA1"
            ></path>
          </svg>
        </div>
      </a>
      <a href="#" class="social-link">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M7.5456 21.7488C16.6032 21.7488 21.5568 14.2464 21.5568 7.73756C21.5568 7.52636 21.5568 7.31036 21.5568 7.09916C22.5153 6.40234 23.3425 5.54099 24 4.55516C23.1015 4.95259 22.1485 5.21308 21.1728 5.32796C22.2005 4.71318 22.9698 3.74599 23.3376 2.60636C22.3701 3.1802 21.3117 3.58442 20.208 3.80156C19.4651 3.0131 18.4832 2.49129 17.4141 2.31681C16.3449 2.14233 15.248 2.32489 14.293 2.83626C13.338 3.34764 12.5781 4.15935 12.1306 5.14593C11.6832 6.1325 11.5732 7.239 11.8176 8.29436C9.85999 8.19608 7.94493 7.68718 6.19677 6.8007C4.44861 5.91422 2.90645 4.66997 1.6704 3.14876C1.04195 4.23291 0.849978 5.51571 1.13351 6.73635C1.41705 7.95698 2.15481 9.02382 3.1968 9.71996C2.41389 9.70209 1.64675 9.49631 0.96 9.11996V9.18236C0.959686 10.3196 1.35296 11.4219 2.07305 12.3021C2.79313 13.1823 3.79565 13.7862 4.9104 14.0112C4.18593 14.2094 3.42567 14.2389 2.688 14.0976C3.00287 15.0753 3.6153 15.9303 4.43973 16.543C5.26416 17.1557 6.2594 17.4956 7.2864 17.5152C5.54286 18.8856 3.38888 19.6295 1.1712 19.6272C0.779447 19.6213 0.388376 19.5924 0 19.5408C2.25078 20.9865 4.87049 21.7531 7.5456 21.7488"
                fill="#8E9CA1"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="18" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </a>
      <a href="#" class="social-link">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.68801 6.31665H0.633606V23.9998H5.68801V6.31665Z"
              fill="#8E9CA1"
            ></path>
            <path
              d="M17.6832 6.31665C14.16 6.31665 13.5504 7.60305 13.2624 8.84145V6.31665H8.21277V23.9998H13.2624V13.8959C13.2624 12.2591 14.1504 11.3711 15.7872 11.3711C17.424 11.3711 18.312 12.2399 18.312 13.8959V23.9998H23.3664V15.1582C23.3664 10.1039 22.7088 6.31665 17.6832 6.31665Z"
              fill="#8E9CA1"
            ></path>
            <path
              d="M3.15841 5.0496C4.55281 5.0496 5.68321 3.91921 5.68321 2.5248C5.68321 1.13039 4.55281 0 3.15841 0C1.764 0 0.633606 1.13039 0.633606 2.5248C0.633606 3.91921 1.764 5.0496 3.15841 5.0496Z"
              fill="#8E9CA1"
            ></path>
          </svg>
        </div>
      </a>
      <a href="#" class="social-link">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M13.8576 23.9999V13.0511H17.5296L18.0816 8.78391H13.8576V6.06231C13.8576 4.82871 14.1984 3.98391 15.9744 3.98391H18.24V0.143913C17.1442 0.0366488 16.0434 -0.011421 14.9424 -8.69233e-05C11.6832 -8.69233e-05 9.45121 1.98711 9.45121 5.63991V8.78391H5.76001V13.0511H9.44641V23.9999H13.8576Z"
                fill="#8E9CA1"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </a>
      <a href="#" class="social-link">
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172009 16.953 0.0789456C15.2959 -0.0141172 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141172 7.04652 0.0789456C5.12526 0.172009 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12V12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864V7.02864Z"
              fill="#8E9CA1"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  );
}