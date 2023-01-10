import React from "react"
import NavLogoProps from "./NavLogo.model"

const SettingsNavLogo: React.FC<NavLogoProps> = ({ override, fill }) => {
  return (
    <div>
      <svg
        className={override}
        width='27'
        height='27'
        viewBox='0 0 27 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.5818 17.1818C22.4184 17.552 22.3697 17.9626 22.4419 18.3607C22.5141 18.7588 22.7039 19.1262 22.9868 19.4155L23.0605 19.4891C23.2887 19.7171 23.4697 19.9878 23.5932 20.2857C23.7168 20.5837 23.7803 20.9031 23.7803 21.2257C23.7803 21.5482 23.7168 21.8676 23.5932 22.1656C23.4697 22.4636 23.2887 22.7343 23.0605 22.9623C22.8325 23.1905 22.5618 23.3715 22.2638 23.4951C21.9658 23.6186 21.6464 23.6822 21.3239 23.6822C21.0013 23.6822 20.6819 23.6186 20.3839 23.4951C20.0859 23.3715 19.8152 23.1905 19.5873 22.9623L19.5136 22.8886C19.2244 22.6057 18.857 22.4159 18.4589 22.3437C18.0608 22.2715 17.6502 22.3203 17.28 22.4836C16.917 22.6392 16.6074 22.8975 16.3894 23.2268C16.1713 23.5561 16.0543 23.9419 16.0527 24.3368V24.5455C16.0527 25.1964 15.7941 25.8208 15.3338 26.2811C14.8735 26.7414 14.2492 27 13.5982 27C12.9472 27 12.3229 26.7414 11.8626 26.2811C11.4022 25.8208 11.1436 25.1964 11.1436 24.5455V24.435C11.1341 24.0288 11.0026 23.6348 10.7663 23.3043C10.5299 22.9738 10.1995 22.7221 9.81818 22.5818C9.44802 22.4184 9.0374 22.3697 8.63928 22.4419C8.24116 22.5141 7.87379 22.7039 7.58455 22.9868L7.51091 23.0605C7.28295 23.2887 7.01224 23.4697 6.71426 23.5932C6.41629 23.7168 6.09688 23.7803 5.77432 23.7803C5.45175 23.7803 5.13235 23.7168 4.83437 23.5932C4.5364 23.4697 4.26569 23.2887 4.03773 23.0605C3.80951 22.8325 3.62847 22.5618 3.50494 22.2638C3.38142 21.9658 3.31784 21.6464 3.31784 21.3239C3.31784 21.0013 3.38142 20.6819 3.50494 20.3839C3.62847 20.0859 3.80951 19.8152 4.03773 19.5873L4.11136 19.5136C4.3943 19.2244 4.58409 18.857 4.65628 18.4589C4.72847 18.0608 4.67973 17.6502 4.51636 17.28C4.36079 16.917 4.10247 16.6074 3.77321 16.3894C3.44394 16.1713 3.0581 16.0543 2.66318 16.0527H2.45455C1.80356 16.0527 1.17924 15.7941 0.71892 15.3338C0.258603 14.8735 0 14.2492 0 13.5982C0 12.9472 0.258603 12.3229 0.71892 11.8626C1.17924 11.4022 1.80356 11.1436 2.45455 11.1436H2.565C2.97122 11.1341 3.36519 11.0026 3.69569 10.7663C4.02618 10.5299 4.27792 10.1995 4.41818 9.81818C4.58155 9.44802 4.63028 9.0374 4.5581 8.63928C4.48591 8.24116 4.29611 7.87379 4.01318 7.58455L3.93955 7.51091C3.71133 7.28295 3.53029 7.01224 3.40676 6.71426C3.28324 6.41629 3.21966 6.09688 3.21966 5.77432C3.21966 5.45175 3.28324 5.13235 3.40676 4.83437C3.53029 4.5364 3.71133 4.26569 3.93955 4.03773C4.16751 3.80951 4.43821 3.62847 4.73619 3.50494C5.03417 3.38142 5.35357 3.31784 5.67614 3.31784C5.9987 3.31784 6.3181 3.38142 6.61608 3.50494C6.91406 3.62847 7.18477 3.80951 7.41273 4.03773L7.48636 4.11136C7.77561 4.3943 8.14297 4.58409 8.5411 4.65628C8.93922 4.72847 9.34984 4.67973 9.72 4.51636H9.81818C10.1812 4.36079 10.4907 4.10247 10.7088 3.77321C10.9269 3.44394 11.0439 3.0581 11.0455 2.66318V2.45455C11.0455 1.80356 11.3041 1.17924 11.7644 0.71892C12.2247 0.258603 12.849 0 13.5 0C14.151 0 14.7753 0.258603 15.2356 0.71892C15.6959 1.17924 15.9545 1.80356 15.9545 2.45455V2.565C15.9561 2.95992 16.0731 3.34576 16.2912 3.67503C16.5093 4.00429 16.8188 4.26261 17.1818 4.41818C17.552 4.58155 17.9626 4.63028 18.3607 4.5581C18.7588 4.48591 19.1262 4.29611 19.4155 4.01318L19.4891 3.93955C19.7171 3.71133 19.9878 3.53029 20.2857 3.40676C20.5837 3.28324 20.9031 3.21966 21.2257 3.21966C21.5482 3.21966 21.8676 3.28324 22.1656 3.40676C22.4636 3.53029 22.7343 3.71133 22.9623 3.93955C23.1905 4.16751 23.3715 4.43821 23.4951 4.73619C23.6186 5.03417 23.6822 5.35357 23.6822 5.67614C23.6822 5.9987 23.6186 6.3181 23.4951 6.61608C23.3715 6.91406 23.1905 7.18477 22.9623 7.41273L22.8886 7.48636C22.6057 7.77561 22.4159 8.14297 22.3437 8.5411C22.2715 8.93922 22.3203 9.34984 22.4836 9.72V9.81818C22.6392 10.1812 22.8975 10.4907 23.2268 10.7088C23.5561 10.9269 23.9419 11.0439 24.3368 11.0455H24.5455C25.1964 11.0455 25.8208 11.3041 26.2811 11.7644C26.7414 12.2247 27 12.849 27 13.5C27 14.151 26.7414 14.7753 26.2811 15.2356C25.8208 15.6959 25.1964 15.9545 24.5455 15.9545H24.435C24.0401 15.9561 23.6542 16.0731 23.325 16.2912C22.9957 16.5093 22.7374 16.8188 22.5818 17.1818V17.1818Z'
          fill={fill}
        />
        <path
          d='M13.4443 17.0835C15.6535 17.0835 17.4443 15.3486 17.4443 13.2085C17.4443 11.0684 15.6535 9.3335 13.4443 9.3335C11.2352 9.3335 9.44434 11.0684 9.44434 13.2085C9.44434 15.3486 11.2352 17.0835 13.4443 17.0835Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default SettingsNavLogo