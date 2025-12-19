import React from "react";

type DeviceImage = { src: string; alt?: string };

type Props = {
  desktop: DeviceImage;
  tablet?: DeviceImage | undefined;
  mobile?: DeviceImage | undefined;
};

const DeviceShowcase: React.FC<Props> = ({ desktop, tablet, mobile }) => {
  return (
    <div className="mx-auto mt-4 w-full max-w-4xl">
      <div className="relative aspect-[16/10]">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Frame aspect="16/10" prominent>
            <img
              src={desktop.src}
              alt={desktop.alt ?? "Desktop view"}
              className="h-full w-auto min-w-full object-cover"
              loading="lazy"
            />
          </Frame>
        </div>

        {tablet && (
          <div className="absolute top-0 right-0 z-20 translate-x-[12%] md:bottom-0 -translate-y-[8%] scale-[0.75] xl:left-0 lg:-translate-x-[2%] xl:-translate-x-[2%] md:translate-y-[2%] lg:translate-y-[20%] lg:scale-100 sm:translate-y-[25%] xl:translate-y-[35%]">
            <Frame aspect="3/4" maxWidth="w-72">
              <img
                src={tablet.src}
                alt={tablet.alt ?? "Tablet view"}
                className="h-full w-auto object-cover"
                loading="lazy"
              />
            </Frame>
          </div>
        )}

        {mobile && (
          <div className="absolute bottom-0 right-0 z-30 translate-x-[8%] translate-y-[50%] sm:translate-y-[20%]  lg:translate-x-[10%] lg:translate-y-[40%] xl:translate-x-[25%] md:translate-y-[20%] md:-translate-x-[0%] xl:translate-y-[15%]">
            <Frame aspect="9/19" maxWidth="w-32">
              <img
                src={mobile.src}
                alt={mobile.alt ?? "Mobile view"}
                className="h-full w-auto object-cover"
                loading="lazy"
              />
            </Frame>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceShowcase;

type FrameProps = {
  aspect: string;
  maxWidth?: string;
  prominent?: boolean;
  children: React.ReactNode;
};

const Frame: React.FC<FrameProps> = ({
  aspect,
  maxWidth,
  prominent,
  children,
}) => {
  return (
    <div
      className={`relative ${
        maxWidth ?? "w-full"
      } rounded-xl bg-zinc-900 p-2 shadow ${
        prominent ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div
        className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-black"
        style={{ aspectRatio: aspect }}
      >
        {children}
      </div>
    </div>
  );
};
