import React from 'react'
import styled, { css } from 'styled-components'
import { Parallax } from 'react-parallax'
import Section from '~/layout/Section'
import churchImage from '~/../static/images/Footer_Image.jpg'

export default () => {
  return (
    <>
      <DemoSection>
        <h1>Parallax</h1>
        <p className="emphasized">
          This is a demo of a simple parallax effect. Scroll down to see!
        </p>
        <Lorem />
      </DemoSection>
      <Parallax bgImage={churchImage} strength={500}>
        <Splash>
          <h1>Take a look at our awesome congregation!</h1>
        </Splash>
      </Parallax>
      <DemoSection color="#738637">
        <Lorem />
      </DemoSection>
      <Parallax bgImage={churchImage} strength={500} blur={5}>
        <Splash>
          <h1>This one is blurred for readability</h1>
        </Splash>
      </Parallax>
      <DemoSection>
        <Lorem />
      </DemoSection>
    </>
  )
}

const DemoSection = styled(Section)`
  p.emphasized {
    font-weight: bold;
  }
`

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  h1 {
    font-size: 3em;
  }
`

const Lorem = () => (
  <>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    <p>
      Blandit ut, molestie sed, fringilla non, odio. Nulla porta, tortor non
      suscipit gravida, velit enim aliquam quam, nec condimentum orci augue vel
      magna. Nulla facilisi. Donec ipsum enim, congue in, tempus id, pulvinar
      sagittis, leo. Donec et elit in nunc blandit auctor. Nulla congue urna
      quis lorem. Nam rhoncus pede sed nunc. Etiam vitae quam. Fusce feugiat
      pede vel quam. In et augue.
    </p>
    <p>
      Phasellus mollis dictum nulla. Integer vitae neque vitae eros fringilla
      rutrum. Vestibulum in pede adipiscing mi dapibus condimentum. Etiam felis
      risus, condimentum in, malesuada eget, pretium ut, sapien. Suspendisse
      placerat lectus venenatis lorem. Sed accumsan aliquam enim. Etiam
      hendrerit, metus eu semper rutrum, nisl elit pharetra purus, non interdum
      nibh enim eget augue. Sed mauris. Nam varius odio a sapien. Aenean rutrum
      dictum sapien. Fusce pharetra elementum ligula. Nunc eu mi non augue
      iaculis facilisis. Morbi interdum. Donec nisi arcu, rhoncus ac, vestibulum
      ut, pellentesque nec, risus. Maecenas tempus facilisis neque. Nulla mattis
      odio vitae tortor. Fusce iaculis. Aliquam rhoncus, diam quis tincidunt
      facilisis, sem quam luctus augue, ut posuere neque sem vitae neque.
    </p>
    <p>
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nunc faucibus posuere turpis. Sed laoreet, est.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    <p>
      Blandit ut, molestie sed, fringilla non, odio. Nulla porta, tortor non
      suscipit gravida, velit enim aliquam quam, nec condimentum orci augue vel
      magna. Nulla facilisi. Donec ipsum enim, congue in, tempus id, pulvinar
      sagittis, leo. Donec et elit in nunc blandit auctor. Nulla congue urna
      quis lorem. Nam rhoncus pede sed nunc. Etiam vitae quam. Fusce feugiat
      pede vel quam. In et augue.
    </p>
    <p>
      Phasellus mollis dictum nulla. Integer vitae neque vitae eros fringilla
      rutrum. Vestibulum in pede adipiscing mi dapibus condimentum. Etiam felis
      risus, condimentum in, malesuada eget, pretium ut, sapien. Suspendisse
      placerat lectus venenatis lorem. Sed accumsan aliquam enim. Etiam
      hendrerit, metus eu semper rutrum, nisl elit pharetra purus, non interdum
      nibh enim eget augue. Sed mauris. Nam varius odio a sapien. Aenean rutrum
      dictum sapien. Fusce pharetra elementum ligula. Nunc eu mi non augue
      iaculis facilisis. Morbi interdum. Donec nisi arcu, rhoncus ac, vestibulum
      ut, pellentesque nec, risus. Maecenas tempus facilisis neque. Nulla mattis
      odio vitae tortor. Fusce iaculis. Aliquam rhoncus, diam quis tincidunt
      facilisis, sem quam luctus augue, ut posuere neque sem vitae neque.
    </p>
  </>
)
