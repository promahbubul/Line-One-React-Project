import {
  DefaultCarousel,
  LazyLoadingImages,
  SpaceBetween,
  Zoom,
  FlipEffect,
  CubeEffect,
  CardEffect,
  Pagination,
  VerticalSlider,
  WithScrollBar,
  FadeEffect,
  CoverFlowEffect,
  Parallax,
  CreativeEffect,
} from "@/components/components/carousel";

const Carousel = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="space-y-5">
        <DefaultCarousel />
        <LazyLoadingImages />
        <SpaceBetween />
        <Zoom />
        <FlipEffect />
        <CubeEffect />
        <CardEffect />
      </div>
      <div className="space-y-5">
        <Pagination />
        <VerticalSlider />
        <WithScrollBar />
        <FadeEffect />
        <CoverFlowEffect />
        <Parallax />
        <CreativeEffect />
      </div>
    </div>
  );
};

export default Carousel;
