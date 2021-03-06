import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { Card } from 'antd'

import { useRootSelector, RootState } from 'os/store'

import storePanel1 from 'os/static/images/store-panel1.png'
import storePanel2 from 'os/static/images/store-panel2.png'
import storePanel3 from 'os/static/images/store-panel3.png'
import storePanel4 from 'os/static/images/store-panel4.png'

import './index.less'

const PAGE_PADDING = 20
const PANELS = [storePanel1, storePanel2, storePanel3, storePanel4]

const BannerTop = () => {
  const {
    ui: { width, infix },
  } = useRootSelector((state: RootState) => state)

  const isMobile = infix === 'xs'

  return (
    <Swiper
      className="hero-banner"
      slidesPerView={1}
      navigation={!isMobile}
      pagination={{
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return `<span class="${className} indicator" key="${index}"></span>`
        },
      }}
      modules={[Navigation, Pagination]}
    >
      {PANELS.map((banner, index) => {
        return (
          <SwiperSlide
            style={{
              height: Math.min(1920 / 3, (width - PAGE_PADDING * 2) / 3),
              cursor: 'pointer',
            }}
            key={index}
          >
            <Card
              style={{
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(${banner})`,
                boxShadow: 'none',
              }}
              bordered={false}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default BannerTop
