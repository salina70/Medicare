import React from 'react'

export function FooterFixed() {
  return (
    <>
    <div className='fixed hidden absolute bottom-0 z-10 bg-black h-15 justify-around items-center flex w-full foo-outer'>
        <div className="foo">
            <i class="fa-solid fa-house"></i>
        </div>
        <div className="foo">
            <i class="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="foo">
            <i class="fa-solid fa-bell"></i>
        </div>
        <div className="foo">
            <i class="fa-regular fa-user"></i>
        </div>
    </div>
    </>
  )
}

export default FooterFixed