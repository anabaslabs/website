"use client"
import PixelBlast from '../components/PixelBlast';
export default function Home() {
  return (
    <main style={{ width: '100%', height: '600px', position: 'relative' }}>
     <PixelBlast

    variant="circle"

    pixelSize={12}

    color="#ec4e0c"

    patternScale={3}

    patternDensity={1}

    pixelSizeJitter={1}

    // enableRipples

    rippleSpeed={0.4}

    rippleThickness={0.12}

    rippleIntensityScale={2}

    liquid

    liquidStrength={0.12}

    liquidRadius={0.5}

    liquidWobbleSpeed={2}

    speed={0.2}

    edgeFade={0}

    transparent

  />
    </main>
  );
}
