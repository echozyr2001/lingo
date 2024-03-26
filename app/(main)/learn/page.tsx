import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";

const Learn = () => {
  return (
    <div className="flex flex-row-reverse px-6 gap-[48px]">
      <StickyWrapper>s</StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default Learn;
